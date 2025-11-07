import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, FileText } from 'lucide-react';
import { useLanguage } from '../../../../context/LanguageContext';
import { generateAppsScriptTemplate, getSpreadsheetHeaders } from '../../utils/googleSheetsAPI';

function DeckSetupModal({ isOpen, onClose, onSave, editingDeck }) {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [deckName, setDeckName] = useState('');
  const [deckDescription, setDeckDescription] = useState('');
  const [scriptUrl, setScriptUrl] = useState('');
  const [copied, setCopied] = useState(false);

  // Initialize form with editing deck data
  React.useEffect(() => {
    if (editingDeck && isOpen) {
      setDeckName(editingDeck.name || '');
      setDeckDescription(editingDeck.description || '');
      setScriptUrl(editingDeck.scriptUrl || '');
      setStep(1); // Start at step 1 for editing
    } else if (isOpen) {
      // Reset for new deck
      setDeckName('');
      setDeckDescription('');
      setScriptUrl('');
      setStep(1);
    }
  }, [editingDeck, isOpen]);

  const handleCopyScript = () => {
    navigator.clipboard.writeText(generateAppsScriptTemplate());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyHeaders = () => {
    navigator.clipboard.writeText(getSpreadsheetHeaders().join('\t'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (!deckName.trim() || !scriptUrl.trim()) {
      alert(language === 'en' ? 'Please fill in all required fields' : 'Bitte alle Pflichtfelder ausfüllen');
      return;
    }

    onSave({
      name: deckName.trim(),
      description: deckDescription.trim(),
      scriptUrl: scriptUrl.trim()
    });

    // Reset form
    setDeckName('');
    setDeckDescription('');
    setScriptUrl('');
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-stone-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-rose-500 to-pink-500 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">
            {editingDeck 
              ? (language === 'en' ? 'Edit Deck' : 'Deck bearbeiten')
              : (language === 'en' ? 'Create New Deck' : 'Neues Deck erstellen')}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 p-6 bg-stone-50 dark:bg-stone-900">
          {(editingDeck ? [1, 2] : [1, 2, 3]).map((num) => (
            <React.Fragment key={num}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                step >= num 
                  ? 'bg-rose-500 text-white' 
                  : 'bg-stone-300 dark:bg-stone-700 text-stone-600 dark:text-stone-400'
              }`}>
                {num}
              </div>
              {num < (editingDeck ? 2 : 3) && (
                <div className={`h-1 w-12 ${
                  step > num ? 'bg-rose-500' : 'bg-stone-300 dark:bg-stone-700'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
        

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                {language === 'en' ? 'Deck Information' : 'Deck-Informationen'}
              </h3>
              
              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Deck Name' : 'Deck-Name'} *
                </label>
                <input
                  type="text"
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                  placeholder={language === 'en' ? 'e.g. Business English' : 'z.B. Business Englisch'}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Description' : 'Beschreibung'}
                </label>
                <textarea
                  value={deckDescription}
                  onChange={(e) => setDeckDescription(e.target.value)}
                  placeholder={language === 'en' ? 'What is this deck about?' : 'Worum geht es in diesem Deck?'}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none resize-none"
                />
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!deckName.trim()}
                className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {editingDeck 
                  ? (language === 'en' ? 'Next' : 'Weiter')
                  : (language === 'en' ? 'Next: Setup Spreadsheet' : 'Weiter: Spreadsheet einrichten')}
              </button>
            </div>
          )}

          {/* Step 2: Edit URL or Google Sheets Setup */}
          {step === 2 && editingDeck && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                {language === 'en' ? 'Edit Spreadsheet Connection' : 'Spreadsheet-Verbindung bearbeiten'}
              </h3>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  ⚠️ {language === 'en' 
                    ? 'Warning: Changing the spreadsheet URL will connect this deck to a different spreadsheet. Make sure the new spreadsheet has the same structure and data.'
                    : 'Warnung: Das Ändern der Spreadsheet-URL verbindet dieses Deck mit einem anderen Spreadsheet. Stelle sicher, dass das neue Spreadsheet die gleiche Struktur und Daten hat.'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Web App URL' : 'Web-App-URL'} *
                </label>
                <input
                  type="url"
                  value={scriptUrl}
                  onChange={(e) => setScriptUrl(e.target.value)}
                  placeholder="https://script.google.com/macros/s/.../exec"
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none"
                />
                <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">
                  {language === 'en' 
                    ? 'Current URL: ' + (editingDeck.scriptUrl || 'None')
                    : 'Aktuelle URL: ' + (editingDeck.scriptUrl || 'Keine')}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold rounded-xl hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors"
                >
                  {language === 'en' ? 'Back' : 'Zurück'}
                </button>
                <button
                  onClick={handleSave}
                  disabled={!scriptUrl.trim()}
                  className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {language === 'en' ? 'Save Changes' : 'Änderungen speichern'}
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Google Sheets Setup (for new decks) */}
          {step === 2 && !editingDeck && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">
                {language === 'en' ? 'Setup Google Spreadsheet' : 'Google Spreadsheet einrichten'}
              </h3>

              {/* Instructions */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                  {language === 'en' ? 'Setup Instructions:' : 'Setup-Anleitung:'}
                </h4>
                <ol className="space-y-2 text-sm text-blue-700 dark:text-blue-300 list-decimal list-inside">
                  <li>
                    {language === 'en' 
                      ? 'Create a new Google Spreadsheet or open an existing one'
                      : 'Erstelle ein neues Google Spreadsheet oder öffne ein bestehendes'}
                  </li>
                  <li>
                    {language === 'en' 
                      ? 'Copy the headers and paste them in the first row'
                      : 'Kopiere die Header und füge sie in die erste Zeile ein'}
                  </li>
                  <li>
                    {language === 'en' 
                      ? 'Go to Extensions → Apps Script'
                      : 'Gehe zu Erweiterungen → Apps Script'}
                  </li>
                  <li>
                    {language === 'en' 
                      ? 'Copy the script below and paste it into Apps Script'
                      : 'Kopiere das Skript unten und füge es in Apps Script ein'}
                  </li>
                  <li>
                    {language === 'en' 
                      ? 'Deploy → New deployment → Type: Web app'
                      : 'Bereitstellen → Neue Bereitstellung → Typ: Web-App'}
                  </li>
                  <li>
                    {language === 'en' 
                      ? 'Access: Anyone, Execute as: Me'
                      : 'Zugriff: Jeder, Ausführen als: Ich'}
                  </li>
                  <li>
                    {language === 'en' 
                      ? 'Copy the Web App URL and paste it in the next step'
                      : 'Kopiere die Web-App-URL und füge sie im nächsten Schritt ein'}
                  </li>
                </ol>
              </div>

              {/* Copy Headers */}
              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Spreadsheet Headers' : 'Spreadsheet-Header'}
                </label>
                <div className="bg-stone-100 dark:bg-stone-900 p-4 rounded-xl border-2 border-stone-300 dark:border-stone-600">
                  <code className="text-xs text-stone-700 dark:text-stone-300 break-all">
                    {getSpreadsheetHeaders().join('\t')}
                  </code>
                </div>
                <button
                  onClick={handleCopyHeaders}
                  className="mt-2 flex items-center gap-2 px-4 py-2 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100 rounded-lg transition-colors"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied 
                    ? (language === 'en' ? 'Copied!' : 'Kopiert!')
                    : (language === 'en' ? 'Copy Headers' : 'Header kopieren')}
                </button>
              </div>

              {/* Copy Apps Script */}
              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Apps Script Code' : 'Apps Script Code'}
                </label>
                <div className="bg-stone-100 dark:bg-stone-900 p-4 rounded-xl border-2 border-stone-300 dark:border-stone-600 max-h-64 overflow-y-auto">
                  <pre className="text-xs text-stone-700 dark:text-stone-300">
                    {generateAppsScriptTemplate()}
                  </pre>
                </div>
                <button
                  onClick={handleCopyScript}
                  className="mt-2 flex items-center gap-2 px-4 py-2 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100 rounded-lg transition-colors"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied 
                    ? (language === 'en' ? 'Copied!' : 'Kopiert!')
                    : (language === 'en' ? 'Copy Script' : 'Script kopieren')}
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold rounded-xl hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors"
                >
                  {language === 'en' ? 'Back' : 'Zurück'}
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                >
                  {language === 'en' ? 'Next: Connect' : 'Weiter: Verbinden'}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Connect URL (only for new decks) */}
          {step === 3 && !editingDeck && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                {language === 'en' ? 'Connect Spreadsheet' : 'Spreadsheet verbinden'}
              </h3>

              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-4">
                <p className="text-sm text-green-800 dark:text-green-300">
                  {language === 'en' 
                    ? 'After deploying your Apps Script as a Web App, paste the URL here. It should look like: https://script.google.com/macros/s/.../exec'
                    : 'Nach der Bereitstellung deines Apps Scripts als Web-App, füge die URL hier ein. Sie sollte so aussehen: https://script.google.com/macros/s/.../exec'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                  {language === 'en' ? 'Web App URL' : 'Web-App-URL'} *
                </label>
                <input
                  type="url"
                  value={scriptUrl}
                  onChange={(e) => setScriptUrl(e.target.value)}
                  placeholder="https://script.google.com/macros/s/.../exec"
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:border-rose-500 focus:outline-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold rounded-xl hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors"
                >
                  {language === 'en' ? 'Back' : 'Zurück'}
                </button>
                <button
                  onClick={handleSave}
                  disabled={!scriptUrl.trim()}
                  className="flex-1 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {language === 'en' ? 'Create Deck' : 'Deck erstellen'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeckSetupModal;

