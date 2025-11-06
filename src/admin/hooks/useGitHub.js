import { useState, useEffect } from 'react';

// Configuration
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID || '';
const GITHUB_OAUTH_ENABLED = import.meta.env.VITE_GITHUB_OAUTH_ENABLED === 'true';
const GITHUB_OAUTH_ENDPOINT = import.meta.env.VITE_GITHUB_OAUTH_ENDPOINT || '';
const GITHUB_REDIRECT_URI = window.location.origin + '/#/admin/callback';

export function useGitHub() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authMode, setAuthMode] = useState(GITHUB_OAUTH_ENABLED ? 'oauth' : 'token');

  // Check for existing token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('github_token');
    const storedUser = localStorage.getItem('github_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    
    setIsLoading(false);

    // Check for OAuth callback
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      handleOAuthCallback(code);
    }
  }, []);

  const handleOAuthCallback = async (code) => {
    try {
      if (!GITHUB_OAUTH_ENDPOINT) {
        throw new Error('OAuth endpoint not configured');
      }

      // Exchange code for token via backend
      const response = await fetch(GITHUB_OAUTH_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error('Failed to exchange code for token');
      }

      const data = await response.json();
      
      if (data.access_token) {
        await fetchUserData(data.access_token);
      } else {
        throw new Error('No access token received');
      }
      
      // Clean URL
      window.history.replaceState({}, document.title, '/#/admin');
    } catch (error) {
      console.error('OAuth callback error:', error);
      alert('OAuth authentication failed. Please try again or use token authentication.');
      window.history.replaceState({}, document.title, '/#/admin');
    }
  };

  const login = () => {
    if (authMode === 'oauth' && GITHUB_CLIENT_ID) {
      // Production: OAuth flow
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(GITHUB_REDIRECT_URI)}&scope=repo`;
      window.location.href = authUrl;
    } else {
      // Development: Personal Access Token
      const token = prompt(
        'Enter your GitHub Personal Access Token:\n\n' +
        '1. Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)\n' +
        '2. Generate new token with "repo" scope\n' +
        '3. Paste it here\n\n' +
        'Note: For production, configure OAuth in environment variables'
      );

      if (token) {
        fetchUserData(token);
      }
    }
  };

  const fetchUserData = async (accessToken) => {
    try {
      const response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      
      setToken(accessToken);
      setUser(userData);
      setIsAuthenticated(true);
      
      // Store in localStorage
      localStorage.setItem('github_token', accessToken);
      localStorage.setItem('github_user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Failed to authenticate. Please check your token and try again.');
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('github_token');
    localStorage.removeItem('github_user');
  };

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    authMode,
    login,
    logout,
  };
}

