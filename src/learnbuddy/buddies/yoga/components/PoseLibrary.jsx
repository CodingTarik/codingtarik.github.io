import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Target, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

/**
 * PoseLibrary - Comprehensive yoga pose library with visual guides and instructions
 * Features:
 * - Searchable pose database
 * - Filter by category, difficulty, benefits
 * - Detailed instructions and alignment cues
 * - Visual SVG representations
 * - Safety tips and modifications
 */
const PoseLibrary = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPose, setSelectedPose] = useState(null);

  const categories = [
    { id: 'all', name: language === 'en' ? 'All' : 'Alle', nameDe: 'Alle' },
    { id: 'standing', name: language === 'en' ? 'Standing' : 'Stehend', nameDe: 'Stehend' },
    { id: 'sitting', name: language === 'en' ? 'Sitting' : 'Sitzend', nameDe: 'Sitzend' },
    { id: 'lying', name: language === 'en' ? 'Lying' : 'Liegend', nameDe: 'Liegend' },
    { id: 'balance', name: language === 'en' ? 'Balance' : 'Balance', nameDe: 'Balance' },
    { id: 'backbend', name: language === 'en' ? 'Backbends' : 'Rückbeugen', nameDe: 'Rückbeugen' },
    { id: 'twist', name: language === 'en' ? 'Twists' : 'Drehungen', nameDe: 'Drehungen' },
    { id: 'inversion', name: language === 'en' ? 'Inversions' : 'Umkehrhaltungen', nameDe: 'Umkehrhaltungen' }
  ];

  const difficulties = [
    { id: 'all', name: language === 'en' ? 'All Levels' : 'Alle Level', nameDe: 'Alle Level' },
    { id: 'beginner', name: language === 'en' ? 'Beginner' : 'Anfänger', nameDe: 'Anfänger' },
    { id: 'intermediate', name: language === 'en' ? 'Intermediate' : 'Fortgeschritten', nameDe: 'Fortgeschritten' },
    { id: 'advanced', name: language === 'en' ? 'Advanced' : 'Sehr fortgeschritten', nameDe: 'Sehr fortgeschritten' }
  ];

  const poses = [
    {
      id: 'tadasana',
      name: 'Tadasana',
      nameDe: 'Berg-Pose',
      category: 'standing',
      difficulty: 'beginner',
      benefits: ['posture', 'balance', 'awareness'],
      benefitsDe: ['Haltung', 'Balance', 'Bewusstsein'],
      duration: '30-60s',
      description: language === 'en' 
        ? 'The foundation of all standing poses. Teaches proper alignment and body awareness.'
        : 'Die Basis aller stehenden Posen. Lehrt richtige Ausrichtung und Körperbewusstsein.',
      instructions: language === 'en' ? [
        'Stand with feet hip-width apart',
        'Distribute weight evenly across both feet',
        'Lengthen your spine, shoulders relaxed',
        'Gaze straight ahead',
        'Breathe naturally'
      ] : [
        'Stehe mit hüftbreit auseinander stehenden Füßen',
        'Verteile das Gewicht gleichmäßig auf beide Füße',
        'Länge deine Wirbelsäule, Schultern entspannt',
        'Blick geradeaus',
        'Atme natürlich'
      ],
      modifications: language === 'en' ? [
        'Use wall for support if needed',
        'Close eyes to enhance balance'
      ] : [
        'Wand als Unterstützung nutzen falls nötig',
        'Augen schließen für besseres Gleichgewicht'
      ],
      warnings: language === 'en' ? [] : [],
      svg: 'standing-person'
    },
    {
      id: 'uttanasana',
      name: 'Uttanasana',
      nameDe: 'Vorbeuge',
      category: 'standing',
      difficulty: 'beginner',
      benefits: ['flexibility', 'calming', 'hamstrings'],
      benefitsDe: ['Flexibilität', 'Beruhigend', 'Hamstrings'],
      duration: '30-60s',
      description: language === 'en'
        ? 'A calming forward fold that stretches the hamstrings and calms the nervous system.'
        : 'Eine beruhigende Vorbeuge, die die Hamstrings dehnt und das Nervensystem beruhigt.',
      instructions: language === 'en' ? [
        'From Tadasana, fold forward from the hips',
        'Keep knees slightly bent if needed',
        'Let head hang heavy',
        'Relax shoulders and neck',
        'Hold for 5-10 breaths'
      ] : [
        'Aus Tadasana, falte dich von den Hüften nach vorne',
        'Knie können leicht gebeugt sein',
        'Lass den Kopf schwer hängen',
        'Entspanne Schultern und Nacken',
        'Halte 5-10 Atemzüge'
      ],
      modifications: language === 'en' ? [
        'Bend knees deeply if hamstrings are tight',
        'Place hands on blocks',
        'Cross arms and hold elbows'
      ] : [
        'Knie tief beugen wenn Hamstrings steif sind',
        'Hände auf Blöcke setzen',
        'Arme verschränken und Ellbogen halten'
      ],
      warnings: language === 'en' ? [
        'Avoid if you have severe back injury',
        'Be gentle with disc issues'
      ] : [
        'Vermeiden bei schweren Rückenverletzungen',
        'Vorsichtig bei Bandscheibenproblemen'
      ],
      svg: 'forward-fold'
    },
    {
      id: 'adho-mukha-svanasana',
      name: 'Adho Mukha Svanasana',
      nameDe: 'Nach unten schauender Hund',
      category: 'standing',
      difficulty: 'beginner',
      benefits: ['strength', 'flexibility', 'energy'],
      benefitsDe: ['Kraft', 'Flexibilität', 'Energie'],
      duration: '30-90s',
      description: language === 'en'
        ? 'A foundational pose that strengthens the whole body and energizes the mind.'
        : 'Eine grundlegende Pose, die den ganzen Körper stärkt und den Geist energetisiert.',
      instructions: language === 'en' ? [
        'Start on hands and knees',
        'Tuck toes, lift hips up and back',
        'Hands shoulder-width, fingers spread',
        'Press into palms, lengthen spine',
        'Hips high, legs active',
        'Hold for 5-10 breaths'
      ] : [
        'Beginne auf Händen und Knien',
        'Zehen einziehen, Hüften hoch und zurück',
        'Hände schulterbreit, Finger gespreizt',
        'In Handflächen drücken, Wirbelsäule verlängern',
        'Hüften hoch, Beine aktiv',
        'Halte 5-10 Atemzüge'
      ],
      modifications: language === 'en' ? [
        'Bend knees if hamstrings are tight',
        'Use blocks under hands',
        'Pedal feet to warm up'
      ] : [
        'Knie beugen wenn Hamstrings steif sind',
        'Blöcke unter Hände',
        'Füße pedalen zum Aufwärmen'
      ],
      warnings: language === 'en' ? [
        'Avoid if you have wrist injury',
        'Be careful with high blood pressure'
      ] : [
        'Vermeiden bei Handgelenksverletzungen',
        'Vorsichtig bei Bluthochdruck'
      ],
      svg: 'downward-dog'
    },
    {
      id: 'virabhadrasana-i',
      name: 'Virabhadrasana I',
      nameDe: 'Krieger I',
      category: 'standing',
      difficulty: 'beginner',
      benefits: ['strength', 'balance', 'focus'],
      benefitsDe: ['Kraft', 'Balance', 'Fokus'],
      duration: '30-60s',
      description: language === 'en'
        ? 'A powerful standing pose that builds strength and focus.'
        : 'Eine kraftvolle stehende Pose, die Stärke und Fokus aufbaut.',
      instructions: language === 'en' ? [
        'Step one foot forward into lunge',
        'Front knee over ankle, 90-degree angle',
        'Back leg straight, heel down',
        'Hips square to front',
        'Arms reach up, palms together',
        'Gaze forward or up',
        'Hold for 5-8 breaths each side'
      ] : [
        'Ein Bein nach vorne in Ausfallschritt',
        'Vorderes Knie über Knöchel, 90-Grad-Winkel',
        'Hinteres Bein gestreckt, Ferse unten',
        'Hüften nach vorne ausgerichtet',
        'Arme nach oben, Handflächen zusammen',
        'Blick vorwärts oder nach oben',
        'Halte 5-8 Atemzüge pro Seite'
      ],
      modifications: language === 'en' ? [
        'Narrow stance if hips are tight',
        'Hands on hips instead of overhead',
        'Use wall for balance'
      ] : [
        'Schmalerer Stand wenn Hüften steif sind',
        'Hände auf Hüften statt über Kopf',
        'Wand für Balance nutzen'
      ],
      warnings: language === 'en' ? [] : [],
      svg: 'warrior-i'
    },
    {
      id: 'vrksasana',
      name: 'Vrksasana',
      nameDe: 'Baum-Pose',
      category: 'balance',
      difficulty: 'beginner',
      benefits: ['balance', 'focus', 'leg-strength'],
      benefitsDe: ['Balance', 'Fokus', 'Beinkraft'],
      duration: '30-60s',
      description: language === 'en'
        ? 'A classic balance pose that improves focus and stability.'
        : 'Eine klassische Balance-Pose, die Fokus und Stabilität verbessert.',
      instructions: language === 'en' ? [
        'Shift weight to one leg',
        'Place other foot on inner thigh or calf (not knee)',
        'Find a fixed point to gaze at',
        'Hands together at heart or overhead',
        'Keep standing leg active',
        'Hold for 5-10 breaths each side'
      ] : [
        'Gewicht auf ein Bein verlagern',
        'Anderen Fuß an Innenseite des Oberschenkels oder Waden (nicht Knie)',
        'Fixpunkt zum Ansehen finden',
        'Hände zusammen am Herzen oder über Kopf',
        'Standbein aktiv halten',
        'Halte 5-10 Atemzüge pro Seite'
      ],
      modifications: language === 'en' ? [
        'Foot on ankle instead of thigh',
        'Use wall for support',
        'Hands on hips for easier balance'
      ] : [
        'Fuß am Knöchel statt Oberschenkel',
        'Wand als Unterstützung',
        'Hände auf Hüften für leichtere Balance'
      ],
      warnings: language === 'en' ? [] : [],
      svg: 'tree'
    },
    {
      id: 'savasana',
      name: 'Savasana',
      nameDe: 'Entspannungslage / Totenstellung',
      category: 'lying',
      difficulty: 'beginner',
      benefits: ['relaxation', 'rest', 'integration'],
      benefitsDe: ['Entspannung', 'Ruhe', 'Integration'],
      duration: '5-10min',
      description: language === 'en'
        ? 'The final relaxation pose. Essential for integrating the practice.'
        : 'Die finale Entspannungspose. Essentiell für die Integration der Praxis.',
      instructions: language === 'en' ? [
        'Lie flat on your back',
        'Arms and legs relaxed, slightly apart',
        'Palms face up',
        'Close your eyes',
        'Release all tension',
        'Stay for 5-10 minutes minimum'
      ] : [
        'Flach auf dem Rücken liegen',
        'Arme und Beine entspannt, leicht auseinander',
        'Handflächen nach oben',
        'Augen schließen',
        'Alle Spannung loslassen',
        'Mindestens 5-10 Minuten bleiben'
      ],
      modifications: language === 'en' ? [
        'Use blanket under head',
        'Place blanket over body for warmth',
        'Bend knees if lower back is sensitive'
      ] : [
        'Decke unter Kopf',
        'Decke über Körper für Wärme',
        'Knie beugen wenn unterer Rücken empfindlich ist'
      ],
      warnings: language === 'en' ? [] : [],
      svg: 'corpse'
    },
    {
      id: 'baddha-konasana',
      name: 'Baddha Konasana',
      nameDe: 'Gebundener Winkel / Schmetterling',
      category: 'sitting',
      difficulty: 'beginner',
      benefits: ['hip-opening', 'flexibility', 'calming'],
      benefitsDe: ['Hüftöffnung', 'Flexibilität', 'Beruhigend'],
      duration: '1-3min',
      description: language === 'en'
        ? 'A gentle hip opener that improves flexibility and calms the mind.'
        : 'Eine sanfte Hüftöffnung, die Flexibilität verbessert und den Geist beruhigt.',
      instructions: language === 'en' ? [
        'Sit with soles of feet together',
        'Knees drop to sides',
        'Spine tall and straight',
        'Hold feet or ankles',
        'Gently press knees down',
        'Hold for 1-3 minutes'
      ] : [
        'Sitze mit Fußsohlen zusammen',
        'Knie fallen zur Seite',
        'Wirbelsäule lang und gerade',
        'Halte Füße oder Knöchel',
        'Drücke Knie sanft nach unten',
        'Halte 1-3 Minuten'
      ],
      modifications: language === 'en' ? [
        'Use blocks under knees',
        'Sit on blanket for elevation',
        'Lean forward for deeper stretch'
      ] : [
        'Blöcke unter Knie',
        'Auf Decke sitzen für Erhöhung',
        'Nach vorne lehnen für tiefere Dehnung'
      ],
      warnings: language === 'en' ? [
        'Be gentle with knee injuries'
      ] : [
        'Vorsichtig bei Knieverletzungen'
      ],
      svg: 'butterfly'
    },
    {
      id: 'setu-bandha-sarvangasana',
      name: 'Setu Bandha Sarvangasana',
      nameDe: 'Brücke',
      category: 'backbend',
      difficulty: 'beginner',
      benefits: ['back-strength', 'chest-opening', 'energy'],
      benefitsDe: ['Rückenkraft', 'Brustöffnung', 'Energie'],
      duration: '30-60s',
      description: language === 'en'
        ? 'A gentle backbend that strengthens the back and opens the chest.'
        : 'Eine sanfte Rückbeuge, die den Rücken stärkt und die Brust öffnet.',
      instructions: language === 'en' ? [
        'Lie on back, knees bent, feet flat',
        'Feet hip-width apart',
        'Press into feet, lift hips',
        'Roll shoulders under',
        'Keep neck long',
        'Hold for 5-10 breaths'
      ] : [
        'Auf Rücken liegen, Knie gebeugt, Füße flach',
        'Füße hüftbreit auseinander',
        'In Füße drücken, Hüften heben',
        'Schultern unterrollen',
        'Nacken lang halten',
        'Halte 5-10 Atemzüge'
      ],
      modifications: language === 'en' ? [
        'Place block under sacrum',
        'Interlace fingers under back',
        'Walk shoulders closer together'
      ] : [
        'Block unter Kreuzbein',
        'Finger unter Rücken verschränken',
        'Schultern näher zusammenbringen'
      ],
      warnings: language === 'en' ? [
        'Avoid if you have neck injury',
        'Be careful with back problems'
      ] : [
        'Vermeiden bei Nackenverletzungen',
        'Vorsichtig bei Rückenproblemen'
      ],
      svg: 'bridge'
    }
  ];

  const filteredPoses = poses.filter(pose => {
    const matchesSearch = 
      pose.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pose.nameDe && pose.nameDe.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || pose.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || pose.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: 'green',
      intermediate: 'yellow',
      advanced: 'red'
    };
    return colors[difficulty] || 'gray';
  };

  const getDifficultyBadge = (difficulty) => {
    const badges = {
      beginner: language === 'en' ? 'Beginner' : 'Anfänger',
      intermediate: language === 'en' ? 'Intermediate' : 'Fortgeschritten',
      advanced: language === 'en' ? 'Advanced' : 'Sehr fortgeschritten'
    };
    return badges[difficulty] || difficulty;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-3">
          <BookOpen className="w-10 h-10 text-purple-500" />
          {language === 'en' ? 'Yoga Pose Library' : 'Yoga-Posen Bibliothek'}
        </h1>
        <p className="text-stone-600 dark:text-stone-400">
          {language === 'en' 
            ? 'Explore detailed instructions, alignment cues, and modifications for yoga poses.'
            : 'Erkunde detaillierte Anleitungen, Ausrichtungshinweise und Modifikationen für Yoga-Posen.'}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
          <input
            type="text"
            placeholder={language === 'en' ? 'Search poses...' : 'Posen suchen...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-stone-300 dark:border-stone-600 rounded-xl bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-stone-400" />
            <span className="text-sm font-medium text-stone-600 dark:text-stone-400">
              {language === 'en' ? 'Category:' : 'Kategorie:'}
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {language === 'de' && cat.nameDe ? cat.nameDe : cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-stone-600 dark:text-stone-400">
              {language === 'en' ? 'Difficulty:' : 'Schwierigkeit:'}
            </span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100"
            >
              {difficulties.map(diff => (
                <option key={diff.id} value={diff.id}>
                  {language === 'de' && diff.nameDe ? diff.nameDe : diff.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Pose Grid */}
      {selectedPose ? (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
          <button
            onClick={() => setSelectedPose(null)}
            className="mb-4 text-purple-600 dark:text-purple-400 hover:underline"
          >
            ← {language === 'en' ? 'Back to Library' : 'Zurück zur Bibliothek'}
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                {language === 'de' && selectedPose.nameDe ? selectedPose.nameDe : selectedPose.name}
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${getDifficultyColor(selectedPose.difficulty)}-100 text-${getDifficultyColor(selectedPose.difficulty)}-700 dark:bg-${getDifficultyColor(selectedPose.difficulty)}-900 dark:text-${getDifficultyColor(selectedPose.difficulty)}-300`}>
                  {getDifficultyBadge(selectedPose.difficulty)}
                </span>
                <span className="flex items-center gap-1 text-stone-600 dark:text-stone-400">
                  <Clock className="w-4 h-4" />
                  {selectedPose.duration}
                </span>
              </div>
              <p className="text-stone-600 dark:text-stone-400 mb-6">
                {selectedPose.description}
              </p>

              <div className="mb-6">
                <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  {language === 'en' ? 'Benefits' : 'Vorteile'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(language === 'de' && selectedPose.benefitsDe ? selectedPose.benefitsDe : selectedPose.benefits).map((benefit, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Visual representation placeholder */}
              <div className="bg-white dark:bg-stone-800 rounded-xl p-8 mb-6 h-64 flex items-center justify-center border border-stone-200 dark:border-stone-700">
                <div className="text-center text-stone-400">
                  <div className="text-6xl mb-2">🧘</div>
                  <div className="text-sm">{selectedPose.name}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {language === 'en' ? 'Instructions' : 'Anleitung'}
              </h3>
              <ol className="space-y-2 text-stone-700 dark:text-stone-300">
                {selectedPose.instructions.map((instruction, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-bold text-purple-500">{idx + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-3">
                {language === 'en' ? 'Modifications' : 'Modifikationen'}
              </h3>
              <ul className="space-y-2 text-stone-700 dark:text-stone-300">
                {selectedPose.modifications.map((mod, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span>•</span>
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>

              {selectedPose.warnings.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    {language === 'en' ? 'Warnings' : 'Warnungen'}
                  </h3>
                  <ul className="space-y-2 text-red-700 dark:text-red-400">
                    {selectedPose.warnings.map((warning, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span>⚠</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoses.map(pose => (
            <div
              key={pose.id}
              onClick={() => setSelectedPose(pose)}
              className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700 hover:border-purple-300 dark:hover:border-purple-600 cursor-pointer transition-all hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">
                  {language === 'de' && pose.nameDe ? pose.nameDe : pose.name}
                </h3>
                <span className={`px-2 py-1 rounded text-xs font-medium bg-${getDifficultyColor(pose.difficulty)}-100 text-${getDifficultyColor(pose.difficulty)}-700 dark:bg-${getDifficultyColor(pose.difficulty)}-900 dark:text-${getDifficultyColor(pose.difficulty)}-300`}>
                  {getDifficultyBadge(pose.difficulty)}
                </span>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 line-clamp-2">
                {pose.description}
              </p>
              <div className="flex items-center justify-between text-sm text-stone-500 dark:text-stone-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {pose.duration}
                </span>
                <span className="capitalize">{language === 'de' && categories.find(c => c.id === pose.category)?.nameDe || categories.find(c => c.id === pose.category)?.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredPoses.length === 0 && (
        <div className="text-center py-12 text-stone-500 dark:text-stone-400">
          {language === 'en' ? 'No poses found. Try adjusting your filters.' : 'Keine Posen gefunden. Versuche die Filter anzupassen.'}
        </div>
      )}
    </div>
  );
};

export default PoseLibrary;


