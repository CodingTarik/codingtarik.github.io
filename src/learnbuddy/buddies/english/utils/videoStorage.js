/**
 * Video and Subtitle Storage using IndexedDB
 * For large video files that exceed localStorage limits
 */

const DB_NAME = 'EnglishLearningVideos';
const DB_VERSION = 1;
const STORE_VIDEOS = 'videos';
const STORE_FAVORITES = 'favorites';

/**
 * Initialize IndexedDB
 */
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Videos store
      if (!db.objectStoreNames.contains(STORE_VIDEOS)) {
        const videoStore = db.createObjectStore(STORE_VIDEOS, { keyPath: 'id' });
        videoStore.createIndex('createdAt', 'createdAt', { unique: false });
      }

      // Favorites store
      if (!db.objectStoreNames.contains(STORE_FAVORITES)) {
        const favStore = db.createObjectStore(STORE_FAVORITES, { keyPath: 'id', autoIncrement: true });
        favStore.createIndex('videoId', 'videoId', { unique: false });
        favStore.createIndex('createdAt', 'createdAt', { unique: false });
      }
    };
  });
}

/**
 * Save video with subtitles
 */
export async function saveVideo(videoFile, primarySubFile, secondarySubFile, metadata) {
  const db = await openDB();
  
  const videoData = {
    id: `video_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: videoFile.name,
    size: videoFile.size,
    type: videoFile.type,
    videoBlob: videoFile,
    primarySubtitle: primarySubFile ? await primarySubFile.text() : null,
    secondarySubtitle: secondarySubFile ? await secondarySubFile.text() : null,
    metadata: metadata || {},
    createdAt: new Date().toISOString()
  };

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_VIDEOS], 'readwrite');
    const store = transaction.objectStore(STORE_VIDEOS);
    const request = store.add(videoData);

    request.onsuccess = () => resolve(videoData.id);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get all videos
 */
export async function getAllVideos() {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_VIDEOS], 'readonly');
    const store = transaction.objectStore(STORE_VIDEOS);
    const request = store.getAll();

    request.onsuccess = () => {
      // Convert video blobs to URLs for display
      const videos = request.result.map(video => ({
        ...video,
        videoUrl: URL.createObjectURL(video.videoBlob)
      }));
      resolve(videos);
    };
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get single video by ID
 */
export async function getVideo(videoId) {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_VIDEOS], 'readonly');
    const store = transaction.objectStore(STORE_VIDEOS);
    const request = store.get(videoId);

    request.onsuccess = () => {
      const video = request.result;
      if (video) {
        video.videoUrl = URL.createObjectURL(video.videoBlob);
      }
      resolve(video);
    };
    request.onerror = () => reject(request.error);
  });
}

/**
 * Delete video
 */
export async function deleteVideo(videoId) {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_VIDEOS, STORE_FAVORITES], 'readwrite');
    
    // Delete video
    const videoStore = transaction.objectStore(STORE_VIDEOS);
    videoStore.delete(videoId);

    // Delete associated favorites
    const favStore = transaction.objectStore(STORE_FAVORITES);
    const index = favStore.index('videoId');
    const favRequest = index.openCursor(IDBKeyRange.only(videoId));

    favRequest.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        cursor.delete();
        cursor.continue();
      }
    };

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

/**
 * Save favorite sentence
 */
export async function saveFavorite(videoId, subtitleId, primaryText, secondaryText, timestamp) {
  const db = await openDB();

  const favorite = {
    videoId,
    subtitleId,
    primaryText,
    secondaryText,
    timestamp,
    createdAt: new Date().toISOString()
  };

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_FAVORITES], 'readwrite');
    const store = transaction.objectStore(STORE_FAVORITES);
    const request = store.add(favorite);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get favorites for a video
 */
export async function getFavorites(videoId) {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_FAVORITES], 'readonly');
    const store = transaction.objectStore(STORE_FAVORITES);
    const index = store.index('videoId');
    const request = index.getAll(videoId);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Delete favorite
 */
export async function deleteFavorite(favoriteId) {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_FAVORITES], 'readwrite');
    const store = transaction.objectStore(STORE_FAVORITES);
    const request = store.delete(favoriteId);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

/**
 * Check if subtitle is favorited
 */
export async function isFavorited(videoId, subtitleId) {
  const favorites = await getFavorites(videoId);
  return favorites.some(fav => fav.subtitleId === subtitleId);
}

