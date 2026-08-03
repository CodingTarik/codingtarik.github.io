import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, Briefcase, Award, Languages, Cpu, Heart,
  Code, Trophy, Terminal, Shield, Music, Hand,
  Flag, Cloud, Database, Wrench, Zap,
  MapPin, UserRound, Sparkles
} from 'lucide-react';
import profileImage from '../../../assets/application.jpeg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon size={16} />
      </span>
      <h2 className="text-lg font-bold tracking-tight text-text">{title}</h2>
      <div className="h-px flex-1 bg-border ml-2" />
    </div>
  );
}

function Card({ children, className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function TimelineItem({ period, title, org, detail, last }) {
  return (
    <div className={`relative pl-6 pb-6 ${last ? '' : 'border-l border-border'}`}>
      <span className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-primary" />
      <span className="text-[11px] font-semibold text-muted uppercase tracking-wide">{period}</span>
      <h3 className="text-[15px] font-bold leading-tight text-text mt-0.5">
        {title} {org && <span className="font-medium text-muted">· {org}</span>}
      </h3>
      {detail && <p className="text-[13px] text-muted mt-1 leading-relaxed">{detail}</p>}
    </div>
  );
}

function SkillGroup({ icon: Icon, title, skills }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2.5">
        <span className="w-6 h-6 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Icon size={13} />
        </span>
        <h3 className="text-[12px] font-bold uppercase tracking-wider text-muted">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {skills.map((s) => (
          <span
            key={s}
            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-background border border-border text-text transition-colors hover:border-primary/40 hover:text-primary cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function CertCard({ icon: Icon, title, issuer, period }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/30"
    >
      <span className="w-9 h-9 rounded-lg bg-card border border-border text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
        <Icon size={16} />
      </span>
      <div className="min-w-0">
        <h3 className="text-[13px] font-bold leading-snug text-text">{title}</h3>
        <p className="text-[11px] text-muted mt-0.5">{issuer} · {period}</p>
      </div>
    </motion.div>
  );
}

export default function CVPage() {
  return (
    <div className="relative min-h-screen">
      {/* Soft background tint */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-primary/[0.04] via-transparent to-secondary/[0.06]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-6"
      >

        {/* ─── Hero ─── */}
        <motion.section
          variants={fadeUp}
          className="bg-card border border-border rounded-3xl shadow-lg shadow-primary/5 overflow-hidden"
        >
          <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
          <div className="flex flex-col sm:flex-row items-center gap-8 p-6 sm:p-8">
            {/* Rectangular image */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
              className="shrink-0"
            >
              <img
                src={profileImage}
                alt="Tarik Azzouzi"
                className="w-40 h-48 sm:w-44 sm:h-52 object-cover rounded-2xl border border-border shadow-lg"
              />
            </motion.div>

            {/* Info */}
            <div className="text-center sm:text-left flex-1 w-full">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Lebenslauf</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text leading-tight">
                Tarik Azzouzi
              </h1>
              <p className="text-base font-medium text-muted mt-1">
                Full-Stack Developer · M.Sc. Computer Science (TU Darmstadt)
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 mt-4 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" /> Darmstadt, Deutschland
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-primary" /> Fachrichtung: Informatik
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Languages size={14} className="text-primary" /> DE (Muttersprache) · EN (C1)
                </span>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-5">
                {['AI & RAG', 'Cybersecurity', 'Full-Stack', 'LLMs / Agents'].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-background text-text"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── Profil ─── */}
        <Card>
          <SectionTitle icon={UserRound} title="Profil" />
          <p className="text-sm text-muted leading-relaxed">
            Masterstudent der Informatik an der TU Darmstadt mit Schwerpunkt Software Engineering,
            Künstliche Intelligenz und Cybersecurity. Praktische Erfahrung in der Konzeption und
            Entwicklung KI-gestützter Systeme, insbesondere Retrieval-Augmented Generation (RAG)
            und AI-Agenten. Mehrjährige Freelance-Erfahrung in der Softwareentwicklung sowie
            internationale Studienaufenthalte (Erasmus+, Gaststudium in Finnland und Passau).
          </p>
        </Card>

        {/* ─── Berufserfahrung ─── */}
        <Card>
          <SectionTitle icon={Briefcase} title="Berufserfahrung" />
          <TimelineItem
            period="Nov 2024 – Mär 2026"
            title="AI Full Stack Developer"
            org="Genow.ai · Teilzeit · Darmstadt (Hybrid)"
            detail="Entwicklung und Betreuung skalierbarer RAG-Plattformen für Unternehmenskunden. Full-Stack-Entwicklung mit Vue.js und Python mit Fokus auf KI-Agenten-Orchestrierung, Integration von LangChain-Pipelines und Deployment auf Google Cloud Platform."
          />
          <TimelineItem
            period="Aug 2019 – Dez 2023"
            title="Freiberuflicher Software-Entwickler"
            org="Upwork / Fiverr · Remote"
            detail="Entwicklung maßgeschneiderter Softwarelösungen für internationale Kunden. Desktop-Anwendungen (C#/WPF) sowie Backends in Python, Java und C#."
          />
          <TimelineItem
            last
            period="Juni 2019"
            title="Praktikum · IT-Abteilung"
            org="doIT solutions GmbH · Gelnhausen"
            detail="Einblicke in IT-Betrieb und den Software-Entwicklungszyklus. Arbeit mit VirtualBox und Active Directory."
          />
        </Card>

        {/* ─── Ausbildung ─── */}
        <Card>
          <SectionTitle icon={GraduationCap} title="Ausbildung" />
          <TimelineItem
            period="Apr 2025 – Sep 2026"
            title="M.Sc. Computer Science"
            org="TU Darmstadt"
            detail="Schwerpunkt Software Engineering, KI und Cybersecurity. Masterarbeit: Design und Implementierung modularer Plugin-Frameworks für RAG auf Basis des Model Context Protocol."
          />
          <TimelineItem
            period="Sep 2025 – Jan 2026"
            title="Erasmus+ Austauschsemester"
            org="University of Latvia"
          />
          <TimelineItem
            period="Okt 2021 – Mär 2025"
            title="B.Sc. Computer Science"
            org="TU Darmstadt"
            detail="Bachelorarbeit: Sichere Hybrid-RAG-Anwendungen in Unternehmen."
          />
          <TimelineItem
            period="Jan 2024 – heute"
            title="Gaststudium (Open University)"
            org="University of Helsinki & Metropolia UAS, Finnland"
            detail="Module in Software Engineering, System Engineering, Webentwicklung und Cybersecurity."
          />
          <TimelineItem
            period="Apr 2024 – Sep 2024"
            title="Gaststudent"
            org="Universität Passau"
            detail="Einführung in die Android-App-Entwicklung."
          />
          <TimelineItem
            period="2018 – 2021"
            title="Abitur · Berufliches Gymnasium"
            org="Berufliche Schulen des Main-Kinzig-Kreises, Gelnhausen"
            detail="Schwerpunkt Praktische Informatik."
          />
          <TimelineItem
            last
            period="2012 – 2018"
            title="Realschulabschluss"
            org="Kreisrealschule Gelnhausen"
          />
        </Card>

        {/* ─── Fähigkeiten ─── */}
        <Card>
          <SectionTitle icon={Cpu} title="Fähigkeiten" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            <SkillGroup icon={Code} title="Programmierung" skills={['C#', 'Python', 'JavaScript', 'TypeScript', 'Java']} />
            <SkillGroup icon={Wrench} title="Frameworks" skills={['Vue.js', 'React', 'Node.js', 'Express', 'LangChain']} />
            <SkillGroup icon={Zap} title="KI & Daten" skills={['RAG Systems', 'LLMs', 'scikit-learn', 'AI Agents']} />
            <SkillGroup icon={Cloud} title="DevOps & Cloud" skills={['Docker', 'Kubernetes', 'GCP', 'Git', 'CI/CD', 'Terraform']} />
            <SkillGroup icon={Database} title="Datenbanken" skills={['PostgreSQL', 'MongoDB', 'SQL']} />
            <SkillGroup icon={Terminal} title="Cybersecurity" skills={['Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'OWASP', 'OpenVAS', 'Snort']} />
          </div>
        </Card>

        {/* ─── Zertifikate & Auszeichnungen ─── */}
        <Card>
          <SectionTitle icon={Trophy} title="Zertifikate & Auszeichnungen" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <CertCard icon={Award} title="Deutschlandstipendium" issuer="TU Darmstadt" period="2021/22 · 2023/24 · 2025/26" />
            <CertCard icon={Shield} title="Google Cybersecurity Certificate" issuer="Google" period="2023" />
            <CertCard icon={Shield} title="Ethical Hacking" issuer="Cisco" period="2025" />
            <CertCard icon={Terminal} title="Endpoint Security" issuer="Cisco" period="2025" />
            <CertCard icon={Flag} title="Cyber Apocalypse CTF 2024" issuer="HackTheBox" period="2024" />
            <CertCard icon={Cpu} title="Elements of AI – Intro to AI" issuer="University of Helsinki" period="2024" />
            <CertCard icon={Code} title="Get In IT – Coding Challenge" issuer="Get In / BWI" period="2021" />
            <CertCard icon={Trophy} title="Bundeswettbewerb Informatik · 2. Runde" issuer="BWINF" period="2020" />
          </div>
        </Card>

        {/* ─── Engagement ─── */}
        <Card>
          <SectionTitle icon={Heart} title="Engagement" />
          <TimelineItem
            period="2020 – 2024"
            title="Tierverwaltungssystem · Tikki Hywood Foundation"
            org="Ehrenamtliche Softwareentwicklung"
            detail="Entwicklung eines Verwaltungssystems für eine Tierschutzorganisation mit Schwerpunkt Rettung und Rehabilitation, inklusive zentralisierter Datensynchronisation."
          />
          <TimelineItem
            last
            period="2021 – 2024"
            title="Cybersecurity & CTF-Wettbewerbe"
            org="TUD.dll (TU Darmstadt) & CCC „Wizards of Dos“"
            detail="Teilnahme an CTF-Wettbewerben im Cybersecurity-Umfeld der TU Darmstadt und des Chaos Computer Clubs."
          />
        </Card>

        {/* ─── Sprachen & Interessen ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card>
            <SectionTitle icon={Languages} title="Sprachen" />
            <div className="space-y-4">
              {[
                { lang: 'Deutsch', level: 'Muttersprache', pct: 100 },
                { lang: 'Englisch', level: 'Fließend (C1)', pct: 88 },
              ].map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-bold text-text">{l.lang}</span>
                    <span className="text-xs text-muted">{l.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-background overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <SectionTitle icon={Heart} title="Interessen" />
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { icon: Music, t: 'Klavier', s: 'Musik' },
                { icon: Hand, t: 'Handball', s: 'Sport' },
                { icon: Code, t: 'Programmieren', s: 'Software' },
                { icon: Flag, t: 'Capture The Flag', s: 'Cybersecurity' },
              ].map((h) => (
                <div
                  key={h.t}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-3 py-2.5"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <h.icon size={16} />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[13px] font-bold text-text">{h.t}</div>
                    <div className="text-[11px] text-muted">{h.s}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 px-1 text-xs text-muted">
              <Sparkles size={14} className="text-primary" />
              Offen für neue Herausforderungen in Forschung und Praxis.
            </div>
          </Card>
        </div>

      </motion.div>
    </div>
  );
}
