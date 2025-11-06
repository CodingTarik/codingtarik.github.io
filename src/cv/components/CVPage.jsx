import React from 'react';
import { Download, Mail, MapPin, Calendar, Briefcase, GraduationCap, Code, Award } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Header */}
        <header className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                Tarik Azzouzi
              </h1>
              <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 mb-4">
                Full-Stack Developer & Cybersecurity Enthusiast
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs md:text-sm text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:your.email@example.com" className="hover:text-stone-900 dark:hover:text-stone-100">
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Your Location</span>
                </div>
              </div>
            </div>
            
            <a
              href="/path/to/your/cv.pdf" // TODO: CV-PDF Pfad
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors font-medium text-sm whitespace-nowrap"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </a>
          </div>
        </header>

        {/* About */}
        <section className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            About Me
          </h2>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            Passionate Full-Stack Developer with expertise in modern web technologies and a strong interest in cybersecurity. 
            I love building user-friendly applications and solving complex problems. Always eager to learn new technologies 
            and best practices.
          </p>
        </section>

        {/* Experience */}
        <section className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-2">
            <Briefcase size={24} />
            Work Experience
          </h2>
          
          <div className="space-y-6">
            {/* Example Experience */}
            <div className="border-l-4 border-stone-300 dark:border-stone-600 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    Full-Stack Developer
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Company Name
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm text-stone-500 dark:text-stone-400">
                  <Calendar size={14} />
                  <span>2020 - Present</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-stone-600 dark:text-stone-400 space-y-1 text-sm">
                <li>Developed and maintained web applications using React, Node.js, and TypeScript</li>
                <li>Implemented RESTful APIs and integrated third-party services</li>
                <li>Collaborated with cross-functional teams in agile environment</li>
              </ul>
            </div>

            {/* Add more experiences here */}
          </div>
        </section>

        {/* Education */}
        <section className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-2">
            <GraduationCap size={24} />
            Education
          </h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-stone-300 dark:border-stone-600 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    University Name
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm text-stone-500 dark:text-stone-400">
                  <Calendar size={14} />
                  <span>2016 - 2020</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-2">
            <Code size={24} />
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'Linux', 'VS Code'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2">Cybersecurity</h3>
              <div className="flex flex-wrap gap-2">
                {['Pentesting', 'OWASP', 'CTF', 'Kali Linux'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 md:p-8">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-2">
            <Award size={24} />
            Certifications & Achievements
          </h2>
          
          <ul className="space-y-2 text-stone-600 dark:text-stone-400">
            <li className="flex items-start gap-2">
              <span className="text-stone-900 dark:text-stone-100">•</span>
              <span>Your Certification 1</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-stone-900 dark:text-stone-100">•</span>
              <span>Your Certification 2</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-stone-900 dark:text-stone-100">•</span>
              <span>Your Achievement 1</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

