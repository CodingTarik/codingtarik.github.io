import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, Star, GitFork, Activity, TrendingUp, Sparkles } from 'lucide-react';
import blogConfig from '../config';

export default function GitHubActivity({ username = blogConfig.author.github }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        
        // Fetch public repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const repos = await reposResponse.json();
        
        const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
        const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);
        
        setStats({
          avatarUrl: userData.avatar_url,
          name: userData.name || username,
          totalRepos: userData.public_repos,
          totalStars: totalStars,
          totalForks: totalForks,
          followers: userData.followers,
          following: userData.following,
          bio: userData.bio || 'Passionate software developer & open-source builder.',
        });
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        
        // Fallback data
        setStats({
          name: 'Tarik Azzouzi',
          totalRepos: 13,
          totalStars: 5,
          totalForks: 2,
          followers: 12,
          following: 15,
          bio: 'Software Engineer & Open Source Enthusiast',
        });
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  if (loading) {
    return (
      <div className="mb-10 p-8 bg-card/60 backdrop-blur-md rounded-3xl border border-border/80 shadow-lg text-center">
        <div className="animate-pulse flex items-center justify-center gap-3">
          <Github size={24} className="text-primary animate-spin" />
          <span className="text-muted font-medium">Loading live GitHub activity...</span>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      icon: Github,
      label: 'Repositories',
      value: stats?.totalRepos || 0,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Star,
      label: 'Stars Earned',
      value: stats?.totalStars || 0,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      iconColor: 'text-amber-400',
    },
    {
      icon: GitFork,
      label: 'Forks',
      value: stats?.totalForks || 0,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Activity,
      label: 'Followers',
      value: stats?.followers || 0,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      {/* Main Container */}
      <div className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border/80 p-6 sm:p-8 shadow-2xl overflow-hidden relative">
        
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Header Profile Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-border/60">
          <div className="flex items-center gap-4">
            {stats?.avatarUrl ? (
              <img
                src={stats.avatarUrl}
                alt={username}
                className="w-16 h-16 rounded-2xl border-2 border-primary/40 shadow-lg object-cover"
              />
            ) : (
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 text-primary">
                <Github size={32} />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-text">{stats?.name || username}</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold flex items-center gap-1">
                  <Sparkles size={11} /> GitHub Builder
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted mt-0.5">@{username} • {stats?.bio}</p>
            </div>
          </div>

          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:opacity-90 transition-all text-xs sm:text-sm font-bold shadow-md shadow-primary/20 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} />
            <span>View GitHub Profile</span>
            <TrendingUp size={14} />
          </motion.a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${stat.color} border ${stat.borderColor} backdrop-blur-md transition-all shadow-sm`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium text-muted">{stat.label}</span>
                  <div className={`p-2 rounded-xl bg-background/60 ${stat.iconColor}`}>
                    <Icon size={18} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-text">
                  {stat.value.toLocaleString()}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Commit Heatmap / Activity Board */}
        <div className="mt-6 pt-6 border-t border-border/60">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <GitCommit size={18} className="text-primary" />
              <h3 className="text-sm sm:text-base font-bold text-text">Contributions & Commit Heatmap</h3>
            </div>
            <span className="text-xs text-muted font-mono">Live GitHub Activity</span>
          </div>

          <div className="p-4 bg-background/60 rounded-2xl border border-border/80 shadow-inner overflow-x-auto flex justify-center">
            {/* Dark mode optimized cyan heat map */}
            <div className="min-w-[650px] w-full flex justify-center py-2">
              <img
                src={`https://ghchart.rshah.org/00E5FF/${username}`}
                alt="GitHub Contribution Graph"
                className="w-full max-w-3xl rounded-lg filter drop-shadow-md brightness-110 contrast-125 dark:opacity-90 transition-all hover:opacity-100"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
