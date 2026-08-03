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

function CertCard({ icon: Icon, title, issuer, period, detail }) {
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
        {detail && <p className="text-[11px] text-muted mt-1 leading-relaxed">{detail}</p>}
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
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Curriculum Vitae</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text leading-tight">
                Tarik Azzouzi
              </h1>
              <p className="text-base font-medium text-muted mt-1">
                Cybersecurity &amp; AI Enthusiast · M.Sc. Computer Science at Technical University Darmstadt
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 mt-4 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" /> Münster, Germany
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Languages size={14} className="text-primary" /> German (Native) · English (C1)
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

              <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 mt-4 text-[13px] font-medium">
                <a href="https://codingtarik.github.io" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">codingtarik.github.io</a>
                <a href="https://github.com/codingtarik" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">github.com/codingtarik</a>
                <a href="https://linkedin.com/in/tarik-azzouzi" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">linkedin.com/in/tarik-azzouzi</a>
                <a href="https://app.hackthebox.com/profile/477139" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">HackTheBox · 477139</a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── Profile ─── */}
        <Card>
          <SectionTitle icon={UserRound} title="Profile" />
          <p className="text-sm text-muted leading-relaxed">
            Master&apos;s student in Computer Science at Technical University Darmstadt, specializing in software
            engineering, artificial intelligence and cybersecurity. Hands-on experience designing and building
            AI-powered systems, particularly retrieval-augmented generation (RAG) and AI agents. Several years of
            freelance software development as well as international study experience (Erasmus+, guest studies in
            Finland and Passau). Above all, deeply passionate about cybersecurity - offensive security, CTFs and
            building secure systems.
          </p>
        </Card>

        {/* ─── Experience ─── */}
        <Card>
          <SectionTitle icon={Briefcase} title="Experience" />
          <TimelineItem
            period="Nov 2024 – Mar 2026"
            title="AI Full Stack Developer"
            org="Genow.ai · Part-time · Darmstadt (Hybrid)"
            detail="Development and operation of scalable RAG platforms for enterprise customers. Full-stack engineering with Vue.js and Python, focused on AI agent orchestration, LangChain pipeline integration and deployment on Google Cloud Platform."
          />
          <TimelineItem
            period="Aug 2019 – Dec 2023"
            title="Freelance Software Developer"
            org="Upwork / Fiverr · Remote"
            detail="Development of tailored software solutions for international clients. Desktop applications (C#/WPF) as well as backends in Python, Java and C#."
          />
          <TimelineItem
            period="2018"
            title="Internship – IT Systems Electronics"
            org="Neiss Gesellschaft für Haustechnik mbH · Gelnhausen"
            detail="Two-week internship with hands-on experience in IT systems electronics and building technology, including DSL installation and commissioning of computer systems."
          />
          <TimelineItem
            last
            period="Jun 2019"
            title="Internship · IT Department"
            org="doIT solutions GmbH · Gelnhausen"
            detail="Insights into IT operations and the software development lifecycle. Worked with VirtualBox and Active Directory."
          />
        </Card>

        {/* ─── Education ─── */}
        <Card>
          <SectionTitle icon={GraduationCap} title="Education" />
          <TimelineItem
            period="Apr 2025 – Sep 2026"
            title="M.Sc. Computer Science"
            org="Technical University Darmstadt"
            detail="Focus on software engineering, AI and cybersecurity. Grade: 1.0. Master&apos;s thesis: Design and implementation of modular plugin frameworks for RAG based on the Model Context Protocol."
          />
          <TimelineItem
            period="Sep 2025 – Jan 2026"
            title="Erasmus+ Exchange Semester"
            org="University of Latvia · Grade: 1.0"
            detail="International semester abroad with a strong focus on cybersecurity and secure software development."
          />
          <TimelineItem
            period="Oct 2021 – Mar 2025"
            title="B.Sc. Computer Science"
            org="Technical University Darmstadt"
            detail="Grade: 1.3. Bachelor&apos;s thesis: Secure hybrid RAG applications in the enterprise."
          />
          <TimelineItem
            period="Jan 2024 – Present"
            title="Guest Studies (Open University)"
            org="University of Helsinki & Metropolia UAS, Finland"
            detail="Modules in software engineering, systems engineering, web development and cybersecurity. Grade: 1.0."
          />
          <TimelineItem
            period="Apr 2024 – Sep 2024"
            title="Guest Student"
            org="University of Passau"
            detail="Introduction to Android app development. Grade: 1.0."
          />
          <TimelineItem
            period="2018 – 2021"
            title="Abitur (University Entrance) · Vocational Gymnasium"
            org="Berufliche Schulen des Main-Kinzig-Kreises, Gelnhausen"
            detail="Focus on Applied Computer Science. Grade: 1.0."
          />
          <TimelineItem
            last
            period="2012 – 2018"
            title="Secondary School Diploma (Realschule)"
            org="Kreisrealschule Gelnhausen"
            detail="Grade: 1.1."
          />
        </Card>

        {/* ─── Skills ─── */}
        <Card>
          <SectionTitle icon={Cpu} title="Skills" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            <SkillGroup icon={Code} title="Programming" skills={['C#', 'Python', 'JavaScript', 'TypeScript', 'Java']} />
            <SkillGroup icon={Wrench} title="Frameworks" skills={['Vue.js', 'React', 'Node.js', 'Express', 'LangChain']} />
            <SkillGroup icon={Zap} title="AI & Data" skills={['RAG Systems', 'LLMs', 'scikit-learn', 'AI Agents']} />
            <SkillGroup icon={Cloud} title="DevOps & Cloud" skills={['Docker', 'Kubernetes', 'GCP', 'Git', 'CI/CD', 'Terraform']} />
            <SkillGroup icon={Database} title="Databases" skills={['PostgreSQL', 'MongoDB', 'SQL']} />
            <SkillGroup icon={Terminal} title="Cybersecurity" skills={['Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'OWASP', 'OpenVAS', 'Snort']} />
          </div>
        </Card>

        {/* ─── Certifications & Awards ─── */}
        <Card>
          <SectionTitle icon={Trophy} title="Certifications & Awards" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <CertCard icon={Award} title="Deutschlandstipendium (Germany Scholarship)" issuer="Technical University Darmstadt" period="2021/22 · 2023/24 · 2025/26" />
            <CertCard icon={Shield} title="Google Cybersecurity Certificate" issuer="Google" period="2023" />
            <CertCard icon={Shield} title="Ethical Hacking" issuer="Cisco" period="2025" />
            <CertCard icon={Terminal} title="Endpoint Security" issuer="Cisco" period="2025" />
            <CertCard icon={Flag} title="Cyber Apocalypse CTF 2024" issuer="HackTheBox" period="2024" />
            <CertCard icon={Code} title="Get In IT – Coding Challenge" issuer="Get In / BWI" period="2021" />
            <CertCard icon={Trophy} title="Bundeswettbewerb Informatik · 2nd Round" issuer="BWINF" period="2020" />
            <CertCard icon={GraduationCap} title="Digitale Schultransformation – Besondere Anerkennung" issuer="Berufliche Schulen Gelnhausen" period="2019" detail="Special recognition for an outstanding contribution to the installation of new computer systems as part of the DigitalPakt." />
          </div>
        </Card>

        {/* ─── Engagement ─── */}
        <Card>
          <SectionTitle icon={Heart} title="Engagement" />
          <TimelineItem
            period="2020 – 2024"
            title="Wildlife Management System · Tikki Hywood Foundation"
            org="Volunteer software development"
            detail="Built a management system for an animal conservation organization focused on rescue and rehabilitation, including centralized data synchronization."
          />
          <TimelineItem
            last
            period="2021 – 2024"
            title="Cybersecurity & CTF Competitions"
            org="TUD.dll (TU Darmstadt) & CCC “Wizards of Dos”"
            detail="Participation in CTF competitions in the cybersecurity community of TU Darmstadt and the Chaos Computer Club."
          />
        </Card>

        {/* ─── Languages & Interests ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card>
            <SectionTitle icon={Languages} title="Languages" />
            <div className="space-y-4">
              {[
                { lang: 'German', level: 'Native', pct: 100 },
                { lang: 'English', level: 'Fluent (C1)', pct: 88 },
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
            <SectionTitle icon={Heart} title="Interests" />
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { icon: Music, t: 'Piano', s: 'Music' },
                { icon: Hand, t: 'Handball', s: 'Sports' },
                { icon: Code, t: 'Programming', s: 'Software' },
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
              Open to new challenges in research and practice.
            </div>
          </Card>
        </div>

      </motion.div>
    </div>
  );
}
