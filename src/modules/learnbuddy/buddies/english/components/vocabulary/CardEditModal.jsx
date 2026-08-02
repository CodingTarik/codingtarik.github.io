import React, { useState } from 'react';
import { X, Save, Image as ImageIcon, Trash2 } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import ImageSearchModal from './ImageSearchModal';

function CardEditModal({ isOpen, onClose, card, onSave, onDelete, deckId, updateCardLocally, updatePendingCount }) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    word: card?.word || '',
    translation: card?.translation || '',
    explanation: card?.explanation || '',
    ratingGeneral: card?.ratingGeneral || 0,
    image_url: card?.image_url || ''
  });
  const [showImageModal, setShowImageModal] = useState(false);

  // Update formData when card changes
  React.useEffect(() => {
    if (card) {
      setFormData({
        word: card.word || '',
        translation: card.translation || '',
        explanation: card.explanation || '',
        ratingGeneral: card.ratingGeneral || 0,
        image_url: card.image_url || ''
      });
    }
  }, [card]);

  const handleSave = () => {
    if (!formData.word.trim() || !formData.translation.trim()) {
      return;
    }

    const updatedCard = {
      ...card,
      ...formData
    };

    // Call onSave callback with the updated card
    if (onSave) {
      onSave(updatedCard);
    }
    
    onClose();
  };

  const handleImageSelect = (imageUrl) => {
    setFormData({ ...formData, image_url: imageUrl });
  };

  const handleDelete = () => {
    if (!window.confirm(
      language === 'en' 
        ? 'Are you sure you want to delete this card? This action cannot be undone.'
        : 'Möchtest du diese Karte wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.'
    )) {
      return;
    }

    if (onDelete) {
      onDelete(card);
    }
    onClose();
  };

  if (!isOpen || !card) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-rose-200 dark:border-rose-800">
          <div className="sticky top-0 bg-gradient-to-r from-rose-500 to-pink-500 p-6 flex items-center justify-between rounded-t-2xl mb-4">
            <h3 className="text-xl font-bold text-white">
              {language === 'en' ? 'Edit Card' : 'Karte bearbeiten'}
            </h3>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="px-6 pb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Word / Phrase' : 'Wort / Phrase'} *
                </label>
                <input
                  type="text"
                  value={formData.word}
                  onChange={(e) => setFormData({ ...formData, word: e.target.value })}
                  placeholder={language === 'en' ? 'e.g., serendipity' : 'z.B., serendipity'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Translation' : 'Übersetzung'} *
                </label>
                <input
                  type="text"
                  value={formData.translation}
                  onChange={(e) => setFormData({ ...formData, translation: e.target.value })}
                  placeholder={language === 'en' ? 'e.g., glücklicher Zufall' : 'z.B., glücklicher Zufall'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Additional Info (Markdown supported)' : 'Weitere Info (Markdown unterstützt)'}
                </label>
                <textarea
                  value={formData.explanation}
                  onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                  placeholder={language === 'en' 
                    ? 'Example sentence, pronunciation, notes...'
                    : 'Beispielsatz, Aussprache, Notizen...'}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none resize-none"
                />
              </div>

              {/* Image URL Field */}
              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Image' : 'Bild'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder={language === 'en' ? 'Image URL or click search...' : 'Bild-URL oder Suche klicken...'}
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none font-mono text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowImageModal(true)}
                    className="px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <ImageIcon size={20} />
                    {language === 'en' ? 'Search' : 'Suchen'}
                  </button>
                  {formData.image_url && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image_url: '' })}
                      className="px-4 py-3 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold rounded-xl hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
                      title={language === 'en' ? 'Remove image' : 'Bild entfernen'}
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
                {formData.image_url && (
                  <div className="mt-3 rounded-xl overflow-hidden border-2 border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-900 max-w-md">
                    <img
                      src={formData.image_url}
                      alt="Preview"
                      className="w-full h-auto max-h-48 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                {onDelete && (
                  <button
                    onClick={handleDelete}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={20} />
                    {language === 'en' ? 'Delete' : 'Löschen'}
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold rounded-xl hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors"
                >
                  <X size={20} />
                  {language === 'en' ? 'Cancel' : 'Abbrechen'}
                </button>
                <button
                  onClick={handleSave}
                  disabled={!formData.word.trim() || !formData.translation.trim()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={20} />
                  {language === 'en' ? 'Save' : 'Speichern'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Search Modal */}
      <ImageSearchModal
        isOpen={showImageModal}
        onClose={() => setShowImageModal(false)}
        onSelectImage={handleImageSelect}
        currentImageUrl={formData.image_url}
      />
    </>
  );
}

export default CardEditModal;

