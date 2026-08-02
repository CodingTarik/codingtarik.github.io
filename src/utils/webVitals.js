/**
 * Web Vitals Tracking
 * Sends Core Web Vitals (LCP, FID, CLS, TTFB, INP) to Umami Analytics
 * 
 * Uses the web-vitals library via PerformanceObserver API
 * No external dependency needed - uses browser APIs directly
 */

/**
 * Send metric to Umami analytics
 */
function sendToUmami(metric) {
  // Check if Umami is loaded
  if (typeof window.umami === 'undefined') return;

  try {
    window.umami.track('web-vital', {
      name: metric.name,
      value: Math.round(metric.value),
      rating: metric.rating, // 'good', 'needs-improvement', 'poor'
      delta: Math.round(metric.delta),
    });
  } catch (e) {
    // Silently fail - analytics should never break the app
  }
}

/**
 * Track Largest Contentful Paint (LCP)
 * Good: < 2.5s | Needs Improvement: 2.5-4s | Poor: > 4s
 */
function trackLCP() {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      const value = lastEntry.startTime;
      sendToUmami({
        name: 'LCP',
        value,
        delta: value,
        rating: value < 2500 ? 'good' : value < 4000 ? 'needs-improvement' : 'poor',
      });
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) { /* API not supported */ }
}

/**
 * Track First Input Delay (FID) / Interaction to Next Paint (INP)
 * Good: < 100ms | Needs Improvement: 100-300ms | Poor: > 300ms
 */
function trackFID() {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const firstEntry = entries[0];
      const value = firstEntry.processingStart - firstEntry.startTime;
      sendToUmami({
        name: 'FID',
        value,
        delta: value,
        rating: value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor',
      });
    });
    observer.observe({ type: 'first-input', buffered: true });
  } catch (e) { /* API not supported */ }
}

/**
 * Track Cumulative Layout Shift (CLS)
 * Good: < 0.1 | Needs Improvement: 0.1-0.25 | Poor: > 0.25
 */
function trackCLS() {
  try {
    let clsValue = 0;
    let sessionValue = 0;
    let sessionEntries = [];

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

          if (
            sessionValue &&
            entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000
          ) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }

          if (sessionValue > clsValue) {
            clsValue = sessionValue;
          }
        }
      }
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    // Report CLS on page hide
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        sendToUmami({
          name: 'CLS',
          value: clsValue,
          delta: clsValue,
          rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor',
        });
        observer.disconnect();
      }
    });
  } catch (e) { /* API not supported */ }
}

/**
 * Track Time to First Byte (TTFB)
 * Good: < 800ms | Needs Improvement: 800-1800ms | Poor: > 1800ms
 */
function trackTTFB() {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const navEntry = entries[0];
      const value = navEntry.responseStart;
      sendToUmami({
        name: 'TTFB',
        value,
        delta: value,
        rating: value < 800 ? 'good' : value < 1800 ? 'needs-improvement' : 'poor',
      });
    });
    observer.observe({ type: 'navigation', buffered: true });
  } catch (e) { /* API not supported */ }
}

/**
 * Initialize all Web Vitals tracking
 * Call this once after the page loads
 */
export function initWebVitals() {
  // Only track in production
  if (import.meta.env.DEV) return;

  // Wait for page to be interactive
  if (document.readyState === 'complete') {
    startTracking();
  } else {
    window.addEventListener('load', startTracking);
  }
}

function startTracking() {
  trackLCP();
  trackFID();
  trackCLS();
  trackTTFB();
}
