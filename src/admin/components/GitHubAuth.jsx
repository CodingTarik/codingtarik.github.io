import React from 'react';
import { motion } from 'framer-motion';
import { Github, Key } from 'lucide-react';

export default function GitHubAuth({ onLogin, authMode = 'token' }) {
  const isOAuthMode = authMode === 'oauth';

  return (
    <div className="space-y-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onLogin}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg"
      >
        <Github size={24} />
        <span>Sign in with GitHub</span>
      </motion.button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/20"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-transparent text-white/60">
            {isOAuthMode ? 'OAuth Mode' : 'Development Mode'}
          </span>
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-4 text-sm text-white/80">
        <div className="flex items-start gap-2 mb-2">
          <Key size={16} className="mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold mb-1">
              {isOAuthMode ? 'Using OAuth Flow' : 'Using Personal Access Token'}
            </p>
            <p className="text-xs text-white/60">
              {isOAuthMode 
                ? 'You will be redirected to GitHub to authorize the application.'
                : 'For development, you\'ll be prompted to enter a GitHub Personal Access Token.'
              }
            </p>
          </div>
        </div>
        
        {!isOAuthMode && (
          <ol className="text-xs text-white/60 space-y-1 ml-6 mt-2">
            <li>1. Go to GitHub Settings → Developer settings</li>
            <li>2. Personal access tokens → Tokens (classic)</li>
            <li>3. Generate new token with <code className="bg-white/10 px-1 rounded">repo</code> scope</li>
            <li>4. Copy and paste when prompted</li>
          </ol>
        )}
        
        {isOAuthMode && (
          <div className="text-xs text-white/60 ml-6 mt-2">
            <p>✅ Secure OAuth authentication configured</p>
            <p>✅ No need to manage tokens manually</p>
          </div>
        )}
      </div>
    </div>
  );
}

