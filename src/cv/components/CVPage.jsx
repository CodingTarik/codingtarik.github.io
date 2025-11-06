import React, { useState, useRef } from 'react';
import { 
  Printer, Share2, Copy, Globe, Award, Briefcase, GraduationCap, 
  Code, Heart, Languages, MapPin, Mail, Phone, Calendar, ExternalLink,
  Check, X, Download, Settings, Github, Linkedin
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
    email: '',
    address: '',
    phone: '',
    birthdate: '',
    birthplace: '',
    nationality: '',
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
    setPrintData({...printData, includePersonalData: true});
    setShowPrintDialog(false);
    setTimeout(() => {
      window.print();
      // Reset after printing
      setTimeout(() => {
        setPrintData(prev => ({...prev, includePersonalData: false}));
      }, 1000);
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
          className="cv-header bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-6"
        >
          <div className="flex flex-row gap-6 items-center print:p-4 print:pt-6 print:pb-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img 
                src="/src/cv/pictures/cv_profile_picture.jpeg" 
                alt="Tarik Azzouzi" 
                className="w-32 h-32 print:w-32 print:h-40 rounded-full print:rounded-lg object-cover border-4 border-blue-500 print:border-0 shadow-lg print:shadow-xl"
                style={{ objectPosition: '50% 35%' }}
              />
            </div>

            {/* Header Info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl print:text-3xl font-bold text-slate-900 dark:text-white print:text-white mb-2 print:mb-1">
                Tarik Azzouzi
              </h1>
              <p className="text-xl print:text-lg text-slate-600 dark:text-slate-300 print:text-blue-50 mb-4 print:mb-2">
                {language === 'en' ? 'Full-Stack Developer & AI Engineer' : 'Full-Stack Entwickler & KI-Ingenieur'}
              </p>
              
              <div className="flex flex-wrap gap-3 print:gap-2 text-sm print:text-xs text-slate-600 dark:text-slate-400 print:text-blue-100">
                {/* Show personal data only when printing with application data */}
                {printData.includePersonalData && (
                  <>
                    <div className="hidden print:flex items-center gap-1">
                      <Mail size={13} />
                      <span>{printData.email}</span>
                    </div>
                    {printData.phone && (
                      <div className="hidden print:flex items-center gap-1">
                        <Phone size={13} />
                        <span>{printData.phone}</span>
                      </div>
                    )}
                    {printData.address && (
                      <div className="hidden print:flex items-center gap-1">
                        <MapPin size={13} />
                        <span>{printData.address}</span>
                      </div>
                    )}
                    {printData.birthdate && (
                      <div className="hidden print:flex items-center gap-1">
                        <Calendar size={13} />
                        <span>{printData.birthdate}</span>
                      </div>
                    )}
                    {printData.birthplace && (
                      <div className="hidden print:flex items-center gap-1">
                        <MapPin size={13} />
                        <span>{language === 'en' ? 'Born in' : 'Geboren in'} {printData.birthplace}</span>
                      </div>
                    )}
                    {printData.nationality && (
                      <div className="hidden print:flex items-center gap-1">
                        <Globe size={13} />
                        <span>{printData.nationality}</span>
                      </div>
                    )}
                  </>
                )}
                
                {/* Links - always visible */}
                <div className="flex items-center gap-1.5">
                  <Globe size={15} className="print:w-[13px] print:h-[13px]" />
                  <a href="https://codingtarik.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 print:text-blue-100 transition-colors">
                    codingtarik.github.io
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github size={15} className="print:w-[13px] print:h-[13px]" />
                  <a href="https://github.com/codingtarik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 print:text-blue-100 transition-colors">
                    github.com/codingtarik
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Linkedin size={15} className="print:w-[13px] print:h-[13px]" />
                  <a href="https://www.linkedin.com/in/tarik-azzouzi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 print:text-blue-100 transition-colors">
                    linkedin.com/in/tarik-azzouzi
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-[15px] h-[15px] print:w-[13px] print:h-[13px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.996 0C5.372 0 0 5.372 0 12s5.372 12 11.996 12C18.628 24 24 18.628 24 12S18.628 0 11.996 0zm6.056 17.544c-.214.276-.492.416-.834.416-.12 0-.24-.024-.36-.072l-4.8-2.4c-.24-.12-.408-.336-.408-.6V7.2c0-.432.336-.768.768-.768s.768.336.768.768v6.96l4.416 2.208c.384.192.528.648.336 1.032z"/>
                  </svg>
                  <a href="https://app.hackthebox.com/profile/477139" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 print:text-blue-100 transition-colors">
                    hackthebox.com/profile/477139
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary - Only for Print */}
        <div className="hidden print:block">
          <Section title={language === 'en' ? 'Professional Summary' : 'Professionelle Zusammenfassung'} icon={<Briefcase />}>
            <p className="text-sm leading-tight">
              {language === 'en' 
                ? 'Full-Stack Developer & AI Engineer specializing in RAG platforms, AI agents, and secure implementations. Master\'s student at TU Darmstadt. Active TUD.dll Hacking Team member.'
                : 'Full-Stack Entwickler & KI-Ingenieur mit Spezialisierung auf RAG-Plattformen, KI-Agenten und sichere Implementierungen. Masterstudent an der TU Darmstadt. Aktives TUD.dll Hacking Team Mitglied.'}
            </p>
          </Section>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-2 print:grid-cols-1">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 print:space-y-2 print:order-1">
            {/* Professional Experience - Print Order 1 */}
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

              <Experience
                title={language === 'en' ? 'Internship - IT Department' : 'Praktikum - IT-Abteilung'}
                company="DoIT Solutions GmbH, Gelnhausen"
                period="2017"
                description={language === 'en'
                  ? 'Completed four-day immersive program focused on career and study orientation. Gained foundational insights into enterprise IT operations and software development lifecycle.'
                  : 'Abschluss eines viertägigen Programms zur Berufs- und Studienorientierung. Grundlegende Einblicke in IT-Betrieb und Software-Entwicklungszyklus.'}
                skills={['Active Directory', 'Windows Server', 'PowerShell']}
              />
            </Section>

            {/* Education - Print Order 2 */}
            <Section title={t.education} icon={<GraduationCap />}>
              <Education
                degree="M.Sc. Computer Science"
                institution="TU Darmstadt"
                period={`2025 - ${language === 'en' ? 'Sept 2026' : 'Sept 2026'}`}
                description={language === 'en'
                  ? 'Focus: Software Engineering, AI, Cybersecurity. Thesis: Modular Plugin Frameworks for RAG.'
                  : 'Schwerpunkt: Software Engineering, KI, Cybersecurity. Thesis: Modulare Plugin-Frameworks für RAG.'}
              />

              <Education
                degree={language === 'en' ? 'Erasmus+ Exchange' : 'Erasmus+ Austausch'}
                institution="University of Latvia"
                period="Sept 2025 - Jan 2026"
              />

              <Education
                degree={language === 'en' ? 'Open University Student' : 'Gaststudent'}
                institution={language === 'en' ? 'University of Helsinki & Metropolia, Finland' : 'Universität Helsinki & Metropolia, Finnland'}
                period="Jan 2024 - Oct 2025"
                description={language === 'en'
                  ? 'Completed advanced CS courses: software engineering, system engineering, web development.'
                  : 'Abschluss fortgeschrittener Informatik-Kurse: Software Engineering, System Engineering, Webentwicklung.'}
              />

              <Education
                degree="B.Sc. Computer Science"
                institution="TU Darmstadt"
                period="2021 - 2025"
                grade={language === 'en' ? 'Grade: 1.3' : 'Note: 1.3'}
                description={language === 'en'
                  ? 'Thesis: "Secure Hybrid RAG Applications" - Grade: 1.0'
                  : 'Thesis: "Sichere Hybrid-RAG-Anwendungen" - Note: 1.0'}
              />

              <Education
                degree="Abitur"
                institution="Berufliches Gymnasium Gelnhausen"
                period="2018 - 2021"
                grade={language === 'en' ? 'Grade: 1.0' : 'Note: 1.0'}
              />

              <Education
                degree={language === 'en' ? 'Realschulabschluss (Secondary School Certificate)' : 'Realschulabschluss'}
                institution="Kreisrealschule Gelnhausen"
                period="2012 - 2018"
                grade={language === 'en' ? 'Grade: 1.1' : 'Note: 1.1'}
              />
            </Section>

            {/* Key Achievements - Print Order 3 */}
            <Section title={t.achievements} icon={<Award />} className="print:order-3">
              <Achievement
                title={language === 'en' ? 'Modular Plugin Framework for RAG' : 'Modulares Plugin-Framework für RAG'}
                period="2025"
                subtitle={language === 'en' ? 'Master Thesis' : 'Masterarbeit'}
                description={language === 'en' 
                  ? 'Developing extensible ecosystem for RAG systems with dual-layer extensibility and multi-level configuration.'
                  : 'Entwicklung eines erweiterbaren Ökosystems für RAG-Systeme mit zweischichtiger Erweiterbarkeit.'}
              />
              
              <Achievement
                title={language === 'en' ? 'Secure Hybrid RAG Applications' : 'Sichere Hybrid-RAG-Anwendungen'}
                period="2024"
                subtitle={language === 'en' ? 'Bachelor Thesis - Grade: 1.0' : 'Bachelorarbeit - Note: 1.0'}
                description={language === 'en'
                  ? 'Analyzed security vulnerabilities in RAG systems and developed practical solutions for enterprise implementations.'
                  : 'Analyse von Sicherheitslücken in RAG-Systemen und Entwicklung praktischer Lösungen.'}
              />

              <Achievement
                title={language === 'en' ? 'Animal Manager - Tikki Hywood Foundation' : 'Tierverwaltung - Tikki Hywood Foundation'}
                period="2022 - 2023"
                subtitle={language === 'en' ? 'Volunteer Developer' : 'Ehrenamtlicher Entwickler'}
                description={language === 'en'
                  ? 'Built custom animal management system for pangolin conservation with centralized data synchronization.'
                  : 'Entwicklung eines Tierverwaltungssystems für Schuppentierschutz mit zentralisierter Datensynchronisation.'}
              />

              <Achievement
                title="TUD.dll Hacking Team"
                period="2021 - 2025"
                description={language === 'en'
                  ? 'Active member of TU Darmstadt\'s cybersecurity team, participating in CTF competitions.'
                  : 'Aktives Mitglied des Cybersecurity-Teams der TU Darmstadt, Teilnahme an CTF-Wettbewerben.'}
              />
            </Section>
          </div>

          {/* Right Column */}
          <div className="space-y-6 print:space-y-2 print:order-2">
            {/* Certificates - Print Order 4 */}
            <Section title={t.certificates} icon={<Award />} compact className="print:order-4">
              <Certificate
                title="Deutschlandstipendium"
                issuer={language === 'en' ? 'Germany Scholarship - Twice Awarded' : 'Deutschland-Stipendium - 2x vergeben'}
                year="2021, 2023"
              />

              <Certificate
                title={language === 'en' ? 'Digital School Transformation Achievement' : 'Digitale Schultransformation Auszeichnung'}
                issuer={language === 'en' ? 'Berufliche Schulen Gelnhausen' : 'Berufliche Schulen Gelnhausen'}
                year="2019"
                description={language === 'en'
                  ? 'Special recognition for exceptional contribution to installation of new computer systems as part of Germany\'s Digital Pact initiative.'
                  : 'Besondere Anerkennung für außergewöhnlichen Beitrag zur Installation neuer Computersysteme im Rahmen des DigitalPakts.'}
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

            {/* Technical Skills - Print Order 5 */}
            <Section title={t.skills} icon={<Code />} compact className="print:order-5">
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

            {/* Languages - Print Order 6 */}
            <Section title={t.languages} icon={<Languages />} compact className="print:order-6">
              <LanguageSkill language={language === 'en' ? 'German' : 'Deutsch'} level={t.native} />
              <LanguageSkill language={language === 'en' ? 'English' : 'Englisch'} level={`${t.fluent} (C1)`} />
            </Section>

            {/* Hobbies - Print Order 7 */}
            <Section title={t.hobbies} icon={<Heart />} compact className="print:order-7">
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
                    {language === 'en' ? 'Private Email' : 'Private E-Mail'}
                  </label>
                  <input
                    type="email"
                    value={printData.email}
                    onChange={(e) => setPrintData({...printData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                    placeholder="your.email@example.com"
                  />
                </div>

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

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'en' ? 'Place of Birth' : 'Geburtsort'}
                  </label>
                  <input
                    type="text"
                    value={printData.birthplace}
                    onChange={(e) => setPrintData({...printData, birthplace: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                    placeholder={language === 'en' ? 'City, Country' : 'Stadt, Land'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'en' ? 'Nationality' : 'Staatsangehörigkeit'}
                  </label>
                  <input
                    type="text"
                    value={printData.nationality}
                    onChange={(e) => setPrintData({...printData, nationality: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                    placeholder={language === 'en' ? 'e.g., German' : 'z.B. Deutsch'}
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
          /* Page Setup - no top margin for blue header */
          @page {
            size: A4;
            margin: 0mm 0mm 15mm 0mm;
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

          /* Reset body - clean white background */
          html {
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
            background: white !important;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: white !important;
          }
          
          /* Main container - clean white */
          body > div {
            background: white !important;
            min-height: 100vh !important;
          }

          /* CV Container - clean professional layout with side margins */
          .cv-print-container {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 12mm 0 12mm !important;
            background: white !important;
          }

          /* Allow sections to break across pages, but keep header with first item */
          section {
            page-break-inside: auto;
            break-inside: auto;
          }
          
          /* Keep section header with at least first item */
          section > h2 {
            page-break-after: avoid;
            break-after: avoid;
          }
          
          /* Prevent individual items from breaking */
          .cv-print-container section > div > div {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          /* Single column layout for print */
          .print\\:grid-cols-1 {
            grid-template-columns: 1fr !important;
          }
          
          /* Order sections for print */
          .print\\:order-1 {
            order: 1 !important;
          }
          
          .print\\:order-2 {
            order: 2 !important;
          }
          
          /* Very compact spacing for print */
          .cv-print-container .space-y-6 > * + * {
            margin-top: 0.4rem !important;
          }
          
          .cv-print-container .space-y-4 > * + * {
            margin-top: 0.3rem !important;
          }
          
          .cv-print-container .space-y-3 > * + * {
            margin-top: 0.25rem !important;
          }
          
          .cv-print-container .space-y-2 > * + * {
            margin-top: 0.2rem !important;
          }
          
          /* Professional section styling */
          .cv-print-container section {
            padding: 0.5rem 0 !important;
            margin-bottom: 0.6rem !important;
            border-radius: 0 !important;
            background: white !important;
            box-shadow: none !important;
          }
          
          /* Section headers with accent line */
          .cv-print-container section > div:first-child {
            border-bottom: 1.5px solid #e2e8f0 !important;
            padding-bottom: 0.3rem !important;
            margin-bottom: 0.4rem !important;
          }
          
          /* Professional header with beautiful gradient - full width from top */
          .cv-print-container .cv-header {
            position: relative !important;
            margin-left: -12mm !important;
            margin-right: -12mm !important;
            margin-top: 0 !important;
            margin-bottom: 0.8rem !important;
            width: 100vw !important;
            max-width: none !important;
            padding: 10mm 12mm 1rem 12mm !important;
            border-radius: 0 !important;
            background-color: #1e40af !important;
            background-image: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%) !important;
            box-shadow: none !important;
            border-bottom: 3px solid #1e293b !important;
          }
          
          /* Force all child elements to have transparent background */
          .cv-print-container .cv-header * {
            background-color: transparent !important;
            background-image: none !important;
          }
          
          /* Force white text on header */
          .cv-print-container .cv-header h1 {
            color: #ffffff !important;
          }
          
          .cv-print-container .cv-header p {
            color: #dbeafe !important;
          }
          
          .cv-print-container .cv-header div,
          .cv-print-container .cv-header span,
          .cv-print-container .cv-header a {
            color: #e0f2fe !important;
          }
          
          /* Professional typography */
          .cv-print-container h1 {
            font-size: 1.75rem !important;
            margin-bottom: 0.15rem !important;
            color: #1e3a8a !important;
            font-weight: 700 !important;
          }
          
          /* Compact header text */
          .cv-print-container .cv-header h1 {
            font-size: 1.75rem !important;
            margin-bottom: 0.15rem !important;
          }
          
          .cv-print-container .cv-header p {
            font-size: 0.9rem !important;
            margin-bottom: 0.3rem !important;
          }
          
          .cv-print-container .cv-header .text-sm {
            font-size: 0.8rem !important;
          }
          
          .cv-print-container h2 {
            font-size: 1.15rem !important;
            margin-bottom: 0.3rem !important;
            color: #1e40af !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
          }
          
          .cv-print-container h3 {
            font-size: 0.95rem !important;
            margin-bottom: 0.15rem !important;
            color: #1e3a8a !important;
            font-weight: 600 !important;
          }
          
          .cv-print-container h4 {
            font-size: 0.85rem !important;
            color: #475569 !important;
            font-weight: 500 !important;
          }
          
          .cv-print-container p,
          .cv-print-container span,
          .cv-print-container div {
            font-size: 0.85rem !important;
            line-height: 1.4 !important;
            color: #334155 !important;
          }
          
          /* Professional body text */
          .cv-print-container .text-sm,
          .cv-print-container .text-xs {
            color: #475569 !important;
          }
          
          /* Professional skill tags */
          .cv-print-container [class*="px-2"] {
            padding-left: 0.4rem !important;
            padding-right: 0.4rem !important;
            background: white !important;
            border: 1px solid #cbd5e1 !important;
            color: #334155 !important;
            border-radius: 3px !important;
          }
          
          .cv-print-container [class*="py-1"] {
            padding-top: 0.2rem !important;
            padding-bottom: 0.2rem !important;
          }
          
          /* Remove gradient backgrounds from tags */
          .cv-print-container [class*="bg-gradient"] {
            background: white !important;
            border: 1px solid #cbd5e1 !important;
          }
          
          /* Professional accent borders */
          .cv-print-container [class*="border-l-4"] {
            border-left-width: 3px !important;
            border-left-color: #3b82f6 !important;
            padding: 0.4rem 0 0.4rem 0.6rem !important;
            margin-bottom: 0.4rem !important;
            border-radius: 0 !important;
            background: #f8fafc !important;
          }
          
          /* Subtle background for items */
          .cv-print-container [class*="border-blue"] {
            background: #f8fafc !important;
          }
          
          .cv-print-container [class*="border-green"] {
            background: #f0fdf4 !important;
          }
          
          .cv-print-container [class*="border-purple"] {
            background: #faf5ff !important;
          }
          
          /* Professional profile picture - compact rectangular without border */
          .cv-print-container .cv-header img {
            width: 100px !important;
            height: 130px !important;
            border-radius: 0.5rem !important;
            border: none !important;
            box-shadow: 0 8px 16px rgba(0,0,0,0.25) !important;
            object-fit: cover !important;
            object-position: 50% 35% !important;
          }
          
          /* Reduce gap in grid */
          .cv-print-container .print\\:gap-2 {
            gap: 0.3rem !important;
          }
          
          /* Compact hobby items */
          .cv-print-container [class*="flex items-center gap"] {
            gap: 0.4rem !important;
          }
          
          /* Smaller icons/emojis */
          .cv-print-container .text-2xl {
            font-size: 1rem !important;
          }
          
          /* Hide decorative icons in print for cleaner look */
          .cv-print-container section svg {
            display: none !important;
          }
          
          /* Professional date/period styling */
          .cv-print-container .text-right {
            color: #64748b !important;
            font-weight: 500 !important;
          }
          
          /* Clean link styling */
          .cv-print-container a {
            color: #3b82f6 !important;
            text-decoration: none !important;
          }
          
          /* Professional spacing between entries */
          .cv-print-container .space-y-4 > * + * {
            margin-top: 0.5rem !important;
          }
          
          /* Ensure consistent text color */
          .cv-print-container * {
            color: inherit !important;
          }
        }
      `}</style>
    </div>
  );
}

// Helper Components
function Section({ title, icon, children, compact = false, className = '' }) {
  return (
    <section className={`page-break-avoid bg-white dark:bg-slate-800 rounded-xl print:rounded-none shadow-lg print:shadow-none p-6 print:p-2 ${compact ? 'compact-section' : ''} ${className}`}>
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

function Certificate({ title, issuer, year, link, description }) {
  return (
    <div className="text-sm border-l-4 border-purple-500 print:border-blue-500 pl-4 print:pl-3 py-2 print:py-1 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 print:from-blue-50 print:to-transparent rounded-r-lg print:rounded-r-md">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Award size={14} className="text-purple-500 print:text-blue-600 flex-shrink-0 print:hidden" />
            <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{issuer}</p>
          {description && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 print:mt-0.5 leading-relaxed">{description}</p>
          )}
        </div>
        <span className="text-xs font-medium text-purple-600 print:text-blue-600 dark:text-purple-400 whitespace-nowrap bg-purple-100 print:bg-blue-100 dark:bg-purple-900/30 px-2 py-1 rounded print:rounded-sm">{year}</span>
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:text-blue-600 hover:underline flex items-center gap-1 mt-2 print:hidden transition-colors">
          <ExternalLink size={12} />
          <span>Verify Certificate</span>
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
