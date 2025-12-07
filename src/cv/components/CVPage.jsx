import React, { useState, useRef } from 'react';
import { 
  Printer, Share2, Copy, Globe, Award, Briefcase, GraduationCap, 
  Code, Heart, Languages, MapPin, Mail, Phone, Calendar, ExternalLink,
  Check, X, Download, Settings, Github, Linkedin, FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function CVPage() {
  const [language, setLanguage] = useState('en'); // 'en' or 'de'
  const [advancedMode, setAdvancedMode] = useState(false);
  const [showPrintDialog, setShowPrintDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showCoverLetterDialog, setShowCoverLetterDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const cvRef = useRef(null);
  const coverLetterRef = useRef(null);

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

  // Cover Letter State
  const [coverLetterData, setCoverLetterData] = useState({
    recipientName: '',
    recipientTitle: '',
    company: '',
    companyAddress: '',
    date: new Date().toISOString().split('T')[0],
    subject: '',
    content: ''
  });

  const translations = {
    en: {
      title: 'Curriculum Vitae',
      print: 'Print',
      share: 'Share',
      copyText: 'Copy as Text',
      advanced: 'Advanced Mode',
      printForApplication: 'Print for Application',
      createCoverLetter: 'Create Cover Letter',
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
      createCoverLetter: 'Anschreiben erstellen',
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

  const formatDate = (dateString, lang) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Return as-is if invalid
    
    if (lang === 'de') {
      // German format: DD.MM.YYYY
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    } else {
      // English format: MMM DD, YYYY
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
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

  const [isPrintingCoverLetter, setIsPrintingCoverLetter] = useState(false);

  const handlePrintCoverLetter = () => {
    setIsPrintingCoverLetter(true);
    setShowCoverLetterDialog(false);
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        setIsPrintingCoverLetter(false);
      }, 500);
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
              onClick={() => setShowCoverLetterDialog(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              title={t.createCoverLetter}
            >
              <FileText size={18} />
              <span className="hidden sm:inline text-sm font-medium">{t.createCoverLetter}</span>
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
      <div ref={cvRef} className={`cv-print-container max-w-5xl mx-auto p-4 md:p-8 print:p-0 ${isPrintingCoverLetter ? 'print:hidden' : ''}`}>
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
                src="/pictures/cv/cv_profile_picture.jpeg" 
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
                        {printData.address}
                      </span>
                    </div>
                  )}
                  {printData.birthdate && (
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="flex-shrink-0" />
                      <span>
                        <span className="font-medium">{language === 'en' ? 'Born:' : 'Geb.:'}</span> {formatDate(printData.birthdate, language)}
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
                grade={language === 'en' ? 'Current Grade: 1.0' : 'Aktueller Schnitt: 1.0'}
                description={language === 'en'
                  ? 'Focus: Software Engineering, AI, Cybersecurity. Thesis: "Design and Implementation of a Modular Plugin Framework for Retrieval-Augmented Generation using Model Context Protocol" - Grade: 1.0'
                  : 'Schwerpunkt: Software Engineering, KI, Cybersecurity. Thesis: "Design und Implementierung eines modularen Plugin-Frameworks für Retrieval-Augmented Generation mittels Model Context Protocol" - Note: 1.0'}
              />

              <Education
                degree={language === 'en' ? 'Erasmus+ Exchange' : 'Erasmus+ Austausch'}
                institution="University of Latvia"
                period="Sept 2025 - Jan 2026"
              />

              <Education
                degree={language === 'en' ? 'Open University Student' : 'Gaststudent'}
                institution={language === 'en' ? 'University of Helsinki & Metropolia University of Applied Sciences, Finland' : 'Universität Helsinki & Metropolia University of Applied Sciences, Finnland'}
                period="Jan 2024 - Oct 2025"
                description={language === 'en'
                  ? 'Completed diverse CS courses: software engineering, system engineering, web development & cyber security.'
                  : 'Abschluss diverser Informatik-Kurse: Software Engineering, System Engineering, Webentwicklung & Cyber Security.'}
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
                title={language === 'en' ? 'Animal Manager - Tikki Hywood Foundation' : 'Tierverwaltung - Tikki Hywood Foundation'}
                period="2020 - 2024"
                subtitle={language === 'en' ? 'Volunteer Developer (Wildlife Conservation NGO)' : 'Ehrenamtlicher Entwickler (Tierschutzorganisation)'}
                description={language === 'en'
                  ? 'Built custom animal management system for wildlife conservation organization focused on pangolin rescue and rehabilitation with centralized data synchronization.'
                  : 'Entwicklung eines Tierverwaltungssystems für Tierschutzorganisation mit Fokus auf Schuppentier-Rettung und -Rehabilitation mit zentralisierter Datensynchronisation.'}
              />

              <Achievement
                title={language === 'en' ? 'Cybersecurity & CTF Competitions' : 'Cybersecurity & CTF-Wettbewerbe'}
                period="2021 - 2024"
                subtitle={language === 'en' ? 'TUD.dll Hacking Team & CCC Wizards of Dos' : 'TUD.dll Hacking Team & CCC Wizards of Dos'}
                description={advancedMode 
                  ? (language === 'en'
                    ? 'Active participation in TU Darmstadt\'s cybersecurity team (TUD.dll) and the "Wizards of Dos" team from Chaos Computer Club Darmstadt. Participating in CTF competitions, solving security challenges and developing offensive security skills.'
                    : 'Aktive Teilnahme im Cybersecurity-Team der TU Darmstadt (TUD.dll) und im "Wizards of Dos"-Team vom Chaos Computer Club Darmstadt. Teilnahme an CTF-Wettbewerben, Lösen von Sicherheits-Challenges und Entwicklung von Offensive-Security-Fähigkeiten.')
                  : (language === 'en'
                    ? 'Active participation in TU Darmstadt\'s cybersecurity team (TUD.dll) and the "Wizards of Dos" team from Chaos Computer Club Darmstadt. Participating in CTF competitions.'
                    : 'Aktive Teilnahme im Cybersecurity-Team der TU Darmstadt (TUD.dll) und im "Wizards of Dos"-Team vom Chaos Computer Club Darmstadt. Teilnahme an CTF-Wettbewerben.')
                }
              />

              {advancedMode && (
                <>

                  <Achievement
                    title={language === 'en' ? 'Volunteer Firefighter - Youth Fire Brigade' : 'Jugendfeuerwehr Eidengesäß'}
                    period="2014 - 2021"
                    subtitle={language === 'en' ? 'Community Service' : 'Ehrenamt'}
                    description={language === 'en'
                      ? 'Active member of the youth fire brigade, developing teamwork and emergency response skills.'
                      : 'Aktives Mitglied der Jugendfeuerwehr mit Entwicklung von Teamfähigkeit und Einsatzbereitschaft.'}
                  />

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
                year="2021, 2023, 2025"
                description={language === 'en' ? 'Germany Scholarship - Awarded three times' : 'Deutschland-Stipendium - 3x vergeben'}
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
                skills={['Docker', 'Kubernetes', 'GCP', 'Git', 'CI/CD', 'Terraform', 'Bash']} 
              />
              <SkillCategory 
                title={language === 'en' ? 'Databases & Tools' : 'Datenbanken & Tools'} 
                skills={['PostgreSQL', 'MongoDB', 'SQL', 'Postman', 'VS Code']} 
              />
              <SkillCategory 
                title="Cybersecurity" 
                skills={['Kali Linux', 'Metasploit', 'Burp Suite', 'Snort', 'Wireshark', 'OWASP', 'OpenVAS', 'Nmap']} 
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
              <Hobby icon="💻" title={language === 'en' ? 'Programming' : 'Programmieren'} subtitle={language === 'en' ? 'Interest' : 'Interesse'} />
              <Hobby icon="🚩" title="Capture The Flag" subtitle="Cybersecurity" />
            </Section>

            {/* CV Info Box - Print Order 8 - Only visible in print */}
            <div className="hidden print:block print:order-8 mt-3 p-2.5 bg-gradient-to-r from-blue-50 to-sky-50 border-l-4 border-blue-500 rounded-lg">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 mt-0.5">
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
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
                      ? 'This CV was created with a custom web application, therefore display issues may occur in some PDF readers. Chromium-based browsers work well.'
                      : 'Dieser Lebenslauf wurde mit einer selbst entwickelten Webanwendung erstellt, daher kann es zu Anzeigeproblemen in manchen PDF-Readern geben. Chromium-basierte Browser funktionieren gut.'}
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

      {/* Cover Letter Dialog */}
      <AnimatePresence>
        {showCoverLetterDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowCoverLetterDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-4xl w-full p-6 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">
                  {language === 'en' ? 'Create Cover Letter' : 'Anschreiben erstellen'}
                </h3>
                <button
                  onClick={() => setShowCoverLetterDialog(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Left Column - Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? 'Recipient Name' : 'Empfängername'}
                    </label>
                    <input
                      type="text"
                      value={coverLetterData.recipientName}
                      onChange={(e) => setCoverLetterData({...coverLetterData, recipientName: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                      placeholder={language === 'en' ? 'e.g., John Doe' : 'z.B. Max Mustermann'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? 'Recipient Title' : 'Titel des Empfängers'}
                    </label>
                    <input
                      type="text"
                      value={coverLetterData.recipientTitle}
                      onChange={(e) => setCoverLetterData({...coverLetterData, recipientTitle: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                      placeholder={language === 'en' ? 'e.g., HR Manager' : 'z.B. Personalmanager'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? 'Company' : 'Unternehmen'}
                    </label>
                    <input
                      type="text"
                      value={coverLetterData.company}
                      onChange={(e) => setCoverLetterData({...coverLetterData, company: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                      placeholder={language === 'en' ? 'Company Name' : 'Firmenname'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? 'Company Address' : 'Firmenadresse'}
                    </label>
                    <textarea
                      value={coverLetterData.companyAddress}
                      onChange={(e) => setCoverLetterData({...coverLetterData, companyAddress: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                      rows="3"
                      placeholder={language === 'en' ? 'Street, City, ZIP' : 'Straße, Stadt, PLZ'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? 'Date' : 'Datum'}
                    </label>
                    <input
                      type="date"
                      value={coverLetterData.date}
                      onChange={(e) => setCoverLetterData({...coverLetterData, date: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? 'Subject' : 'Betreff'}
                    </label>
                    <input
                      type="text"
                      value={coverLetterData.subject}
                      onChange={(e) => setCoverLetterData({...coverLetterData, subject: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700"
                      placeholder={language === 'en' ? 'e.g., Application for Software Developer Position' : 'z.B. Bewerbung als Software-Entwickler'}
                    />
                  </div>
                </div>

                {/* Right Column - Preview */}
                <div className="lg:sticky lg:top-4">
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                    <h4 className="text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
                      {language === 'en' ? 'Preview' : 'Vorschau'}
                    </h4>
                    <div className="bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 p-6 max-h-[600px] overflow-y-auto shadow-inner">
                      <CoverLetterPreview data={coverLetterData} language={language} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cover Letter Content */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Cover Letter Content (Markdown supported)' : 'Anschreiben Inhalt (Markdown unterstützt)'}
                </label>
                <textarea
                  value={coverLetterData.content}
                  onChange={(e) => setCoverLetterData({...coverLetterData, content: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 font-mono text-sm"
                  rows="10"
                  placeholder={language === 'en' 
                    ? 'Write your cover letter here. Markdown formatting is supported.\n\nExample:\n\nDear Mr./Ms. [Name],\n\n**Introduction**\n\nI am writing to express my interest in...'
                    : 'Schreiben Sie Ihr Anschreiben hier. Markdown-Formatierung wird unterstützt.\n\nBeispiel:\n\nSehr geehrte/r [Name],\n\n**Einleitung**\n\nich bewerbe mich um...'}
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {language === 'en' 
                    ? 'Markdown syntax: **bold**, *italic*, lists, etc.'
                    : 'Markdown-Syntax: **fett**, *kursiv*, Listen, etc.'}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowCoverLetterDialog(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  {language === 'en' ? 'Cancel' : 'Abbrechen'}
                </button>
                <button
                  onClick={handlePrintCoverLetter}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {language === 'en' ? 'Print Cover Letter' : 'Anschreiben drucken'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cover Letter Print View */}
      {coverLetterData.content && (
        <div 
          ref={coverLetterRef} 
          className={`cover-letter-print-container max-w-5xl mx-auto p-4 md:p-8 print:p-0 ${
            isPrintingCoverLetter ? 'print:block' : 'hidden print:hidden'
          }`}
        >
          <CoverLetterPreview data={coverLetterData} language={language} />
        </div>
      )}

      {/* Print Styles */}
      <style>{`
        @media print {
          /* Page Setup - no top margin for blue header */
          @page {
            size: A4;
            margin: 0mm 0mm 0mm 0mm;
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
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }

          /* CV Container - clean professional layout with side margins */
          .cv-print-container {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 12mm 0 12mm !important;
            padding-bottom: 0 !important;
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

          /* Elegant section styling */
          .cv-print-container section {
            padding: 0.45rem 0.65rem !important;
            margin-bottom: 0.45rem !important;
            border-radius: 0.55rem !important;
            background: linear-gradient(180deg, #ffffff 0%, #f6f9ff 100%) !important;
            border: 1px solid #d8e3f8 !important;
            box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08) !important;
          }

          /* Section headers with accent line - more elegant */
          .cv-print-container section > div:first-child {
            border-bottom: 1px solid #cbd5f5 !important;
            padding-bottom: 0.35rem !important;
            margin-bottom: 0.45rem !important;
            position: relative !important;
          }

          /* Add accent underline to section headers */
          .cv-print-container section > div:first-child::after {
            content: '' !important;
            position: absolute !important;
            bottom: -2px !important;
            left: 0 !important;
            width: 72px !important;
            height: 2px !important;
            background: linear-gradient(to right, #3b82f6, #60a5fa) !important;
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

          /* Card styling for entries */
          .cv-print-container .experience-card,
          .cv-print-container .education-card,
          .cv-print-container .achievement-component,
          .cv-print-container .certificate-component {
            border-radius: 0.5rem !important;
            border: 1px solid #dbe4f6 !important;
            border-left: 5px solid #2563eb !important;
            padding: 0.55rem 0.7rem !important;
            background: linear-gradient(180deg, #f7faff 0%, #ffffff 90%) !important;
            box-shadow: 0 6px 16px rgba(30, 64, 175, 0.12) !important;
          }

          .cv-print-container .experience-card {
            border-left-color: #16a34a !important;
          }

          .cv-print-container .education-card,
          .cv-print-container .certificate-component {
            border-left-color: #8b5cf6 !important;
          }

          .cv-print-container .certificate-component {
            background: linear-gradient(180deg, #f9f5ff 0%, #ffffff 90%) !important;
          }

          .cv-print-container .achievement-component {
            border-left-color: #2563eb !important;
          }

          .cv-print-container .experience-card h3,
          .cv-print-container .education-card h3,
          .cv-print-container .achievement-component h3,
          .cv-print-container .certificate-component h4 {
            color: #0f172a !important;
          }

          /* Skill category layout */
          .cv-print-container .skill-category {
            display: inline-block !important;
            width: 48% !important;
            margin-right: 2% !important;
            margin-bottom: 0.25rem !important;
            background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%) !important;
            border: 1px solid #dbe4f6 !important;
            border-radius: 0.5rem !important;
            padding: 0.45rem 0.55rem !important;
            vertical-align: top !important;
            box-shadow: 0 4px 10px rgba(15, 23, 42, 0.06) !important;
          }

          .cv-print-container .skill-category:nth-child(2n) {
            margin-right: 0 !important;
          }

          .cv-print-container .skill-category h4 {
            margin-bottom: 0.35rem !important;
            color: #1e3a8a !important;
          }

          .cv-print-container .skill-category .flex {
            gap: 0.25rem !important;
          }

          .cv-print-container .skill-category span {
            background: #e0e7ff !important;
            color: #1e3a8a !important;
            border-radius: 999px !important;
            padding: 0.25rem 0.55rem !important;
            border: none !important;
            font-weight: 600 !important;
          }

          /* Language cards */
          .cv-print-container .language-item {
            border: 1px solid #dbe4f6 !important;
            border-radius: 0.45rem !important;
            padding: 0.35rem 0.55rem !important;
            background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%) !important;
            box-shadow: 0 3px 8px rgba(15, 23, 42, 0.05) !important;
          }

          .cv-print-container .language-item + .language-item {
            margin-top: 0.2rem !important;
          }

          /* Hobby badges */
          .cv-print-container .hobby-item {
            display: inline-flex !important;
            align-items: center !important;
            gap: 0.5rem !important;
            width: 48% !important;
            margin-right: 2% !important;
            margin-bottom: 0.25rem !important;
            border: 1px solid #e2e8f0 !important;
            border-radius: 0.5rem !important;
            padding: 0.4rem 0.55rem !important;
            background: #ffffff !important;
            box-shadow: 0 3px 8px rgba(15, 23, 42, 0.04) !important;
          }

          .cv-print-container .hobby-item:nth-child(2n) {
            margin-right: 0 !important;
          }

          .cv-print-container .hobby-item .text-2xl {
            font-size: 0.95rem !important;
          }
 
          /* Compact hobby items */
          .cv-print-container [class*="flex items-center gap"] {
            gap: 0.3rem !important;
          }
          
          /* Smaller icons/emojis */
          .cv-print-container .text-2xl {
            font-size: 0.95rem !important;
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

          /* Cover Letter Print Styles */
          .cover-letter-print-container {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 12mm 12mm 12mm 12mm !important;
            background: white !important;
          }

          /* Hide CV when printing cover letter - handled by conditional class */

          /* Cover Letter Content Styling */
          .cover-letter-content {
            border-left: 4px solid #3b82f6 !important;
            padding-left: 8mm !important;
            font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif !important;
            color: #334155 !important;
            line-height: 1.6 !important;
          }

          .cover-letter-content > div {
            margin-bottom: 0.5rem !important;
          }

          .cover-letter-body {
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
            color: #334155 !important;
          }

          .cover-letter-body p {
            margin-bottom: 0.75rem !important;
            text-align: justify !important;
          }

          .cover-letter-body strong {
            font-weight: 600 !important;
            color: #1e3a8a !important;
          }

          .cover-letter-body ul,
          .cover-letter-body ol {
            margin-left: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }

          .cover-letter-body li {
            margin-bottom: 0.25rem !important;
          }

          .cover-letter-body h1,
          .cover-letter-body h2,
          .cover-letter-body h3 {
            margin-top: 1rem !important;
            margin-bottom: 0.5rem !important;
            color: #1e3a8a !important;
            font-weight: 600 !important;
          }

          /* Hide cover letter dialog in print */
          .cover-letter-print-container:not(.hidden) {
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
    <div className="hobby-item flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="font-medium text-slate-900 dark:text-white text-sm">{title}</h4>
        <p className="text-xs text-slate-600 dark:text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

function CoverLetterPreview({ data, language }) {
  const formatDate = (dateString, lang) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    if (lang === 'de') {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    } else {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  };

  return (
    <div className="cover-letter-content border-l-4 border-blue-500 pl-6 print:pl-8 space-y-4 print:space-y-4">
      {/* Sender Address */}
      <div className="text-sm print:text-xs text-slate-600 dark:text-slate-400">
        <div className="font-semibold text-slate-900 dark:text-white mb-1">Tarik Azzouzi</div>
        <div>{language === 'en' ? 'Working Student Software Developer' : 'Werkstudent Software-Entwickler'}</div>
        <div>M.Sc. Computer Science Student</div>
        <div className="mt-2">
          <div>codingtarik.github.io</div>
          <div>github.com/codingtarik</div>
          <div>linkedin.com/in/tarik-azzouzi</div>
        </div>
      </div>

      {/* Date */}
      {data.date && (
        <div className="text-sm print:text-xs text-slate-600 dark:text-slate-400">
          {formatDate(data.date, language)}
        </div>
      )}

      {/* Recipient */}
      {(data.recipientName || data.company) && (
        <div className="text-sm print:text-xs text-slate-600 dark:text-slate-400 space-y-1">
          {data.recipientName && (
            <div>
              {data.recipientTitle ? `${data.recipientTitle} ` : ''}
              {data.recipientName}
            </div>
          )}
          {data.company && <div className="font-semibold">{data.company}</div>}
          {data.companyAddress && (
            <div className="whitespace-pre-line">{data.companyAddress}</div>
          )}
        </div>
      )}

      {/* Subject */}
      {data.subject && (
        <div className="text-sm print:text-xs font-semibold text-slate-900 dark:text-white">
          {language === 'en' ? 'Subject:' : 'Betreff:'} {data.subject}
        </div>
      )}

      {/* Greeting */}
      <div className="text-sm print:text-xs text-slate-700 dark:text-slate-300">
        {data.recipientName 
          ? (language === 'en' 
              ? `Dear ${data.recipientTitle ? data.recipientTitle + ' ' : ''}${data.recipientName},`
              : `Sehr geehrte${data.recipientTitle ? 'r ' + data.recipientTitle : 'r'} ${data.recipientName},`)
          : (language === 'en' ? 'Dear Sir or Madam,' : 'Sehr geehrte Damen und Herren,')}
      </div>

      {/* Content */}
      {data.content ? (
        <div className="cover-letter-body text-sm print:text-xs text-slate-700 dark:text-slate-300 leading-relaxed print:leading-relaxed prose prose-sm max-w-none dark:prose-invert">
          <ReactMarkdown
            components={{
              p: ({node, ...props}) => <p className="mb-3 print:mb-3" {...props} />,
              strong: ({node, ...props}) => <strong className="font-semibold text-slate-900 dark:text-white" {...props} />,
              em: ({node, ...props}) => <em className="italic" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-3 print:mb-3 space-y-1" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-3 print:mb-3 space-y-1" {...props} />,
              li: ({node, ...props}) => <li className="ml-2" {...props} />,
              h1: ({node, ...props}) => <h1 className="text-lg font-bold mb-2 print:mb-2 text-slate-900 dark:text-white" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-base font-bold mb-2 print:mb-1.5 text-slate-900 dark:text-white" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-sm font-bold mb-2 print:mb-1.5 text-slate-900 dark:text-white" {...props} />,
            }}
          >
            {data.content}
          </ReactMarkdown>
        </div>
      ) : (
        <div className="text-sm text-slate-400 italic">
          {language === 'en' ? 'Start writing your cover letter...' : 'Beginnen Sie mit dem Schreiben Ihres Anschreibens...'}
        </div>
      )}

      {/* Closing */}
      <div className="text-sm print:text-xs text-slate-700 dark:text-slate-300 space-y-2">
        <div>{language === 'en' ? 'Sincerely,' : 'Mit freundlichen Grüßen,'}</div>
        <div className="mt-4 print:mt-3">Tarik Azzouzi</div>
      </div>
    </div>
  );
}
