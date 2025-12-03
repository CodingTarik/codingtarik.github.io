import React, { useState, useEffect } from 'react';
import { X, Search, Loader2, Image as ImageIcon, RefreshCw, Check } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';

// Wir nutzen hier LoremFlickr oder Unsplash Source mit dem "Lock" oder "Sig" Trick.
// Unsplash Source ist leider oft instabil/deprecated, daher ist LoremFlickr oft zuverlässiger für Keywords ohne API Key.
// Wenn du unbedingt Unsplash willst, ändere die BASE URL zu: 'https://source.unsplash.com/random/400x300';
const IMAGE_SERVICE_BASE = 'https://loremflickr.com/400/300'; 

function ImageSearchModal({ isOpen, onClose, onSelectImage, currentImageUrl }) {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [manualUrl, setManualUrl] = useState('');
  
  // Wir generieren eine "Session ID" (Timestamp), damit beim Neuladen komplett neue Bilder kommen
  const [searchSession, setSearchSession] = useState(Date.now());
  
  // Das sind die Platzhalter für unser Grid (z.B. 9 Bilder)
  const [candidates, setCandidates] = useState([]);

  // Initialisiere mit 9 leeren Plätzen, wenn gesucht wird
  const triggerSearch = () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setSearchSession(Date.now()); // Neue Session erzwingt neue Bilder
    setCandidates(Array.from({ length: 9 }, (_, i) => i)); // Erstellt Array [0...8]
    setSelectedCandidate('');
    
    // Kleiner Fake-Timeout für UX, da die Bilder eh einzeln laden
    setTimeout(() => setIsSearching(false), 500);
  };

  const handleSelectCandidate = (url) => {
    setSelectedCandidate(url);
    setManualUrl(url); // Synchronisiere mit dem manuellen Input
  };

  const handleConfirm = () => {
    if (manualUrl) {
      onSelectImage(manualUrl);
      onClose();
    }
  };

  const handleRemove = () => {
    onSelectImage('');
    onClose();
  };

  // Generiert die URL für ein spezifisches Grid-Item
  // Der Trick ist der ?lock= oder ?sig= Parameter, der das Bild "festpinnt" für diesen Index
  const getCandidateUrl = (index) => {
    const keyword = encodeURIComponent(searchQuery);
    // LoremFlickr nutzt 'lock', Unsplash nutzt 'sig'. Wir bauen es so, dass es eindeutig ist.
    return `${IMAGE_SERVICE_BASE}/${keyword}?lock=${searchSession + index}`;
    
    // Falls du Unsplash Source nutzen willst (Achtung: oft langsam/down):
    // return `https://source.unsplash.com/random/400x300/?${keyword}&sig=${searchSession + index}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 dark:border-stone-700">
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
            <ImageIcon size={24} className="text-purple-500" />
            {language === 'en' ? 'Image Search' : 'Bildersuche'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-lg transition-colors"
          >
            <X size={20} className="text-stone-600 dark:text-stone-400" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Search Bar */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && triggerSearch()}
                placeholder={language === 'en' ? 'Keywords (e.g. nature, tech)...' : 'Suchbegriffe (z.B. Natur, Technik)...'}
                className="flex-1 px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-purple-500 focus:outline-none"
                autoFocus
              />
              <button
                onClick={triggerSearch}
                disabled={!searchQuery.trim()}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSearching ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
                {language === 'en' ? 'Search' : 'Suchen'}
              </button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                {candidates.length > 0 
                  ? (language === 'en' ? 'Select an image' : 'Wähle ein Bild aus') 
                  : (language === 'en' ? 'Suggestions' : 'Vorschläge')}
              </label>
              
              {candidates.length > 0 && (
                <button 
                  onClick={triggerSearch}
                  className="text-xs flex items-center gap-1 text-purple-500 hover:text-purple-600 font-medium"
                >
                  <RefreshCw size={12} />
                  {language === 'en' ? 'Load new images' : 'Neue Bilder laden'}
                </button>
              )}
            </div>

            {candidates.length === 0 ? (
              // Empty State / Placeholder
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 opacity-50 pointer-events-none grayscale">
                 {[1,2,3].map(i => (
                   <div key={i} className="aspect-[4/3] bg-stone-200 dark:bg-stone-700 rounded-xl animate-pulse" />
                 ))}
              </div>
            ) : (
              // Image Grid
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {candidates.map((index) => {
                  const url = getCandidateUrl(index);
                  const isSelected = selectedCandidate === url;
                  
                  return (
                    <button
                      key={`${searchSession}-${index}`}
                      onClick={() => handleSelectCandidate(url)}
                      className={`group relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all hover:shadow-md ${
                        isSelected 
                          ? 'border-purple-500 ring-2 ring-purple-500 ring-offset-2 dark:ring-offset-stone-800' 
                          : 'border-transparent hover:border-stone-300 dark:hover:border-stone-600'
                      }`}
                    >
                      {/* Image Loader & Error Handling Wrapper */}
                      <ImageWithLoader 
                        src={url} 
                        alt={`${searchQuery} ${index + 1}`}
                      />
                      
                      {/* Selection Overlay */}
                      <div className={`absolute inset-0 bg-purple-500/20 transition-opacity flex items-center justify-center ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        {isSelected && (
                          <div className="bg-purple-500 text-white p-2 rounded-full shadow-lg">
                            <Check size={20} strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Manual URL Fallback */}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-700">
            <details className="text-sm">
              <summary className="cursor-pointer text-stone-500 hover:text-purple-500 font-medium list-none flex items-center gap-2">
                <span>{language === 'en' ? 'Enter URL manually' : 'URL manuell eingeben'}</span>
                <div className="h-[1px] flex-1 bg-stone-200 dark:bg-stone-700"></div>
              </summary>
              <div className="mt-3">
                <input
                  type="url"
                  value={manualUrl}
                  onChange={(e) => {
                    setManualUrl(e.target.value);
                    setSelectedCandidate(''); // Clear grid selection if typing manually
                  }}
                  placeholder="https://..."
                  className="w-full px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 text-sm focus:border-purple-500 focus:outline-none"
                />
              </div>
            </details>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/50">
          <button
            onClick={handleRemove}
            disabled={!currentImageUrl}
            className="px-4 py-2 text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-0"
          >
            {language === 'en' ? 'Remove' : 'Entfernen'}
          </button>
          
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 text-stone-600 dark:text-stone-300 font-bold hover:bg-stone-200 dark:hover:bg-stone-700 rounded-xl transition-colors"
            >
              {language === 'en' ? 'Cancel' : 'Abbrechen'}
            </button>
            <button
              onClick={handleConfirm}
              disabled={!manualUrl}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {language === 'en' ? 'Use Image' : 'Bild verwenden'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for individual image loading states
const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="w-full h-full bg-stone-200 dark:bg-stone-700 relative">
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 size={20} className="animate-spin text-stone-400" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 bg-stone-100 dark:bg-stone-800">
          <ImageIcon size={24} className="mb-1 opacity-50" />
          <span className="text-xs">Error</span>
        </div>
      )}
    </div>
  );
};

export default ImageSearchModal;