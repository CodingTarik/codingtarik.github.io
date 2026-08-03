import React, { useState, useEffect } from 'react';
import { useCourseProgress } from './hooks/useCourseProgress';
import LearningHubPage from './components/LearningHubPage';
import CourseViewer from './components/CourseViewer';
import PagedBookViewer from './components/PagedBookViewer';
import { getCourseById } from './utils/courseUtils';
import BlogSubpageLayout from '../blog/components/BlogSubpageLayout';
import { navigate, getPath } from '../../utils/navigation';

export default function LearningHubView({ routeParams }) {
  const progressHook = useCourseProgress();
  const { isLessonCompleted, toggleLessonCompleted, getCourseStats, setLastActiveLesson, resetCourseProgress } = progressHook;

  // Extract route parameters if present
  const path = getPath();
  const courseMatch = path.match(/^\/learning-hub\/course\/([^/]+)(?:\/lesson\/([^/]+))?$/);

  const activeCourseId = courseMatch ? courseMatch[1] : null;
  const activeLessonIdFromUrl = courseMatch ? courseMatch[2] : null;

  const currentCourse = activeCourseId ? getCourseById(activeCourseId) : null;

  // Active lesson logic
  const defaultLessonId = currentCourse?.type === 'book'
    ? currentCourse?.chapters?.[0]?.id
    : currentCourse?.lessons?.[0]?.id;

  const activeLessonId = activeLessonIdFromUrl || progressHook.progress[activeCourseId]?.lastActiveLesson || defaultLessonId;

  const handleSelectCourse = (course) => {
    const stats = getCourseStats(course);
    const lastLesson = stats.lastActiveLesson || (course.type === 'book' ? course.chapters?.[0]?.id : course.lessons?.[0]?.id);
    if (course.type === 'book') {
      navigate(`/learning-hub/course/${course.id}`);
    } else {
      navigate(`/learning-hub/course/${course.id}/lesson/${lastLesson}`);
    }
  };

  const handleSelectLesson = (lessonId) => {
    if (!currentCourse) return;
    setLastActiveLesson(currentCourse.id, lessonId);
    navigate(`/learning-hub/course/${currentCourse.id}/lesson/${lessonId}`);
  };

  const handleBackToOverview = () => {
    navigate('/learning-hub');
  };

  // If inside a course detail view
  if (currentCourse) {
    if (currentCourse.type === 'book') {
      return (
        <PagedBookViewer
          course={currentCourse}
          onBackToOverview={handleBackToOverview}
          isLessonCompleted={isLessonCompleted}
          toggleLessonCompleted={toggleLessonCompleted}
          getCourseStats={getCourseStats}
        />
      );
    }

    return (
      <CourseViewer
        course={currentCourse}
        activeLessonId={activeLessonId}
        onSelectLesson={handleSelectLesson}
        onBackToOverview={handleBackToOverview}
        isLessonCompleted={isLessonCompleted}
        toggleLessonCompleted={toggleLessonCompleted}
        getCourseStats={getCourseStats}
        resetCourseProgress={resetCourseProgress}
      />
    );
  }

  // Otherwise, display overview grid inside blog subpage layout
  return (
    <BlogSubpageLayout selectedTab="learning-hub">
      <LearningHubPage
        onSelectCourse={handleSelectCourse}
        progressHook={progressHook}
      />
    </BlogSubpageLayout>
  );
}
