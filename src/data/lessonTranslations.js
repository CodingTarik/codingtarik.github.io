// Lesson translations for English
// German is the default in lesson files

// Helper function to get a specific lesson by its ID
export const getLessonById = (id) => {
  return getAllLessons().find(lesson => lesson.id === id);
};

// Translations for a few static strings or category titles that are not part of the lesson files.
export const categoryTranslations = {
  module1_1: {
    de: "Grundlagen & Einstieg",
    en: "Basics & Getting Started"
  },
  module1_2: {
    de: "Fundamentale Bewegungsprinzipien",
    en: "Fundamental Movement Principles"
  }
};

/**
 * Retrieves the translated version of a lesson or a specific part of it.
 * @param {object} lesson The lesson object.
 * @param {string} language 'de' or 'en'.
 * @param {string|null} part The specific part of the lesson to retrieve (e.g., 'title', 'description', 'content', 'task'). If null, returns the full translated lesson object.
 * @returns {string|object} The translated string or object.
 */
export const getTranslatedLesson = (lesson, language, part = null) => {
  if (!lesson) return part ? '' : {};
  const lang = lesson[language] ? language : 'en'; // Fallback to English
  const translatedLesson = lesson[lang];

  if (!translatedLesson) return part ? '' : {};

  if (part) {
    return translatedLesson[part] || (lesson.en ? lesson.en[part] : '') || '';
  }
  return translatedLesson;
};

