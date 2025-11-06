import React, { useState, useRef } from 'react';
import { 
  Printer, Share2, Copy, Globe, Award, Briefcase, GraduationCap, 
  Code, Heart, Languages, MapPin, Mail, Phone, Calendar, ExternalLink,
  Check, X, Download, Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CVPage() {
  const [language, setLanguage] = useState('en'); // 'en' or 'de'
  const [advancedMode, setAdvancedMode] = useState(false);
  const [showPrintDialog, setShowPrintDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const cvRef = useRef(null);

  // Print Dialog State
  const [printData, setPrintData] = useState({
    address: '',
    phone: '',
    birthdate: '',
    includePersonalData: false
  });

  const translations = {
    en: {
      title: 'Curriculum Vitae',
      print: 'Print',
      share: 'Share',
      copyText: 'Copy as Text',
      advanced: 'Advanced Mode',
      printForApplication: 'Print for Application',
      experience: 'Professional Experience',
      education: 'Education',
      skills: 'Technical Skills',
      certificates: 'Certificates & Awards',
      achievements: 'Key Achievements',
      hobbies: 'Hobbies & Interests',
      languages: 'Languages',
      projects: 'Selected Projects',
      present: 'present',
      ongoing: 'ongoing',
      expected: 'expected',
      native: 'Native',
      fluent: 'Fluent',
      countriesVisited: 'Countries Visited',
      countriesWantToVisit: 'Want to Visit',
      currentlyLearning: 'Currently Learning'
    },
    de: {
      title: 'Lebenslauf',
      print: 'Drucken',
      share: 'Teilen',
      copyText: 'Als Text kopieren',
      advanced: 'Erweiterter Modus',
      printForApplication: 'Für Bewerbung drucken',
      experience: 'Berufserfahrung',
      education: 'Ausbildung',
      skills: 'Technische Fähigkeiten',
      certificates: 'Zertifikate & Auszeichnungen',
      achievements: 'Wichtige Erfolge',
      hobbies: 'Hobbys & Interessen',
      languages: 'Sprachen',
      projects: 'Ausgewählte Projekte',
      present: 'heute',
      ongoing: 'laufend',
      expected: 'voraussichtlich',
      native: 'Muttersprache',
      fluent: 'Fließend',
      countriesVisited: 'Besuchte Länder',
      countriesWantToVisit: 'Reiseziele',
      currentlyLearning: 'Lerne gerade'
    }
  };

  const t = translations[language];

  const handlePrint = () => {
    window.print();
  };

  const handlePrintForApplication = () => {
    setShowPrintDialog(true);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Tarik Azzouzi - CV',
          text: 'Check out my CV',
          url: window.location.href
        });
      } catch (err) {
        setShowShareDialog(true);
      }
    } else {
      setShowShareDialog(true);
    }
  };

  const handleCopyText = () => {
    const cvText = cvRef.current?.innerText || '';
    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrintWithPersonalData = () => {
    // Store data temporarily
    sessionStorage.setItem('cvPrintData', JSON.stringify(printData));
    setShowPrintDialog(false);
    setTimeout(() => {
      window.print();
      sessionStorage.removeItem('cvPrintData');
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Action Bar - Hidden in Print */}
      <div className="print:hidden sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'en' ? 'DE' : 'EN'}</span>
            </button>
            
            <button
              onClick={() => setAdvancedMode(!advancedMode)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                advancedMode 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Settings size={18} />
              <span className="text-sm font-medium">{t.advanced}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={t.print}
            >
              <Printer size={18} />
              <span className="hidden sm:inline text-sm font-medium">{t.print}</span>
            </button>

            <button
              onClick={handlePrintForApplication}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              title={t.printForApplication}
            >
              <Download size={18} />
              <span className="hidden sm:inline text-sm font-medium">{t.printForApplication}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={t.share}
            >
              <Share2 size={18} />
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={t.copyText}
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div ref={cvRef} className="cv-print-container max-w-5xl mx-auto p-4 md:p-8 print:p-0">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cv-header bg-white dark:bg-slate-800 rounded-xl print:rounded-none shadow-lg print:shadow-none p-8 mb-6 print:mb-2"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img 
                src="/src/cv/pictures/cv_profile_picture.jpeg" 
                alt="Tarik Azzouzi" 
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>

            {/* Header Info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                Tarik Azzouzi
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                {language === 'en' ? 'Full-Stack Developer & AI Engineer' : 'Full-Stack Entwickler & KI-Ingenieur'}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:BlogCodingTarik@web.de" className="hover:text-blue-500">
                    BlogCodingTarik@web.de
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Darmstadt, Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <a href="https://codingtarik.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    codingtarik.github.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-2 print-two-column">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 print:space-y-2">
            {/* Key Achievements */}
            <Section title={t.achievements} icon={<Award />}>
              <Achievement
                title={language === 'en' ? 'Design and Implementation of a Modular Plugin Framework for RAG using Model Context Protocol' : 'Design und Implementierung eines modularen Plugin-Frameworks für RAG mit Model Context Protocol'}
                period="2025"
                subtitle={language === 'en' ? 'Master Thesis (ongoing)' : 'Masterarbeit (laufend)'}
                description={language === 'en' 
                  ? 'Developing a robust and extensible ecosystem for RAG systems with dual-layer extensibility and multi-level plugin configuration. Expected submission: November 3, 2025.'
                  : 'Entwicklung eines robusten und erweiterbaren Ökosystems für RAG-Systeme mit zweischichtiger Erweiterbarkeit und mehrstufiger Plugin-Konfiguration. Erwartete Abgabe: 3. November 2025.'}
              />
              
              <Achievement
                title={language === 'en' ? 'Secure Hybrid RAG Applications in Enterprises' : 'Sichere Hybrid-RAG-Anwendungen in Unternehmen'}
                period="2024"
                subtitle={language === 'en' ? 'Bachelor Thesis - Grade: 1.0' : 'Bachelorarbeit - Note: 1.0'}
                description={language === 'en'
                  ? 'Analyzed security vulnerabilities in RAG systems and developed practical solutions for secure and scalable enterprise implementations.'
                  : 'Analyse von Sicherheitslücken in RAG-Systemen und Entwicklung praktischer Lösungen für sichere und skalierbare Unternehmensimplementierungen.'}
              />

              <Achievement
                title={language === 'en' ? 'Animal Manager for Tikki Hywood Foundation' : 'Tierverwaltungssystem für Tikki Hywood Foundation'}
                period="2022 - 2023"
                subtitle={language === 'en' ? 'Volunteer Developer' : 'Ehrenamtlicher Entwickler'}
                description={language === 'en'
                  ? 'Built a custom animal management system for pangolin conservation with centralized data synchronization across multiple devices.'
                  : 'Entwicklung eines maßgeschneiderten Tierverwaltungssystems für Schuppentierschutz mit zentralisierter Datensynchronisation über mehrere Geräte.'}
              />

              <Achievement
                title="TUD.dll Hacking Team Member"
                period="2021 - 2025"
                description={language === 'en'
                  ? 'Active member of TU Darmstadt\'s competitive cybersecurity team, participating in numerous CTF competitions across various security domains.'
                  : 'Aktives Mitglied des Cybersecurity-Wettbewerbsteams der TU Darmstadt, Teilnahme an zahlreichen CTF-Wettbewerben in verschiedenen Sicherheitsbereichen.'}
              />
            </Section>

            {/* Professional Experience */}
            <Section title={t.experience} icon={<Briefcase />}>
              <Experience
                title="Full-Stack Developer"
                company="Genow.AI"
                period={`2024 - ${t.present}`}
                location={language === 'en' ? 'Working Student' : 'Werkstudent'}
                description={language === 'en'
                  ? 'Architected and developed scalable custom RAG platforms for enterprise clients. Engineered full-stack applications using Vue.js and Python with focus on AI agent orchestration and LangChain integrations.'
                  : 'Architektur und Entwicklung skalierbarer RAG-Plattformen für Unternehmenskunden. Entwicklung von Full-Stack-Anwendungen mit Vue.js und Python mit Fokus auf KI-Agentenorchestrierung und LangChain-Integrationen.'}
                skills={['Vue.js', 'Python', 'RAG Systems', 'AI Agents', 'LangChain', 'GCP', 'Docker']}
              />

              <Experience
                title={language === 'en' ? 'Freelance Developer' : 'Freiberuflicher Entwickler'}
                company="Fiverr & UpWork"
                period="2018 - 2023"
                description={language === 'en'
                  ? 'Delivered custom software solutions to global clients, specializing in Python, Java, and C# applications with high client satisfaction rates.'
                  : 'Lieferung maßgeschneiderter Softwarelösungen an globale Kunden, spezialisiert auf Python-, Java- und C#-Anwendungen mit hoher Kundenzufriedenheit.'}
                skills={['Python', 'Java', 'C#', 'JavaScript', 'TypeScript']}
              />

              <Experience
                title="Content Creator"
                company="lerneprogrammieren.de"
                period="2019 - 2020"
                description={language === 'en'
                  ? 'Authored educational programming articles and tutorials for German-speaking beginners, translating complex technical concepts into accessible content.'
                  : 'Verfasste Bildungsartikel und Tutorials zum Programmieren für deutschsprachige Anfänger, übersetzte komplexe technische Konzepte in zugängliche Inhalte.'}
              />
            </Section>

            {/* Education */}
            <Section title={t.education} icon={<GraduationCap />}>
              <Education
                degree="Master of Science in Computer Science"
                institution="Technical University of Darmstadt (TU Darmstadt)"
                period={`2025 - ${language === 'en' ? 'Sept 2026 (expected)' : 'Sept 2026 (voraussichtlich)'}`}
                description={language === 'en'
                  ? 'Focus on software engineering, artificial intelligence, and cybersecurity. Master Thesis on modular plugin frameworks for RAG systems. Full-time availability for internships from next semester due to approved credit transfers.'
                  : 'Schwerpunkt auf Software Engineering, künstliche Intelligenz und Cybersecurity. Masterarbeit über modulare Plugin-Frameworks für RAG-Systeme. Vollzeit-Verfügbarkeit für Praktika ab nächstem Semester durch anerkannte Leistungen.'}
              />

              <Education
                degree={language === 'en' ? 'Erasmus+ Exchange Student' : 'Erasmus+ Austauschstudent'}
                institution="University of Latvia, Riga, Latvia"
                period="Sept 2025 - Jan 2026"
                description={language === 'en' ? 'International exchange semester focusing on advanced computer science topics.' : 'Internationales Austauschsemester mit Fokus auf fortgeschrittene Informatikthemen.'}
              />

              <Education
                degree="Bachelor of Science in Computer Science"
                institution="Technical University of Darmstadt (TU Darmstadt)"
                period="2021 - 2025"
                grade={language === 'en' ? 'Overall Grade: 1.3 (excellent)' : 'Gesamtnote: 1.3 (sehr gut)'}
                description={language === 'en'
                  ? 'Bachelor Thesis: "Secure Hybrid RAG Applications in Enterprises" - Grade: 1.0. Member of TUD.dll Hacking Team.'
                  : 'Bachelorarbeit: "Sichere Hybrid-RAG-Anwendungen in Unternehmen" - Note: 1.0. Mitglied des TUD.dll Hacking Teams.'}
              />

              <Education
                degree="Abitur (High School Diploma)"
                institution="Berufliches Gymnasium Gelnhausen"
                period="2018 - 2021"
                grade={language === 'en' ? 'Final Grade: 1.0 (excellent)' : 'Abschlussnote: 1.0 (sehr gut)'}
                description={language === 'en' ? 'Focus: Practical Computer Science' : 'Schwerpunkt: Praktische Informatik'}
              />
            </Section>
          </div>

          {/* Right Column */}
          <div className="space-y-6 print:space-y-2">
            {/* Languages */}
            <Section title={t.languages} icon={<Languages />} compact>
              <LanguageSkill language={language === 'en' ? 'German' : 'Deutsch'} level={t.native} />
              <LanguageSkill language={language === 'en' ? 'English' : 'Englisch'} level={`${t.fluent} (C1)`} />
            </Section>

            {/* Technical Skills */}
            <Section title={t.skills} icon={<Code />} compact>
              <SkillCategory 
                title={language === 'en' ? 'Programming' : 'Programmierung'} 
                skills={['C#', 'Python', 'JavaScript', 'TypeScript', 'Java']} 
              />
              <SkillCategory 
                title="Frameworks" 
                skills={['Vue.js', 'React', 'Node.js', 'Express', 'LangChain']} 
              />
              <SkillCategory 
                title={language === 'en' ? 'AI & Data' : 'KI & Daten'} 
                skills={['RAG Systems', 'scikit-learn', 'LLMs', 'AI Agents']} 
              />
              <SkillCategory 
                title="DevOps & Cloud" 
                skills={['Docker', 'GCP', 'Git', 'Linux', 'Bash']} 
              />
              <SkillCategory 
                title="Cybersecurity" 
                skills={['Kali Linux', 'Metasploit', 'Burp Suite', 'Snort', 'Wireshark', 'OWASP']} 
              />
            </Section>

            {/* Certificates */}
            <Section title={t.certificates} icon={<Award />} compact>
              <Certificate
                title="Deutschlandstipendium"
                issuer={language === 'en' ? 'Germany Scholarship - Twice Awarded' : 'Deutschland-Stipendium - 2x vergeben'}
                year="2021, 2023"
              />
              
              <Certificate
                title="Cisco Endpoint Security"
                issuer="Cisco"
                year="2025"
                link="https://credly.com/badges/3a9fb9ac-ccc8-4e66-8c64-6a3cc8b48c54"
              />
              
              <Certificate
                title="Cisco Ethical Hacking"
                issuer="Cisco"
                year="2025"
                link="https://credly.com/badges/050e6936-d3dc-4325-be74-15806df72781"
              />
              
              <Certificate
                title="Google Cybersecurity Professional"
                issuer="Google"
                year="2023"
                link="https://credly.com/badges/81775887-0432-4ccb-95ec-9c5759fd5936"
              />
              
              <Certificate
                title="C1 English Certificate"
                issuer="TU Darmstadt"
                year="2024"
              />

              {advancedMode && (
                <Certificate
                  title="Fitnesstrainer C Lizenz"
                  issuer={language === 'en' ? 'Fitness Trainer License' : 'Fitnesstrainer-Lizenz'}
                  year="2023"
                />
              )}
            </Section>

            {/* Hobbies */}
            <Section title={t.hobbies} icon={<Heart />} compact>
              <Hobby icon="🎹" title={language === 'en' ? 'Piano' : 'Klavier'} subtitle={language === 'en' ? 'Music' : 'Musik'} />
              <Hobby icon="🤾" title="Handball" subtitle={language === 'en' ? 'Sports' : 'Sport'} />
              <Hobby icon="💻" title={language === 'en' ? 'Programming' : 'Programmieren'} subtitle={language === 'en' ? 'Passion' : 'Leidenschaft'} />
              <Hobby icon="🚩" title="Capture The Flag" subtitle="Cybersecurity" />
              <Hobby icon="📚" title={language === 'en' ? 'Reading' : 'Lesen'} subtitle={language === 'en' ? 'Learning' : 'Lernen'} />
            </Section>

            {/* Advanced Mode Content */}
            {advancedMode && (
              <>
                <Section title={t.countriesVisited} icon={<MapPin />} compact>
                  <div className="flex flex-wrap gap-2">
                    {['🇩🇪 Germany', '🇱🇻 Latvia', '🇫🇮 Finland', '🇿🇼 Zimbabwe', '🇿🇦 South Africa', '🇦🇹 Austria', '🇨🇭 Switzerland', '🇫🇷 France', '🇮🇹 Italy'].map(country => (
                      <span key={country} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                        {country}
                      </span>
                    ))}
                  </div>
                </Section>

                <Section title={t.countriesWantToVisit} icon={<MapPin />} compact>
                  <div className="flex flex-wrap gap-2">
                    {['🇯🇵 Japan', '🇰🇷 South Korea', '🇺🇸 USA', '🇨🇦 Canada', '🇳🇿 New Zealand'].map(country => (
                      <span key={country} className="text-xs px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                        {country}
                      </span>
                    ))}
                  </div>
                </Section>

                <Section title={t.currentlyLearning} icon={<Code />} compact>
                  <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• {language === 'en' ? 'Advanced AI Agent Architectures' : 'Fortgeschrittene KI-Agenten-Architekturen'}</li>
                    <li>• {language === 'en' ? 'Rust Programming' : 'Rust-Programmierung'}</li>
                    <li>• {language === 'en' ? 'Korean Language' : 'Koreanische Sprache'}</li>
                  </ul>
                </Section>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Print Dialog */}
      <AnimatePresence>
        {showPrintDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPrintDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">
                {language === 'en' ? 'Print for Application' : 'Für Bewerbung drucken'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {language === 'en' 
                  ? 'Add personal information that will be included in the printed version only:'
                  : 'Fügen Sie persönliche Informationen hinzu, die nur in der gedruckten Version enthalten sind:'}
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'en' ? 'Full Address' : 'Vollständige Adresse'}
                  </label>
                  <input
                    type="text"
                    value={printData.address}
                    onChange={(e) => setPrintData({...printData, address: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                    placeholder="Street, City, ZIP"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'en' ? 'Phone Number' : 'Telefonnummer'}
                  </label>
                  <input
                    type="tel"
                    value={printData.phone}
                    onChange={(e) => setPrintData({...printData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                    placeholder="+49 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'en' ? 'Date of Birth' : 'Geburtsdatum'}
                  </label>
                  <input
                    type="date"
                    value={printData.birthdate}
                    onChange={(e) => setPrintData({...printData, birthdate: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowPrintDialog(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  {language === 'en' ? 'Cancel' : 'Abbrechen'}
                </button>
                <button
                  onClick={handlePrintWithPersonalData}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {language === 'en' ? 'Print' : 'Drucken'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Dialog */}
      <AnimatePresence>
        {showShareDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowShareDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">
                {language === 'en' ? 'Share CV' : 'CV teilen'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {window.location.href}
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setShowShareDialog(false);
                }}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {language === 'en' ? 'Copy Link' : 'Link kopieren'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Print Styles */}
      <style>{`
        @media print {
          /* Page Setup - minimal margins */
          @page {
            size: A4;
            margin: 0;
          }
          
          /* Force exact color printing */
          * {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          /* Hide only action bar */
          .print\\:hidden {
            display: none !important;
          }
          
          /* Hide nav and footer */
          nav, footer {
            display: none !important;
          }

          /* Reset body */
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }

          /* CV Container - keep all styles */
          .cv-print-container {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Keep all backgrounds, shadows, and rounded corners */
          .cv-print-container * {
            /* Don't override anything - keep web styles */
          }

          /* Ensure page breaks work */
          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          /* Keep grid layout */
          .print-two-column {
            display: grid !important;
            grid-template-columns: 2fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

// Helper Components
function Section({ title, icon, children, compact = false }) {
  return (
    <section className={`page-break-avoid bg-white dark:bg-slate-800 rounded-xl print:rounded-none shadow-lg print:shadow-none p-6 print:p-2 ${compact ? 'compact-section' : ''}`}>
      <h2 className="text-2xl print:text-base font-bold text-slate-900 dark:text-white mb-4 print:mb-1 flex items-center gap-2">
        <span className="text-blue-500 print:hidden">{icon}</span>
        {title}
      </h2>
      <div className={compact ? 'space-y-3 print:space-y-1' : 'space-y-4 print:space-y-2'}>
        {children}
      </div>
    </section>
  );
}

function Achievement({ title, period, subtitle, description }) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 print:pl-3">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-slate-900 dark:text-white text-base print:text-sm">{title}</h3>
        <span className="text-sm print:text-xs text-slate-500 whitespace-nowrap ml-2">{period}</span>
      </div>
      {subtitle && <p className="text-sm print:text-xs text-blue-600 dark:text-blue-400 mb-1">{subtitle}</p>}
      <p className="text-sm print:text-xs text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}

function Experience({ title, company, period, location, description, skills }) {
  return (
    <div className="border-l-4 border-green-500 pl-4 print:pl-3">
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base print:text-sm">{title}</h3>
          <p className="text-sm print:text-xs text-slate-600 dark:text-slate-400">{company} {location && `• ${location}`}</p>
        </div>
        <span className="text-sm print:text-xs text-slate-500 whitespace-nowrap ml-2">{period}</span>
      </div>
      <p className="text-sm print:text-xs text-slate-600 dark:text-slate-400 mb-2">{description}</p>
      {skills && (
        <div className="flex flex-wrap gap-1">
          {skills.map(skill => (
            <span key={skill} className="text-xs px-2 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Education({ degree, institution, period, grade, description }) {
  return (
    <div className="border-l-4 border-purple-500 pl-4 print:pl-3">
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base print:text-sm">{degree}</h3>
          <p className="text-sm print:text-xs text-slate-600 dark:text-slate-400">{institution}</p>
        </div>
        <span className="text-sm print:text-xs text-slate-500 whitespace-nowrap ml-2">{period}</span>
      </div>
      {grade && <p className="text-sm print:text-xs text-purple-600 dark:text-purple-400 mb-1">{grade}</p>}
      {description && <p className="text-sm print:text-xs text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  );
}

function LanguageSkill({ language, level }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-medium text-slate-900 dark:text-white">{language}</span>
      <span className="text-sm text-slate-600 dark:text-slate-400">{level}</span>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="mb-3">
      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">{title}</h4>
      <div className="flex flex-wrap gap-1">
        {skills.map(skill => (
          <span key={skill} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Certificate({ title, issuer, year, link }) {
  return (
    <div className="text-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">{issuer}</p>
        </div>
        <span className="text-xs text-slate-500 whitespace-nowrap">{year}</span>
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline flex items-center gap-1 mt-1 print:hidden">
          <ExternalLink size={12} />
          Verify
        </a>
      )}
    </div>
  );
}

function Hobby({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="font-medium text-slate-900 dark:text-white text-sm">{title}</h4>
        <p className="text-xs text-slate-600 dark:text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}
