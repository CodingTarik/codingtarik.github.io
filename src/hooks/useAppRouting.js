import { useState, useEffect } from 'react';
import { getPath, navigate } from '../utils/navigation';
import { updateMetaTags, updateCanonicalUrl } from '../modules/blog/utils/seoUtils';
import { getPostById } from '../modules/blog/utils/blogUtils';

const SEO_CONFIG = {
  'cv': {
    title: 'CV & Lebenslauf - Tarik Azzouzi',
    description: 'Lebenslauf von Tarik Azzouzi: Software-Entwickler, M.Sc. Computer Science, Cybersecurity & KI.',
    canonicalPath: 'cv'
  },
  'tools': {
    title: 'Tools & Utilities - Tarik Azzouzi',
    description: 'Nützliche Online-Tools: PDF Tools, Piano Studio, FlashMaster, Perfect Pitch Trainer und mehr.',
    canonicalPath: 'tools'
  },
  'privacy': {
    title: 'Privacy Policy - Tarik Azzouzi',
    description: 'Privacy Policy for codingtarik.github.io',
    canonicalPath: 'privacy'
  },
  'imprint': {
    title: 'Legal Notice - Tarik Azzouzi',
    description: 'Legal notice and contact information from Tarik Azzouzi.',
    canonicalPath: 'imprint'
  },
  'flashmaster': {
    title: 'FlashMaster - Karteikarten mit Spaced Repetition',
    description: 'Leistungsstarke Karteikarten-App mit Spaced Repetition, KI-Kartenerstellung, Anki-Import/Export, Voice-Modus und mehr.',
    canonicalPath: 'tools/flashmaster'
  },
  'device-test': {
    title: 'Mic & Webcam Test - Mikrofon und Kamera testen',
    description: 'Teste dein Mikrofon und deine Webcam direkt im Browser. Echtzeit-Visualisierung, 100% lokal, keine Daten werden gesendet.',
    canonicalPath: 'tools/device-test'
  },
  'perfect-pitch': {
    title: 'Piano Trainer - Sight Reading, Chords & Ear Training',
    description: 'Interaktiver Piano & Notentrainer: Notenlesen auf Notenlinien, Akkorde (Dur/Moll/Septimen), Gehörtraining & virtuelles Keyboard.',
    canonicalPath: 'tools/perfect-pitch'
  },
  'piano-trainer': {
    title: 'Piano Trainer - Sight Reading, Chords & Ear Training',
    description: 'Interaktiver Piano & Notentrainer: Notenlesen auf Notenlinien, Akkorde (Dur/Moll/Septimen), Gehörtraining & virtuelles Keyboard.',
    canonicalPath: 'tools/piano-trainer'
  },
  'learning-hub': {
    title: 'Learning Hub - Interaktive Kurse & E-Books',
    description: 'Interaktive Kurse, Markdown-Artikelserien und Paged.js E-Bücher mit automatischem Lernfortschritt.',
    canonicalPath: 'learning-hub'
  }
};

export function useAppRouting() {
  const [appView, setAppView] = useState('blog');
  const [currentPost, setCurrentPost] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Update SEO meta tags on view change
  useEffect(() => {
    const seo = SEO_CONFIG[appView];
    if (seo) {
      updateMetaTags(seo);
    } else if (appView === 'blog') {
      updateCanonicalUrl(window.location.pathname.replace(/^\//, '') || '');
    }
  }, [appView]);

  // Handle URL routing
  useEffect(() => {
    const handleRouteChange = () => {
      const path = getPath();
      setCurrentPath(path);

      if (path.startsWith('/learning-hub')) {
        setAppView('learning-hub');
        return;
      }

      if (path === '/privacy') {
        setAppView('privacy');
        return;
      }

      if (path === '/imprint') {
        setAppView('imprint');
        return;
      }

      if (path === '/cv') {
        setAppView('cv');
        return;
      }

      if (path === '/tools') {
        setAppView('tools');
        return;
      }

      if (path === '/tools/pdf-tools') {
        setAppView('pdf-tools');
        return;
      }

      if (path === '/tools/piano') {
        setAppView('piano-studio');
        return;
      }

      if (path === '/tools/flashmaster') {
        setAppView('flashmaster');
        return;
      }

      if (path === '/tools/device-test') {
        setAppView('device-test');
        return;
      }

      if (path === '/tools/markdown') {
        setAppView('markdown-editor');
        return;
      }

      if (path === '/tools/perfect-pitch' || path === '/tools/piano-trainer') {
        setAppView('perfect-pitch');
        return;
      }

      if (path.startsWith('/blog')) {
        setAppView('blog');

        if (path.startsWith('/blog/search') || path === '/blog/categories' || path === '/blog/projects') {
          setCurrentPost(null);
          return;
        }

        const postMatch = path.match(/^\/blog\/post\/(.+)$/);
        if (postMatch) {
          const post = getPostById(postMatch[1]);
          if (post) {
            setCurrentPost(post);
          }
        } else {
          setCurrentPost(null);
        }
        return;
      }

      // Check for LearnBuddy routes
      if (path.match(/^\/learnbuddy\//i)) {
        setAppView('learnbuddy');
        return;
      }
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/blog/post/${postId}`);
    const post = getPostById(postId);
    if (post) {
      setCurrentPost(post);
    }
  };

  const handleBackToBlog = () => {
    navigate('/blog');
    setCurrentPost(null);
  };

  return {
    appView,
    setAppView,
    currentPost,
    currentPath,
    handlePostClick,
    handleBackToBlog
  };
}
