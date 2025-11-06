import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Star, GitFork } from 'lucide-react';
import GitHubActivity from './GitHubActivity';
import ParticleBackground from './ParticleBackground';
import blogConfig from '../config';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'LearnBuddy',
      description: 'A Progressive Web App for learning various skills - from bouldering to programming. Built with React, Tailwind CSS, and Vite.',
      tech: ['React', 'Tailwind CSS', 'PWA', 'Vite'],
      github: `https://github.com/${blogConfig.author.github}/${blogConfig.github?.repo || 'codingtarik.github.io'}`,
      demo: '#/learnbuddy/boulder/home',
      featured: true
    },
    {
      id: 2,
      title: 'MathPlan',
      description: 'Math Course Management System for TU Darmstadt. Streamlines submission and approval of student examination plans with admin dashboard for course management.',
      tech: ['Node.js', 'Express', 'MySQL', 'SQLite', 'Jest'],
      github: `https://github.com/${blogConfig.author.github}/MathPlan`,
      featured: true
    },
    {
      id: 3,
      title: 'Parallel Subtitle Player',
      description: 'Elevate your language learning with synchronized dual subtitles. Compare and learn languages through synchronized playback with favorite and export features.',
      tech: ['TypeScript', 'React', 'CSS'],
      github: `https://github.com/${blogConfig.author.github}/Parallel-Subtitle-Player`,
      featured: true
    },
    {
      id: 4,
      title: 'Mensa Website',
      description: 'University cafeteria menu website with modern UI and meal planning features.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: `https://github.com/${blogConfig.author.github}/mensa-website`,
    },
    {
      id: 5,
      title: 'Pangolin Database Manager',
      description: 'Data management system for Tikki Hywood Foundation to manage pangolin wildlife data. Helps track and protect endangered pangolins with comprehensive database tools.',
      tech: ['Python', 'SQLite', 'Tkinter'],
      github: `https://github.com/${blogConfig.author.github}/Pangolin-Database-Manager`,
      featured: true
    },
    {
      id: 6,
      title: 'Forest Chrome Extension',
      description: 'Chrome extension for exceptional use cases of the Forest productivity app.',
      tech: ['JavaScript', 'Chrome API'],
      github: `https://github.com/${blogConfig.author.github}/Forest-Chrome-Extension-Exceptional-Use`,
    },
    {
      id: 7,
      title: 'BSV Template',
      description: 'Template for building scalable web applications with best practices.',
      tech: ['JavaScript', 'Node.js'],
      github: `https://github.com/${blogConfig.author.github}/BSV-template`,
    },
    {
      id: 8,
      title: 'Jarvis Home',
      description: 'Smart home automation system inspired by JARVIS with voice control and IoT integration.',
      tech: ['Python', 'IoT', 'Voice Recognition'],
      github: `https://github.com/${blogConfig.author.github}/Jarvis-Home`,
    },
    {
      id: 9,
      title: '2048 Python',
      description: 'Python implementation of the popular 2048 puzzle game with clean UI.',
      tech: ['Python', 'Pygame'],
      github: `https://github.com/${blogConfig.author.github}/2048Python`,
    },
    {
      id: 10,
      title: 'Euklid',
      description: 'Mathematical algorithms and visualizations based on Euclidean geometry.',
      tech: ['Python', 'Mathematics'],
      github: `https://github.com/${blogConfig.author.github}/Euklid`,
    },
    {
      id: 11,
      title: 'Multiple Knapsack Solver',
      description: 'Optimization algorithm for solving the multiple knapsack problem efficiently.',
      tech: ['Python', 'Algorithms', 'Optimization'],
      github: `https://github.com/${blogConfig.author.github}/Multiple-Knapsack-Solver`,
    },
    {
      id: 12,
      title: 'Java Client-Server File Server',
      description: 'File server with GUI implementing client-server architecture for file sharing.',
      tech: ['Java', 'Swing', 'Networking'],
      github: `https://github.com/${blogConfig.author.github}/Java-Client-Server-File-Server-With-Gui`,
    },
    {
      id: 13,
      title: 'K8055 USB Board Controller',
      description: 'Java application for controlling K8055 USB experiment board with intuitive interface.',
      tech: ['Java', 'USB', 'Hardware Control'],
      github: `https://github.com/${blogConfig.author.github}/k8055-USB-BOARD-Java-control`,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-8 relative z-10">
        {/* Hero Header */}
        <motion.header 
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6"
          >
            <Code size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Open Source Projects</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            My Projects
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Building solutions for real-world problems. From web apps to algorithms.
          </motion.p>
        </motion.header>

        {/* GitHub Activity */}
        <GitHubActivity username="CodingTarik" />

        {/* Section Title */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-text flex items-center gap-2">
            <Code size={24} className="text-primary" />
            All Projects
          </h2>
          <p className="text-muted mt-2">
            {projects.length} repositories • {projects.filter(p => p.featured).length} featured
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card rounded-xl border border-border p-6 hover:shadow-xl hover:border-primary transition-all overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div 
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs font-bold mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star size={12} fill="currentColor" />
                    <span>Featured</span>
                  </motion.div>
                )}
                
                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-background border border-border text-text rounded-md text-xs font-medium hover:border-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-card text-text border border-border rounded-lg hover:border-primary hover:shadow-md transition-all text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={false}
              />
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl border border-border p-12 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Code size={48} className="mx-auto mb-4 text-primary" />
          </motion.div>
          <h3 className="text-2xl font-bold text-text mb-2">
            More Coming Soon
          </h3>
          <p className="text-muted max-w-md mx-auto">
            I'm constantly working on new ideas and experiments. Follow me on{' '}
            <a 
              href="https://github.com/CodingTarik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              GitHub
            </a>
            {' '}to stay updated!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

