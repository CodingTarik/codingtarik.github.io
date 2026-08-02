import { useEffect } from 'react';
import { trackPageView } from '../utils/analyticsWrapper';

/**
 * Analytics Component for Blog
 * 
 * This component automatically tracks page views when the route changes.
 * It uses the analytics wrapper, so it works with any analytics platform
 * (Umami, Plausible, Google Analytics, etc.)
 * 
 * To switch platforms, just change ANALYTICS_PROVIDER in analyticsWrapper.js
 */

export default function Analytics() {
  useEffect(() => {
    // Track page view on route change
    trackPageView();
  }, [window.location.pathname]);

  return null;
}

// Re-export all tracking functions for convenience
export {
  trackEvent,
  trackPageView,
  trackPostView,
  trackPostShare,
  trackCategoryClick,
  trackSearch,
  trackOutboundLink,
  trackSocialClick,
  trackCoffeeClick,
  trackRSSClick,
  trackCodeCopy,
  trackTOCClick,
  trackScrollToTop,
  trackReadingTime,
  trackScrollDepth,
  ANALYTICS_EVENTS,
} from '../utils/analyticsWrapper';

