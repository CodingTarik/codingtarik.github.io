import { useState, useEffect, useCallback } from 'react';
import { getCourseLessonCount } from '../utils/courseUtils';

const STORAGE_KEY = 'learning_hub_progress_v1';

export function useCourseProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error('Failed to parse learning hub progress from localStorage', e);
      return {};
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save learning hub progress to localStorage', e);
    }
  }, [progress]);

  /**
   * Check if a lesson/chapter is marked completed
   */
  const isLessonCompleted = useCallback((courseId, lessonId) => {
    return !!progress[courseId]?.completedLessons?.includes(lessonId);
  }, [progress]);

  /**
   * Toggle completion status of a lesson/chapter
   */
  const toggleLessonCompleted = useCallback((courseId, lessonId) => {
    setProgress((prev) => {
      const coursePrev = prev[courseId] || { completedLessons: [], lastActiveLesson: null };
      const currentCompleted = coursePrev.completedLessons || [];
      
      const isDone = currentCompleted.includes(lessonId);
      const updatedCompleted = isDone
        ? currentCompleted.filter((id) => id !== lessonId)
        : [...currentCompleted, lessonId];

      return {
        ...prev,
        [courseId]: {
          ...coursePrev,
          completedLessons: updatedCompleted,
          lastActiveLesson: lessonId,
          lastUpdated: new Date().toISOString(),
        },
      };
    });
  }, []);

  /**
   * Set last active lesson for quick resume
   */
  const setLastActiveLesson = useCallback((courseId, lessonId) => {
    setProgress((prev) => {
      const coursePrev = prev[courseId] || { completedLessons: [] };
      return {
        ...prev,
        [courseId]: {
          ...coursePrev,
          lastActiveLesson: lessonId,
          lastUpdated: new Date().toISOString(),
        },
      };
    });
  }, []);

  /**
   * Get progress stats for a single course
   */
  const getCourseStats = useCallback((course) => {
    if (!course) return { completedCount: 0, totalCount: 0, percentage: 0, isCompleted: false };
    
    const totalCount = getCourseLessonCount(course);
    const completedList = progress[course.id]?.completedLessons || [];
    const completedCount = completedList.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    return {
      completedCount,
      totalCount,
      percentage,
      isCompleted: totalCount > 0 && completedCount >= totalCount,
      lastActiveLesson: progress[course.id]?.lastActiveLesson || null,
    };
  }, [progress]);

  /**
   * Get overall stats across all courses
   */
  const getOverallStats = useCallback((allCourses = []) => {
    let startedCourses = 0;
    let completedCourses = 0;
    let totalLessonsCompleted = 0;

    allCourses.forEach((c) => {
      const stats = getCourseStats(c);
      if (stats.completedCount > 0) startedCourses++;
      if (stats.isCompleted) completedCourses++;
      totalLessonsCompleted += stats.completedCount;
    });

    return {
      startedCourses,
      completedCourses,
      totalLessonsCompleted,
    };
  }, [getCourseStats]);

  /**
   * Reset progress for a specific course
   */
  const resetCourseProgress = useCallback((courseId) => {
    setProgress((prev) => {
      const updated = { ...prev };
      delete updated[courseId];
      return updated;
    });
  }, []);

  return {
    progress,
    isLessonCompleted,
    toggleLessonCompleted,
    setLastActiveLesson,
    getCourseStats,
    getOverallStats,
    resetCourseProgress,
  };
}
