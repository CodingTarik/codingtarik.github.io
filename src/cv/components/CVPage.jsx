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
      achievements: 'Achievements & Engagement',
      hobbies: 'Hobbies & Interests',
      languages: 'Languages',
      projects: 'Selected Projects',
      present: 'present',
      ongoing: 'ongoing',
      expected: 'expected',
      native: 'Native',
      fluent: 'Fluent'
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
      achievements: 'Erfolge & Engagement',
      hobbies: 'Hobbys & Interessen',
      languages: 'Sprachen',
      projects: 'Ausgewählte Projekte',
      present: 'heute',
      ongoing: 'laufend',
      expected: 'voraussichtlich',
      native: 'Muttersprache',
      fluent: 'Fließend'
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
          className="cv-header bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-4"
        >
          <div className="flex flex-row gap-5 items-start print:p-3 print:pt-4 print:pb-4">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img 
                src="/src/cv/pictures/cv_profile_picture.jpeg" 
                alt="Tarik Azzouzi" 
                className="w-28 h-28 print:w-48 print:h-56 rounded-full print:rounded-lg object-cover border-4 border-blue-500 print:border-0 shadow-lg print:shadow-xl"
                style={{ objectPosition: '50% 35%' }}
              />
            </div>

            {/* Header Info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl print:text-2xl font-bold text-slate-900 dark:text-white print:text-white mb-1 print:mb-0.5">
                Tarik Azzouzi
              </h1>
              <p className="text-lg print:text-base text-slate-600 dark:text-slate-300 print:text-blue-100 mb-2 print:mb-2">
                {language === 'en' ? 'Working Student Software Developer & M.Sc. Computer Science Student at TU Darmstadt' : 'Werkstudent Software-Entwickler & M.Sc. Informatik Student an der TU Darmstadt'}
              </p>
              
              {/* Contact Info Grid - Only for print with personal data */}
              {printData.includePersonalData && (
                <div className="hidden print:grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-blue-100 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Mail size={12} className="flex-shrink-0" />
                    <span className="truncate">{printData.email}</span>
                  </div>
                  {printData.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone size={12} className="flex-shrink-0" />
                      <span>{printData.phone}</span>
                    </div>
                  )}
                  {printData.address && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="flex-shrink-0" />
                      <span className="truncate">
                        <span className="font-medium">{language === 'en' ? 'Address:' : 'Adresse:'}</span> {printData.address}
                      </span>
                    </div>
                  )}
                  {printData.birthdate && (
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="flex-shrink-0" />
                      <span>
                        <span className="font-medium">{language === 'en' ? 'Born:' : 'Geb.:'}</span> {printData.birthdate}
                      </span>
                    </div>
                  )}
                  {printData.birthplace && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="flex-shrink-0" />
                      <span className="truncate">
                        <span className="font-medium">{language === 'en' ? 'Birthplace:' : 'Geburtsort:'}</span> {printData.birthplace}
                      </span>
                    </div>
                  )}
                  {printData.nationality && (
                    <div className="flex items-center gap-1.5">
                      <Globe size={12} className="flex-shrink-0" />
                      <span>
                        <span className="font-medium">{language === 'en' ? 'Nationality:' : 'Staatsangehörigkeit:'}</span> {printData.nationality}
                      </span>
                    </div>
                  )}
                </div>
              )}
              
              {/* Links - Compact Grid Layout */}
              <div className="grid grid-cols-2 print:grid-cols-2 gap-x-4 gap-y-1.5 print:gap-y-1 text-sm print:text-xs text-slate-600 dark:text-slate-400 print:text-blue-100">
                <div className="flex items-center gap-1.5">
                  <Globe size={14} className="print:w-[12px] print:h-[12px] flex-shrink-0" />
                  <a href="https://codingtarik.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 print:text-blue-100 transition-colors truncate">
                    codingtarik.github.io
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github size={14} className="print:w-[12px] print:h-[12px] flex-shrink-0" />
                  <a href="https://github.com/codingtarik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 print:text-blue-100 transition-colors truncate">
                    github.com/codingtarik
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Linkedin size={14} className="print:w-[12px] print:h-[12px] flex-shrink-0" />
                  <a href="https://www.linkedin.com/in/tarik-azzouzi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 print:text-blue-100 transition-colors truncate">
                    linkedin.com/in/tarik-azzouzi
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-[14px] h-[14px] print:w-[12px] print:h-[12px] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.996 0a1.119 1.119 0 0 0-.057.002a1.09 1.09 0 0 0-.31.057L1.111 5.095A1.119 1.119 0 0 0 .5 6.125v11.75a1.119 1.119 0 0 0 .611 1.03l10.518 5.036c.05.022.102.04.155.054a1.119 1.119 0 0 0 .432 0a1.118 1.118 0 0 0 .155-.054l10.518-5.035a1.119 1.119 0 0 0 .611-1.03V6.125a1.119 1.119 0 0 0-.611-1.03L12.371.059A1.118 1.118 0 0 0 11.996 0zm.002 2.366L19.623 6.5l-2.89 1.386-7.625-3.634zM5.117 5.252l7.625 3.634v7.864l-7.625-3.652zm10.266 0v7.846l-1.14.546V8.138zM2.875 7.25v9.5l6.238 2.986v-9.5zm18.75 0l-6.238 2.986v5.014l2.39-1.145a1.119 1.119 0 0 0 .611-1.03V11.5a1.119 1.119 0 0 0-2.238 0v.75l-.763.365V8.138l6.238-2.986z"/>
                  </svg>
                  <a href="https://app.hackthebox.com/profile/477139" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 print:text-blue-100 transition-colors truncate">
                    <span className="print:inline">hackthebox.com/477139</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <div className="block mb-6 print:mb-0">
          <Section title={language === 'en' ? 'Professional Summary' : 'Professionelle Zusammenfassung'} icon={<Briefcase />}>
            <p className="text-sm print:text-xs leading-relaxed print:leading-snug">
              {language === 'en' 
                ? 'Working student software developer specializing in AI, RAG platforms and AI agents. Strong interest in cybersecurity. Master\'s student at TU Darmstadt.'
                : 'Werkstudent Software-Entwickler im Bereich KI mit Spezialisierung auf RAG-Plattformen und AI Agents. Starkes Interesse an Cybersecurity. Masterstudent an der TU Darmstadt.'}
            </p>
          </Section>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-0 print:grid-cols-1">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 print:space-y-1 print:order-1">
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
                skills={['PHP', 'SQL', 'Python', 'Java']}
              />

              <Experience
                title={language === 'en' ? 'Internship - IT Department' : 'Praktikum - IT-Abteilung'}
                company="DoIT Solutions GmbH, Gelnhausen"
                period="2019"
                description={language === 'en'
                  ? 'Completed four-day immersive program focused on career and study orientation. Gained foundational insights into enterprise IT operations and software development lifecycle.'
                  : 'Abschluss eines viertägigen Programms zur Berufs- und Studienorientierung. Grundlegende Einblicke in IT-Betrieb und Software-Entwicklungszyklus.'}
                skills={['Active Directory', 'Windows Server', 'PowerShell']}
              />

              <Experience
                title={language === 'en' ? 'Vocational Internship - IT Systems Electronics' : 'Betriebspraktikum - IT-Systemelektroniker'}
                company="Elektrotechnik Neis Gesellschaft für Haustechnik mbH"
                period="2017"
                description={language === 'en'
                  ? 'Two-week vocational internship gaining practical experience in IT systems electronics and building services technology, including DSL installations.'
                  : 'Zweiwöchiges Betriebspraktikum mit praktischen Erfahrungen in IT-Systemelektronik und Gebäudetechnik, unter anderem DSL.'}
              />
            </Section>

            {/* Education - Print Order 2 */}
            <Section title={t.education} icon={<GraduationCap />}>
              <Education
                degree="M.Sc. Computer Science"
                institution="TU Darmstadt"
                period={language === 'en' ? 'Apr 2025 - Sept 2026' : 'Apr 2025 - Sept 2026'}
                description={language === 'en'
                  ? 'Focus: Software Engineering, AI, Cybersecurity. Thesis: "Design and Implementation of a Modular Plugin Framework for Retrieval-Augmented Generation using Model Context Protocol" (submitted October 29, 2025)'
                  : 'Schwerpunkt: Software Engineering, KI, Cybersecurity. Thesis: "Design und Implementierung eines modularen Plugin-Frameworks für Retrieval-Augmented Generation mittels Model Context Protocol" (abgegeben 29. Oktober 2025)'}
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
                period={language === 'en' ? 'Oct 2021 - Mar 2025' : 'Okt 2021 - März 2025'}
                grade={language === 'en' ? 'Grade: 1.3' : 'Note: 1.3'}
                description={language === 'en'
                  ? 'Thesis: "Secure Hybrid RAG Applications in Enterprises" - Grade: 1.0'
                  : 'Thesis: "Sichere Hybrid-RAG-Anwendungen in Unternehmen" - Note: 1.0'}
              />

              <Education
                degree="Abitur"
                institution="Berufliches Gymnasium Gelnhausen"
                period="2018 - 2021"
                grade={language === 'en' ? 'Grade: 1.0' : 'Note: 1.0'}
                description={language === 'en'
                  ? 'Focus: Applied Computer Science'
                  : 'Schwerpunkt: Praktische Informatik'}
              />

              <Education
                degree={language === 'en' ? 'Realschulabschluss (Secondary School Certificate)' : 'Realschulabschluss'}
                institution="Kreisrealschule Gelnhausen"
                period="2012 - 2018"
                grade={language === 'en' ? 'Grade: 1.1' : 'Note: 1.1'}
              />
            </Section>

            {/* Key Achievements - Print Order 3 */}
            <Section title={t.achievements} icon={<Award />} className="print:order-3 print:mb-0">
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
                title={language === 'en' ? 'Volunteer Firefighter - Youth Fire Brigade' : 'Jugendfeuerwehr Eidengesäß'}
                period="2014 - 2021"
                subtitle={language === 'en' ? 'Community Service' : 'Ehrenamt'}
                description={language === 'en'
                  ? 'Active member of the youth fire brigade, developing teamwork and emergency response skills.'
                  : 'Aktives Mitglied der Jugendfeuerwehr mit Entwicklung von Teamfähigkeit und Einsatzbereitschaft.'}
              />

              <Achievement
                title={language === 'en' ? 'Animal Manager - Tikki Hywood Foundation' : 'Tierverwaltung - Tikki Hywood Foundation'}
                period={`2020 - ${t.present}`}
                subtitle={language === 'en' ? 'Volunteer Developer (Wildlife Conservation NGO)' : 'Ehrenamtlicher Entwickler (Tierschutzorganisation)'}
                description={language === 'en'
                  ? 'Built custom animal management system for wildlife conservation organization focused on pangolin rescue and rehabilitation with centralized data synchronization.'
                  : 'Entwicklung eines Tierverwaltungssystems für Tierschutzorganisation mit Fokus auf Schuppentier-Rettung und -Rehabilitation mit zentralisierter Datensynchronisation.'}
              />

              <Achievement
                title={language === 'en' ? 'Cybersecurity & CTF Competitions' : 'Cybersecurity & CTF-Wettbewerbe'}
                period={`2021 - ${t.present}`}
                subtitle={advancedMode ? (language === 'en' ? 'TUD.dll Hacking Team & CCC Wizards of Dos' : 'TUD.dll Hacking Team & CCC Wizards of Dos') : 'TUD.dll Hacking Team'}
                description={advancedMode 
                  ? (language === 'en'
                    ? 'Active participation in TU Darmstadt\'s cybersecurity team (TUD.dll) and the "Wizards of Dos" team from Chaos Computer Club Darmstadt. Participating in CTF competitions, solving security challenges and developing offensive security skills.'
                    : 'Aktive Teilnahme im Cybersecurity-Team der TU Darmstadt (TUD.dll) und im "Wizards of Dos"-Team vom Chaos Computer Club Darmstadt. Teilnahme an CTF-Wettbewerben, Lösen von Sicherheits-Challenges und Entwicklung von Offensive-Security-Fähigkeiten.')
                  : (language === 'en'
                    ? 'Active participation in TU Darmstadt\'s cybersecurity team, participating in CTF competitions.'
                    : 'Aktive Teilnahme im Cybersecurity-Team der TU Darmstadt, Teilnahme an CTF-Wettbewerben.')
                }
              />

              {advancedMode && (
                <>
                  <Achievement
                    title={language === 'en' ? 'Technical Blog & Knowledge Sharing' : 'Tech-Blog & Wissensverbreitung'}
                    period={`2022 - ${t.present}`}
                    subtitle={language === 'en' ? 'Open Source Educator' : 'Open-Source-Bildung'}
                    description={language === 'en'
                      ? 'Maintaining a technical blog to share knowledge about computer science topics, programming best practices, and emerging technologies.'
                      : 'Betreibe einen Tech-Blog zur Verbreitung von Wissen zu Informatik-Themen, Programmier-Best-Practices und neuen Technologien.'}
                  />

                  <Achievement
                    title="BoulderBuddy"
                    period={`2025 - ${t.present}`}
                    subtitle={language === 'en' ? 'Progressive Web App (Open Source)' : 'Progressive Web App (Open Source)'}
                    description={language === 'en'
                      ? 'Developing a free, open-source Progressive Web App to teach bouldering fundamentals through interactive lessons and personalized training plans.'
                      : 'Entwicklung einer kostenlosen, quelloffenen Progressive Web App zum interaktiven Erlernen der Bouldering-Grundlagen mit personalisierten Trainingsplänen.'}
                  />

                  <Achievement
                    title={language === 'en' ? 'Open Source Development' : 'Open-Source-Entwicklung'}
                    period={`2018 - ${t.present}`}
                    subtitle={language === 'en' ? 'Various Projects' : 'Verschiedene Projekte'}
                    description={language === 'en'
                      ? 'Regular development of open-source applications including Smart-Home Manager, Smart Card Removal Reminder, and custom Minecraft Mod Launcher.'
                      : 'Regelmäßige Entwicklung von Open-Source-Anwendungen wie Smart-Home Manager, Smart Card Removal Reminder und einem Mod-Launcher für Minecraft.'}
                  />
                </>
              )}
            </Section>
          </div>

          {/* Right Column */}
          <div className="space-y-6 print:space-y-1 print:order-2">
            {/* Certificates - Print Order 4 */}
            <Section title={t.certificates} icon={<Award />} compact className="print:order-4">
              <Certificate
                title="Deutschlandstipendium"
                issuer="TU Darmstadt"
                year="2021, 2023"
                description={language === 'en' ? 'Germany Scholarship - Awarded twice' : 'Deutschland-Stipendium - 2x vergeben'}
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
                  issuer={language === 'en' ? 'Hamburg Sports and Fitness Academy' : 'Hamburger Sport- und Fitnessakademie'}
                  year="2022"
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
                skills={['Docker', 'Kubernetes', 'GCP', 'Git', 'CI/CD', 'Linux', 'Bash']} 
              />
              <SkillCategory 
                title={language === 'en' ? 'Databases & Tools' : 'Datenbanken & Tools'} 
                skills={['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'Postman', 'VS Code']} 
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
            </Section>

            {/* CV Info Box - Print Order 8 - Only visible in print */}
            <div className="hidden print:block print:order-8 mt-3 p-2.5 bg-gradient-to-r from-blue-50 to-sky-50 border-l-4 border-blue-500 rounded-lg">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 mt-0.5">
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-semibold text-slate-900 mb-0.5">
                    {language === 'en' 
                      ? 'This CV was created with a custom web application' 
                      : 'Dieser Lebenslauf wurde mit einer selbst entwickelten Webanwendung erstellt'}
                  </h3>
                  <p className="text-xs text-slate-700 leading-tight">
                    {language === 'en'
                      ? 'This CV is also available online in both German and English at:'
                      : 'Dieser Lebenslauf ist auch online sowohl auf Deutsch als auch auf Englisch verfügbar unter:'}
                  </p>
                  <p className="text-xs font-mono text-blue-700 mt-0.5 font-semibold">
                    codingtarik.github.io/#/cv
                  </p>
                  <p className="text-xs text-slate-600 leading-tight mt-1">
                    {language === 'en'
                      ? 'Note: Some PDF readers may have display issues. Chromium-based PDF browsers work best.'
                      : 'Hinweis: Bei manchen PDF-Lesern kann es zu Darstellungsproblemen kommen. Der Chromium PDF Browser funktioniert am besten.'}
                  </p>
                </div>
              </div>
            </div>

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
            margin: 0mm 0mm 10mm 0mm;
          }
          
          /* Force exact color printing */
          * {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          body, .cv-print-container, .cv-print-container * {
            font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif !important;
          }
 
          /* Hide only action bar */
          .print\:hidden {
            display: none !important;
          }
          
          /* Hide certificate verification links */
          .cv-print-container .certificate-component a {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          
          /* Hide nav and footer */
          nav, footer {
            display: none !important;
          }

          /* Reset body - clean white background */
          html {
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            background: white !important;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
            background: white !important;
          }
          
          /* Main container - clean white */
          body > div {
            background: white !important;
            min-height: 0 !important;
            height: auto !important;
          }

          /* CV Container - clean professional layout with side margins */
          .cv-print-container {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 12mm 5mm 12mm !important;
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

          /* Section spacing */
          .cv-print-container .space-y-6 > * + * {
            margin-top: 0.3rem !important;
          }
          
          .cv-print-container .space-y-4 > * + * {
            margin-top: 0.25rem !important;
          }
          
          .cv-print-container .space-y-3 > * + * {
            margin-top: 0.2rem !important;
          }
          
          .cv-print-container .space-y-2 > * + * {
            margin-top: 0.15rem !important;
          }
          
          .cv-print-container .space-y-1 > * + * {
            margin-top: 0.1rem !important;
          }

          /* Elegant section styling with modern design */
          .cv-print-container section {
            padding: 0.6rem 0.75rem !important;
            margin-bottom: 0.5rem !important;
            border-radius: 0.65rem !important;
            background: linear-gradient(135deg, #ffffff 0%, #f8fbff 50%, #f0f7ff 100%) !important;
            border: 1.5px solid #c7d9f5 !important;
            box-shadow: 0 8px 20px rgba(37, 99, 235, 0.12), 0 2px 6px rgba(15, 23, 42, 0.06) !important;
            position: relative !important;
            overflow: visible !important;
          }
          
          /* Modern accent bar on left side of sections */
          .cv-print-container section::before {
            content: '' !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            width: 5px !important;
            background: linear-gradient(180deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%) !important;
            border-radius: 0.65rem 0 0 0.65rem !important;
          }

          /* Section headers with modern styling */
          .cv-print-container section > div:first-child {
            border-bottom: 2px solid transparent !important;
            background: linear-gradient(90deg, #eff6ff 0%, transparent 100%) !important;
            padding: 0.4rem 0.5rem !important;
            margin: -0.6rem -0.75rem 0.5rem -0.75rem !important;
            border-radius: 0.65rem 0.65rem 0 0 !important;
            position: relative !important;
            border-bottom: 2px solid #dbeafe !important;
          }
          
          /* Section header h2 styling */
          .cv-print-container section h2 {
            display: flex !important;
            align-items: center !important;
            color: #1e3a8a !important;
            font-weight: 700 !important;
            letter-spacing: 0.3px !important;
            text-transform: none !important;
          }
          
          /* Professional header with beautiful gradient - full width from top */
          .cv-print-container .cv-header {
            position: relative !important;
            margin-left: -12mm !important;
            margin-right: -12mm !important;
            margin-top: 0 !important;
            margin-bottom: 0.5rem !important;
            width: calc(100% + 24mm) !important;
            max-width: none !important;
            padding: 6mm 12mm 0.7rem 12mm !important;
            border-radius: 0 0 1.2rem 1.2rem !important;
            background-image: linear-gradient(135deg, #0f172a 0%, #1e3a8a 20%, #2563eb 65%, #60a5fa 100%) !important;
            box-shadow: 0 12px 30px rgba(15, 23, 42, 0.28) !important;
            border-bottom: 5px solid rgba(15, 23, 42, 0.35) !important;
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
            font-size: 1.6rem !important;
            margin-bottom: 0.1rem !important;
          }
          
          .cv-print-container .cv-header p {
            font-size: 0.85rem !important;
            margin-bottom: 0.25rem !important;
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
            font-size: 0.82rem !important;
            line-height: 1.35 !important;
            color: #334155 !important;
          }
          
          /* Professional body text */
          .cv-print-container .text-sm,
          .cv-print-container .text-xs {
            color: #475569 !important;
          }
          
          /* Professional skill tags - modern pill style */
          .cv-print-container [class*="px-2"] {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            background: #f8fafc !important;
            border: 1px solid #e2e8f0 !important;
            color: #475569 !important;
            border-radius: 0.375rem !important;
            font-weight: 500 !important;
            font-size: 0.8rem !important;
          }
          
          .cv-print-container [class*="py-1"] {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
          }
          
          /* Remove gradient backgrounds from tags */
          .cv-print-container [class*="bg-gradient"] {
            background: #f8fafc !important;
            border: 1px solid #e2e8f0 !important;
          }
          
          /* Professional accent borders - modern rounded style */
          .cv-print-container [class*="border-l-4"] {
            border: none !important;
            border-left: 4px solid #3b82f6 !important;
            padding: 0.4rem 0.6rem !important;
            margin-bottom: 0.4rem !important;
            border-radius: 0.375rem !important;
            background: #ffffff !important;
            box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02) !important;
            position: relative !important;
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            display: block !important;
            overflow: visible !important;
          }
          
          /* Add subtle left accent gradient */
          .cv-print-container [class*="border-l-4"]::before {
            content: none !important;
            display: none !important;
          }
          
          /* Subtle background for items - simplified for print */
          .cv-print-container [class*="border-blue"] {
            background: #ffffff !important;
            border-color: #e2e8f0 !important;
            height: auto !important;
          }
          
          .cv-print-container [class*="border-green"] {
            background: #ffffff !important;
            border-color: #d1fae5 !important;
            height: auto !important;
          }
          
          .cv-print-container [class*="border-purple"] {
            background: #ffffff !important;
            border-color: #e9d5ff !important;
            height: auto !important;
          }
          
          /* Professional profile picture - compact rectangular without border */
          .cv-print-container .cv-header img {
            width: 120px !important;
            height: 155px !important;
            border-radius: 0.5rem !important;
            border: none !important;
            box-shadow: 0 8px 16px rgba(0,0,0,0.25) !important;
            object-fit: cover !important;
            object-position: 50% 35% !important;
          }
          
          /* Reduce gap in grid */
          .cv-print-container .print\:gap-0 {
            gap: 0 !important;
          }

          .cv-print-container .print\:gap-1,
          .cv-print-container .print\:gap-2 {
            gap: 0.1rem !important;
          }

          .cv-print-container .print\:grid-cols-1 {
            grid-template-columns: 2.2fr 1fr !important;
            align-items: start !important;
          }

          .cv-print-container .print\:mb-0 {
            margin-bottom: 0 !important;
          }

          /* Modern card styling for entries with icons */
          .cv-print-container .experience-card,
          .cv-print-container .education-card,
          .cv-print-container .achievement-component,
          .cv-print-container .certificate-component {
            border-radius: 0.6rem !important;
            border: 1.5px solid #e0e9f7 !important;
            border-left: 6px solid #2563eb !important;
            padding: 0.6rem 0.75rem !important;
            background: linear-gradient(135deg, #fbfdff 0%, #f5f9ff 50%, #ffffff 100%) !important;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15), 0 2px 4px rgba(15, 23, 42, 0.08) !important;
            position: relative !important;
            margin-bottom: 0.45rem !important;
          }
          
          /* Color-coded left borders with gradient */
          .cv-print-container .experience-card {
            border-left: 6px solid #10b981 !important;
            background: linear-gradient(135deg, #fbfefb 0%, #f4fdf6 50%, #ffffff 100%) !important;
          }

          .cv-print-container .education-card {
            border-left: 6px solid #a855f7 !important;
            background: linear-gradient(135deg, #fefbff 0%, #faf5ff 50%, #ffffff 100%) !important;
          }
          
          .cv-print-container .certificate-component {
            border-left: 6px solid #f59e0b !important;
            background: linear-gradient(135deg, #fffcf5 0%, #fef9f0 50%, #ffffff 100%) !important;
          }

          .cv-print-container .achievement-component {
            border-left: 6px solid #3b82f6 !important;
          }

          .cv-print-container .experience-card h3,
          .cv-print-container .education-card h3,
          .cv-print-container .achievement-component h3,
          .cv-print-container .certificate-component h4 {
            color: #0f172a !important;
            font-weight: 700 !important;
            display: flex !important;
            align-items: center !important;
          }

          /* Modern skill category boxes */
          .cv-print-container .skill-category {
            display: inline-block !important;
            width: 48% !important;
            margin-right: 2% !important;
            margin-bottom: 0.35rem !important;
            background: linear-gradient(135deg, #f8fbff 0%, #f0f7ff 50%, #ffffff 100%) !important;
            border: 1.5px solid #c7d9f5 !important;
            border-left: 4px solid #3b82f6 !important;
            border-radius: 0.6rem !important;
            padding: 0.5rem 0.6rem !important;
            vertical-align: top !important;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12), 0 2px 4px rgba(15, 23, 42, 0.05) !important;
            position: relative !important;
          }

          .cv-print-container .skill-category:nth-child(2n) {
            margin-right: 0 !important;
          }

          .cv-print-container .skill-category h4 {
            margin-bottom: 0.4rem !important;
            color: #1e40af !important;
            font-weight: 700 !important;
            font-size: 0.82rem !important;
            display: flex !important;
            align-items: center !important;
          }
          
          .cv-print-container .skill-category h4::before {
            content: '▶' !important;
            color: #3b82f6 !important;
            font-size: 0.6rem !important;
            margin-right: 0.35rem !important;
          }

          .cv-print-container .skill-category .flex {
            gap: 0.25rem !important;
          }

          .cv-print-container .skill-category span {
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%) !important;
            color: #1e40af !important;
            border-radius: 999px !important;
            padding: 0.28rem 0.6rem !important;
            border: 1px solid #93c5fd !important;
            font-weight: 600 !important;
            font-size: 0.75rem !important;
            box-shadow: 0 1px 3px rgba(59, 130, 246, 0.15) !important;
          }

          /* Modern language cards with gradient */
          .cv-print-container .language-item {
            border: 1.5px solid #c7d9f5 !important;
            border-left: 4px solid #a855f7 !important;
            border-radius: 0.55rem !important;
            padding: 0.4rem 0.6rem !important;
            background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #ffffff 100%) !important;
            box-shadow: 0 4px 10px rgba(168, 85, 247, 0.12), 0 2px 4px rgba(15, 23, 42, 0.05) !important;
          }

          .cv-print-container .language-item + .language-item {
            margin-top: 0.3rem !important;
          }
          
          .cv-print-container .language-item span:first-child {
            font-weight: 700 !important;
            color: #6b21a8 !important;
          }
          
          .cv-print-container .language-item span:last-child {
            background: linear-gradient(135deg, #e9d5ff, #d8b4fe) !important;
            color: #6b21a8 !important;
            padding: 0.2rem 0.5rem !important;
            border-radius: 999px !important;
            font-size: 0.7rem !important;
            font-weight: 600 !important;
            border: 1px solid #c084fc !important;
          }

          /* Colorful hobby badges */
          .cv-print-container .hobby-item {
            display: inline-flex !important;
            align-items: center !important;
            gap: 0.45rem !important;
            width: 48% !important;
            margin-right: 2% !important;
            margin-bottom: 0.3rem !important;
            border: 1.5px solid #d1d5db !important;
            border-left: 4px solid #f59e0b !important;
            border-radius: 0.55rem !important;
            padding: 0.4rem 0.6rem !important;
            background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #ffffff 100%) !important;
            box-shadow: 0 3px 10px rgba(245, 158, 11, 0.15), 0 1px 3px rgba(15, 23, 42, 0.05) !important;
          }

          .cv-print-container .hobby-item:nth-child(2n) {
            margin-right: 0 !important;
          }

          .cv-print-container .hobby-item .text-2xl {
            font-size: 1.1rem !important;
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1)) !important;
          }
          
          .cv-print-container .hobby-item h4 {
            color: #92400e !important;
            font-weight: 700 !important;
          }
          
          .cv-print-container .hobby-item p {
            color: #b45309 !important;
            font-size: 0.7rem !important;
          }
 
          /* Compact hobby items */
          .cv-print-container [class*="flex items-center gap"] {
            gap: 0.3rem !important;
          }
          
          /* Smaller icons/emojis */
          .cv-print-container .text-2xl {
            font-size: 0.95rem !important;
          }
          
          /* Show and style icons in print for professional look */
          .cv-print-container section svg {
            display: inline-block !important;
            color: #3b82f6 !important;
            width: 18px !important;
            height: 18px !important;
            margin-right: 0.5rem !important;
          }
          
          /* Hide award icon in certificates when printing */
          .cv-print-container .certificate-component svg,
          .cv-print-container .certificate-component .print\:hidden {
            display: none !important;
            visibility: hidden !important;
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
            margin-top: 0.3rem !important;
          }
          
          /* Ensure consistent text color */
          .cv-print-container * {
            color: inherit !important;
          }
          
          /* Fix for advanced mode content */
          .cv-print-container .space-y-4,
          .cv-print-container .space-y-6 {
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
          }
          
          /* Fix for all divs inside cv-print-container */
          .cv-print-container div {
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            overflow: visible !important;
          }
          
          /* Ensure sections don't cause infinite pages */
          .cv-print-container section,
          .cv-print-container section > div {
            page-break-inside: auto !important;
            height: auto !important;
            min-height: 0 !important;
          }
          
          /* Fix flex containers */
          .cv-print-container .flex {
            height: auto !important;
            min-height: 0 !important;
          }

          /* Fix all p and span elements */
          .cv-print-container p,
          .cv-print-container span,
          .cv-print-container h1,
          .cv-print-container h2,
          .cv-print-container h3,
          .cv-print-container h4 {
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
          }

          /* Force flex to block inside problematic components */
          .cv-print-container .achievement-component .flex,
          .cv-print-container .certificate-component .flex {
            display: block !important;
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
      <div className={compact ? 'space-y-3 print:space-y-1' : 'space-y-4 print:space-y-1'}>
        {children}
      </div>
    </section>
  );
}

function Achievement({ title, period, subtitle, description }) {
  return (
    <div className="achievement-component border-l-4 border-blue-500 pl-4 print:pl-3">
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
    <div className="experience-card border-l-4 border-green-500 pl-4 print:pl-3">
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
    <div className="education-card border-l-4 border-purple-500 pl-4 print:pl-3">
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
    <div className="language-item flex justify-between items-center">
      <span className="font-medium text-slate-900 dark:text-white">{language}</span>
      <span className="text-sm text-slate-600 dark:text-slate-400">{level}</span>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category mb-3">
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
    <div className="certificate-component text-sm border-l-4 border-purple-500 print:border-blue-500 pl-4 print:pl-3 py-2 print:py-1 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 print:from-blue-50 print:to-transparent rounded-r-lg print:rounded-r-md">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2">
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
    <div className="hobby-item flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="font-medium text-slate-900 dark:text-white text-sm">{title}</h4>
        <p className="text-xs text-slate-600 dark:text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}
