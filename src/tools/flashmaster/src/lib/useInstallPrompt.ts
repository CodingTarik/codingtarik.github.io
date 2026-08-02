/**
 * useInstallPrompt — captures the browser's `beforeinstallprompt` event
 * and exposes a `promptInstall()` function for a custom install button.
 *
 * The `beforeinstallprompt` event only fires when ALL of these are true:
 *  1. The site is served over HTTPS (or localhost)
 *  2. A valid web manifest is present
 *  3. A service worker is registered
 *  4. The app is NOT already installed
 *  5. The browser supports PWA install (Chrome, Edge, Samsung, Opera, etc.)
 */

import { useState, useEffect, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  prompt(): Promise<void>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

/** Whether the user explicitly dismissed the install banner in this session */
const DISMISSED_KEY = 'flashmaster_install_dismissed';

export function useInstallPrompt() {
  const [canInstall, setCanInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    return sessionStorage.getItem(DISMISSED_KEY) === '1';
  });

  useEffect(() => {
    // Check if already installed (standalone mode)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    setIsInstalled(isStandalone);

    if (isStandalone) return;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
      setCanInstall(true);
    };

    const handleAppInstalled = () => {
      deferredPrompt = null;
      setCanInstall(false);
      setIsInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // If the event already fired before this hook mounted
    if (deferredPrompt) setCanInstall(true);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return false;
    try {
      await deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        deferredPrompt = null;
        setCanInstall(false);
        setIsInstalled(true);
        return true;
      }
    } catch (err) {
      console.error('Install prompt failed:', err);
    }
    return false;
  }, []);

  const dismiss = useCallback(() => {
    setDismissed(true);
    sessionStorage.setItem(DISMISSED_KEY, '1');
  }, []);

  return { canInstall, isInstalled, dismissed, promptInstall, dismiss };
}
