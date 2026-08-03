// Utility functions for discovering and loading courses dynamically

const rootCourses = import.meta.glob('/courses/**/*.js', { eager: true });
const srcCourses = import.meta.glob('../../../courses/**/*.js', { eager: true });

const allCourseModules = {
  ...rootCourses,
  ...srcCourses,
};

// Extract courses array
const courses = Object.entries(allCourseModules)
  .map(([filepath, module]) => {
    const course = module.default;
    if (!course || !course.id) return null;
    return {
      ...course,
      _filepath: filepath,
    };
  })
  .filter(Boolean);

/**
 * Get all available courses
 */
export function getAllCourses() {
  return [...courses];
}

/**
 * Get a course by its ID
 */
export function getCourseById(courseId) {
  return courses.find((c) => c.id === courseId) || null;
}

/**
 * Get unique categories across all courses
 */
export function getCourseCategories() {
  const categories = new Set();
  courses.forEach((c) => {
    if (c.category) categories.add(c.category);
  });
  return Array.from(categories);
}

/**
 * Get total lesson count for a course
 */
export function getCourseLessonCount(course) {
  if (!course) return 0;
  if (course.type === 'book') {
    return course.chapters ? course.chapters.length : 0;
  }
  return course.lessons ? course.lessons.length : 0;
}
