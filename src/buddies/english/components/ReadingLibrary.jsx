import React, { useState, useEffect } from 'react';
import { BookOpen, Upload, Trash2, Eye, BookMarked, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import PDFReader from './PDFReader';
import { initDB, savePDF, getPDF, deletePDF, generateThumbnail } from '../../../utils/pdfStorage';

function ReadingLibrary() {
  const { language } = useLanguage();
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Initialize IndexedDB and load books
  useEffect(() => {
    const loadData = async () => {
      await initDB();
      
      // Clean up old localStorage data
      const oldData = localStorage.getItem('englishBuddyBooks');
      if (oldData) {
        console.log('Cleaning up old localStorage data...');
        localStorage.removeItem('englishBuddyBooks');
      }
      
      // Clean up old open book tracking
      const oldOpenBook = localStorage.getItem('englishBuddyOpenBook');
      if (oldOpenBook) {
        console.log('Cleaning up old open book tracking...');
        localStorage.removeItem('englishBuddyOpenBook');
      }
      
      // Load book metadata from localStorage (without PDF data)
      const savedBooks = localStorage.getItem('englishBuddyBooksMetadata');
      if (savedBooks) {
        setBooks(JSON.parse(savedBooks));
      }
      
      // REMOVED: Auto-loading of last open book
      // This was causing the PDF to reopen after closing when navigating between tabs
      // Users now need to explicitly click "Read" to open a book
    };
    
    loadData();
  }, []);

  // Save book metadata to localStorage (without PDF data)
  useEffect(() => {
    if (books.length > 0) {
      // Remove pdfData before saving to localStorage
      const booksMetadata = books.map(({ pdfData, ...book }) => book);
      localStorage.setItem('englishBuddyBooksMetadata', JSON.stringify(booksMetadata));
    }
  }, [books]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || file.type !== 'application/pdf') {
      alert(language === 'de' ? 'Bitte wähle eine PDF-Datei!' : 'Please select a PDF file!');
      return;
    }

    setIsUploading(true);

    try {
      // Convert PDF to base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target.result;
        const bookId = Date.now();
        
        // Generate thumbnail from first page
        const thumbnail = await generateThumbnail(base64);
        
        // Save PDF data to IndexedDB
        await savePDF(bookId, base64);
        
        // Save only metadata to state (without pdfData, but with thumbnail)
        const newBook = {
          id: bookId,
          title: file.name.replace('.pdf', ''),
          fileName: file.name,
          uploadDate: new Date().toISOString(),
          currentPage: 1,
          totalPages: 0, // Will be set when PDF is loaded
          progress: 0,
          savedWords: [],
          savedSentences: [],
          lastRead: null,
          thumbnail: thumbnail // Store thumbnail in metadata
        };
        setBooks([...books, newBook]);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading PDF:', error);
      alert(language === 'de' ? 'Fehler beim Hochladen!' : 'Error uploading file!');
      setIsUploading(false);
    }
  };

  const deleteBook = async (bookId) => {
    if (window.confirm(language === 'de' ? 'Buch wirklich löschen?' : 'Really delete this book?')) {
      // Delete from IndexedDB
      await deletePDF(bookId);
      
      // Delete from state
      setBooks(books.filter(b => b.id !== bookId));
      if (selectedBook?.id === bookId) {
        setSelectedBook(null);
      }
    }
  };

  const openBook = async (book) => {
    // Load PDF data from IndexedDB
    const pdfData = await getPDF(book.id);
    if (pdfData) {
      setSelectedBook({ ...book, pdfData });
    } else {
      alert(language === 'de' ? 'PDF konnte nicht geladen werden!' : 'Could not load PDF!');
    }
  };

  const closeReader = () => {
    setSelectedBook(null);
  };

  const updateBookProgress = (bookId, updates) => {
    const updatedBooks = books.map(book => 
      book.id === bookId 
        ? { ...book, ...updates, lastRead: new Date().toISOString() }
        : book
    );
    setBooks(updatedBooks);
    
    // Also update selectedBook if it's the one being updated
    if (selectedBook && selectedBook.id === bookId) {
      setSelectedBook({
        ...selectedBook,
        ...updates,
        lastRead: new Date().toISOString()
      });
    }
  };

  if (selectedBook) {
    return (
      <PDFReader 
        book={selectedBook} 
        onClose={closeReader}
        onUpdate={(updates) => updateBookProgress(selectedBook.id, updates)}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2 flex items-center gap-3">
            <BookOpen className="text-rose-500" />
            {language === 'de' ? 'Meine Lese-Bibliothek' : 'My Reading Library'}
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            {language === 'de' 
              ? 'Lade PDFs hoch, lese sie und speichere Vokabeln!' 
              : 'Upload PDFs, read them, and save vocabulary!'}
          </p>
        </div>

        {/* Upload Button */}
        <label className={`bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex items-center gap-2 ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
          <Upload size={20} className={isUploading ? 'animate-bounce' : ''} />
          {isUploading 
            ? (language === 'de' ? 'Verarbeite PDF...' : 'Processing PDF...') 
            : (language === 'de' ? 'PDF hochladen' : 'Upload PDF')
          }
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileUpload}
            className="hidden"
            disabled={isUploading}
          />
        </label>
      </div>

      {/* Books Grid */}
      {books.length === 0 ? (
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
          <BookOpen size={64} className="mx-auto text-stone-300 dark:text-stone-600 mb-4" />
          <h2 className="text-xl font-bold text-stone-800 dark:text-stone-200 mb-2">
            {language === 'de' ? 'Keine Bücher' : 'No Books Yet'}
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-6">
            {language === 'de' 
              ? 'Lade dein erstes PDF hoch, um mit dem Lesen zu beginnen!' 
              : 'Upload your first PDF to start reading!'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(book => (
            <div
              key={book.id}
              className="bg-white dark:bg-stone-800 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Book Cover/Preview */}
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 flex items-center justify-center h-48 overflow-hidden">
                {book.thumbnail ? (
                  <img 
                    src={book.thumbnail} 
                    alt={book.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <BookMarked size={64} className="text-rose-500" />
                )}
              </div>

              {/* Book Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-stone-800 dark:text-stone-200 mb-2 truncate">
                  {book.title}
                </h3>
                
                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-stone-600 dark:text-stone-400 mb-1">
                    <span>{language === 'de' ? 'Fortschritt' : 'Progress'}</span>
                    <span>{book.progress}%</span>
                  </div>
                  <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2">
                    <div
                      className="bg-rose-500 h-2 rounded-full transition-all"
                      style={{ width: `${book.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-stone-600 dark:text-stone-400 mb-4">
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} />
                    <span>{book.currentPage}/{book.totalPages || '?'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookMarked size={14} />
                    <span>{book.savedWords.length + book.savedSentences.length}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openBook(book);
                    }}
                    className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                    type="button"
                  >
                    <Eye size={16} />
                    {language === 'de' ? 'Lesen' : 'Read'}
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      deleteBook(book.id);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
                    type="button"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReadingLibrary;

