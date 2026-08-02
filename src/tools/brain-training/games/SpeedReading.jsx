import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ArrowLeft, Trophy, Play, Settings, ChevronRight } from 'lucide-react';

const TEXTS = [
  {
    title: "The Science of Sleep",
    text: "Sleep is one of the most important biological functions. During sleep our brain consolidates memories, repairs cells, and regulates hormones. Research shows that adults need between seven and nine hours of sleep per night. Chronic sleep deprivation can lead to serious health problems including obesity, heart disease, and weakened immune function. The sleep cycle consists of four stages including light sleep, deep sleep, and REM sleep. Each stage serves a different purpose in maintaining our physical and mental health. Scientists have discovered that the glymphatic system, which clears waste from the brain, is most active during deep sleep. This is why getting enough quality sleep is essential for cognitive function and long-term brain health.",
    questions: [
      { q: "How many hours of sleep do adults need?", options: ["5-6 hours", "7-9 hours", "10-12 hours", "4-5 hours"], correct: 1 },
      { q: "How many stages does the sleep cycle have?", options: ["Two", "Three", "Four", "Five"], correct: 2 },
      { q: "What system clears waste from the brain during sleep?", options: ["Lymphatic", "Glymphatic", "Nervous", "Circulatory"], correct: 1 },
    ]
  },
  {
    title: "Ocean Currents",
    text: "Ocean currents are continuous movements of seawater driven by wind, temperature differences, and salinity variations. The Gulf Stream is one of the most well-known ocean currents, carrying warm water from the Gulf of Mexico across the Atlantic Ocean to Europe. This current is responsible for keeping Western Europe significantly warmer than other regions at the same latitude. Ocean currents play a crucial role in regulating global climate and weather patterns. Deep ocean currents, also known as thermohaline circulation, are driven by differences in water density caused by temperature and salinity. These deep currents move much slower than surface currents but transport enormous volumes of water around the globe. Marine life depends heavily on ocean currents for nutrient distribution and migration patterns.",
    questions: [
      { q: "What drives ocean currents?", options: ["Only wind", "Wind, temperature, and salinity", "Moon gravity", "Earth rotation only"], correct: 1 },
      { q: "What does the Gulf Stream do for Europe?", options: ["Makes it colder", "Keeps it warmer", "Brings rain", "Creates storms"], correct: 1 },
      { q: "What drives deep ocean currents?", options: ["Wind only", "Temperature and salinity", "Tidal forces", "Volcanic activity"], correct: 1 },
    ]
  },
  {
    title: "Neuroplasticity",
    text: "Neuroplasticity is the brain's remarkable ability to reorganize itself by forming new neural connections throughout life. This ability allows neurons to compensate for injury and adapt to new situations or changes in the environment. Learning a new skill, such as playing a musical instrument, physically changes the structure of the brain. Studies using brain imaging have shown that London taxi drivers have a larger hippocampus compared to bus drivers, due to the complex spatial navigation required by their job. Exercise has been proven to enhance neuroplasticity by increasing the production of brain-derived neurotrophic factor. Meditation and mindfulness practices also promote neuroplasticity by strengthening connections in the prefrontal cortex. Even in old age the brain retains significant capacity for change and adaptation.",
    questions: [
      { q: "What is neuroplasticity?", options: ["Brain surgery", "Brain's ability to reorganize", "A brain disease", "Memory loss"], correct: 1 },
      { q: "What was found about London taxi drivers?", options: ["Smaller brains", "Larger hippocampus", "Better vision", "Faster reflexes"], correct: 1 },
      { q: "What enhances neuroplasticity through BDNF production?", options: ["Sleep", "Exercise", "Reading", "Caffeine"], correct: 1 },
    ]
  }
];

export default function SpeedReading({ onBack }) {
  const [phase, setPhase] = useState('intro'); // intro, reading, quiz, result
  const [wpm, setWpm] = useState(300);
  const [textIndex, setTextIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wordsRead, setWordsRead] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [bestWpm, setBestWpm] = useState(() => {
    const saved = localStorage.getItem('brain-speed-reading-best');
    return saved ? parseInt(saved) : null;
  });
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  const text = TEXTS[textIndex];
  const words = text.text.split(/\s+/);

  const startReading = useCallback(() => {
    setPhase('reading');
    setWordIndex(0);
    setCurrentWord(words[0]);
    setWordsRead(0);
    startTimeRef.current = performance.now();

    const msPerWord = 60000 / wpm;
    let idx = 0;

    intervalRef.current = setInterval(() => {
      idx++;
      if (idx >= words.length) {
        clearInterval(intervalRef.current);
        setReadingTime(Math.round((performance.now() - startTimeRef.current) / 1000));
        setWordsRead(words.length);
        setPhase('quiz');
        setCurrentQuestion(0);
        setQuizAnswers([]);
        return;
      }
      setWordIndex(idx);
      setCurrentWord(words[idx]);
    }, msPerWord);
  }, [wpm, words]);

  const stopReading = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setReadingTime(Math.round((performance.now() - startTimeRef.current) / 1000));
    setWordsRead(wordIndex + 1);
    setPhase('quiz');
    setCurrentQuestion(0);
    setQuizAnswers([]);
  }, [wordIndex]);

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleQuizAnswer = useCallback((answerIdx) => {
    const newAnswers = [...quizAnswers, answerIdx];
    setQuizAnswers(newAnswers);

    if (currentQuestion + 1 >= text.questions.length) {
      const correct = newAnswers.filter((a, i) => a === text.questions[i].correct).length;
      const effectiveWpm = Math.round((wordsRead / readingTime) * 60);
      if (!bestWpm || effectiveWpm > bestWpm) {
        setBestWpm(effectiveWpm);
        localStorage.setItem('brain-speed-reading-best', effectiveWpm.toString());
      }
      setPhase('result');
    } else {
      setCurrentQuestion(q => q + 1);
    }
  }, [quizAnswers, currentQuestion, text, wordsRead, readingTime, bestWpm]);

  const correctAnswers = quizAnswers.filter((a, i) => a === text.questions[i]?.correct).length;
  const comprehension = text.questions.length > 0 ? Math.round((correctAnswers / text.questions.length) * 100) : 0;
  const effectiveWpm = readingTime > 0 ? Math.round((wordsRead / readingTime) * 60) : 0;
  const progress = words.length > 0 ? ((wordIndex + 1) / words.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur border-b border-slate-700 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-slate-300" />
        </button>
        <BookOpen size={22} className="text-emerald-400" />
        <h1 className="text-lg font-bold text-white">Speed Reading</h1>
        {phase === 'reading' && (
          <div className="ml-auto flex gap-4 text-sm">
            <span className="text-slate-400">WPM: <span className="text-emerald-400">{wpm}</span></span>
            <span className="text-slate-400">Word: <span className="text-white">{wordIndex + 1}/{words.length}</span></span>
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center max-w-md">
              <div className="w-20 h-20 mx-auto mb-6 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                <BookOpen size={40} className="text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Speed Reading (RSVP)</h2>
              <p className="text-slate-300 mb-6">
                Words are shown one at a time using Rapid Serial Visual Presentation. After reading, answer comprehension questions.
              </p>

              {/* WPM Selector */}
              <div className="mb-6">
                <label className="text-slate-400 text-sm mb-2 block">Words per Minute: <span className="text-emerald-400 font-bold">{wpm}</span></label>
                <input
                  type="range"
                  min={100}
                  max={800}
                  step={25}
                  value={wpm}
                  onChange={e => setWpm(parseInt(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>100 (slow)</span>
                  <span>300 (avg)</span>
                  <span>800 (fast)</span>
                </div>
              </div>

              {/* Text Selector */}
              <div className="mb-8">
                <label className="text-slate-400 text-sm mb-2 block">Choose text:</label>
                <div className="flex flex-col gap-2">
                  {TEXTS.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setTextIndex(i)}
                      className={`px-4 py-3 rounded-xl text-left transition-all ${
                        textIndex === i
                          ? 'bg-emerald-600/30 border border-emerald-500 text-white'
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      <span className="font-bold">{t.title}</span>
                      <span className="text-xs ml-2 opacity-60">({t.text.split(/\s+/).length} words)</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={startReading}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
              >
                <Play size={20} /> Start Reading
              </button>

              {bestWpm && (
                <p className="mt-4 text-slate-400 text-sm">
                  <Trophy size={14} className="inline mr-1 text-yellow-400" /> Best effective WPM: {bestWpm}
                </p>
              )}
            </motion.div>
          )}

          {phase === 'reading' && (
            <motion.div key="reading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center w-full max-w-2xl">
              {/* Progress */}
              <div className="w-full bg-slate-800 rounded-full h-2 mb-8">
                <motion.div
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                  animate={{ width: `${progress}%` }}
                />
              </div>

              {/* RSVP Display */}
              <div className="min-h-[200px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.05 }}
                    className="text-5xl md:text-7xl font-bold text-white"
                  >
                    {currentWord}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Focus line */}
              <div className="w-32 h-0.5 bg-emerald-500/50 mx-auto mb-8" />

              <button
                onClick={stopReading}
                className="px-6 py-3 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 transition-colors"
              >
                Stop & Take Quiz
              </button>
            </motion.div>
          )}

          {phase === 'quiz' && (
            <motion.div key="quiz" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center max-w-md">
              <h2 className="text-2xl font-bold text-white mb-2">Comprehension Check</h2>
              <p className="text-slate-400 mb-6">Question {currentQuestion + 1} of {text.questions.length}</p>

              <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                <p className="text-lg text-white font-medium">{text.questions[currentQuestion].q}</p>
              </div>

              <div className="flex flex-col gap-3">
                {text.questions[currentQuestion].options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuizAnswer(i)}
                    className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-left transition-all border border-slate-700 flex items-center gap-3"
                  >
                    <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {phase === 'result' && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
              <Trophy size={64} className={comprehension >= 66 ? 'text-yellow-400 mx-auto mb-4' : 'text-slate-400 mx-auto mb-4'} />
              <h2 className="text-3xl font-bold text-white mb-2">Results</h2>
              <p className="text-slate-400 mb-6">{text.title}</p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-emerald-400">{effectiveWpm}</p>
                  <p className="text-xs text-slate-400 mt-1">Effective WPM</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-blue-400">{comprehension}%</p>
                  <p className="text-xs text-slate-400 mt-1">Comprehension</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-purple-400">{correctAnswers}/{text.questions.length}</p>
                  <p className="text-xs text-slate-400 mt-1">Correct</p>
                </div>
              </div>

              <button
                onClick={() => { setPhase('intro'); }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
