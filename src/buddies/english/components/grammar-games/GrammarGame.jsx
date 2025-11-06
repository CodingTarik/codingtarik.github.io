import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import SentenceBuilder from './SentenceBuilder';
import FixTheMistake from './FixTheMistake';
import TranslateThis from './TranslateThis';
import VerbConjugator from './VerbConjugator';
import TenseTimeline from './TenseTimeline';

/**
 * Generic wrapper component for grammar games
 * Usage in markdown:
 * <GrammarGame type="sentenceBuilder" data={exercisesArray} />
 */
function GrammarGame({ type, data, title, description }) {
  const { language } = useLanguage();

  // Process data to extract language-specific strings
  const processExercises = (exercises) => {
    if (!exercises) return [];
    
    return exercises.map(exercise => {
      const processed = { ...exercise };
      
      // Handle prompt (can be string or object with en/de)
      if (exercise.prompt && typeof exercise.prompt === 'object') {
        processed.prompt = exercise.prompt[language] || exercise.prompt.en;
      }
      
      // Handle explanation (can be string or object with en/de)
      if (exercise.explanation && typeof exercise.explanation === 'object') {
        processed.explanation = exercise.explanation[language] || exercise.explanation.en;
      }
      
      return processed;
    });
  };

  const renderGame = () => {
    const processedData = processExercises(data);
    
    switch (type) {
      case 'sentenceBuilder':
        return <SentenceBuilder exercises={processedData} language={language} />;
      
      case 'fixTheMistake':
        return <FixTheMistake exercises={processedData} language={language} />;
      
      case 'translateThis':
        return <TranslateThis exercises={processedData} language={language} />;
      
      case 'verbConjugator':
        return <VerbConjugator exercises={processedData} language={language} />;
      
      case 'tenseTimeline':
        return <TenseTimeline language={language} />;
      
      default:
        return <div className="text-red-500">Unknown game type: {type}</div>;
    }
  };

  return (
    <div className="my-6">
      {title && (
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-200 mb-3">
          {title[language] || title}
        </h3>
      )}
      {description && (
        <p className="text-stone-700 dark:text-stone-300 mb-4">
          {description[language] || description}
        </p>
      )}
      {renderGame()}
    </div>
  );
}

export default GrammarGame;

