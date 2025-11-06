import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'LearnBuddy',
      description: 'A Progressive Web App for learning various skills - from bouldering to programming. Built with React, Tailwind CSS, and Vite.',
      tech: ['React', 'Tailwind CSS', 'PWA', 'Vite'],
      github: 'https://github.com/CodingTarik/learn_bouldering',
      demo: '#/learnbuddy/boulder/home',
      featured: true
    },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Projects
          </h1>
          <p className="text-sm md:text-lg text-stone-600 dark:text-stone-400">
            Here are some of my coding projects and experiments. Check out my{' '}
            <a 
              href="https://github.com/CodingTarik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-900 dark:text-stone-100 hover:underline font-medium"
            >
              GitHub
            </a>
            {' '}for more.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map(project => (
            <article
              key={project.id}
              className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 md:p-6 hover:shadow-md transition-all"
            >
              {project.featured && (
                <div className="inline-flex items-center gap-1 px-2 md:px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-bold mb-4">
                  ⭐ Featured
                </div>
              )}
              
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                {project.title}
              </h2>
              
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-600 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View Demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
          
          {/* Coming Soon */}
          <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-12 text-center">
            <Code size={48} className="mx-auto mb-4 text-stone-400" />
            <p className="text-stone-600 dark:text-stone-400 text-lg">
              More projects coming soon...
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-500 mt-2">
              I'm constantly working on new ideas and experiments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

