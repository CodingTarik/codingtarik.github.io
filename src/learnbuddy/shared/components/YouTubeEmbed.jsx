import React from 'react';

function YouTubeEmbed({ videoId, title = "YouTube video player" }) {
  if (!videoId) return null;

  return (
    <div className="my-6 flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default YouTubeEmbed;


