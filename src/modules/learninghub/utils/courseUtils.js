// Utility functions for discovering and loading courses dynamically from /posts/learninghub/ and /courses/

const postsLearningHub = import.meta.glob('/posts/learninghub/**/*.js', { eager: true });
const relativePostsLearningHub = import.meta.glob('../../../../posts/learninghub/**/*.js', { eager: true });

const rootCourses = import.meta.glob('/courses/**/*.js', { eager: true });
const relativeCourses = import.meta.glob('../../../../courses/**/*.js', { eager: true });

const allCourseModules = {
  ...postsLearningHub,
  ...relativePostsLearningHub,
  ...rootCourses,
  ...relativeCourses,
};

// Deduplicate courses by ID
const coursesMap = new Map();

Object.entries(allCourseModules).forEach(([filepath, module]) => {
  const course = module.default;
  if (course && course.id) {
    coursesMap.set(course.id, {
      ...course,
      _filepath: filepath,
    });
  }
});

const courses = Array.from(coursesMap.values());

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
  return coursesMap.get(courseId) || null;
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
