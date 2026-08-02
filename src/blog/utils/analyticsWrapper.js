/**
 * Analytics Wrapper - Platform Agnostic + DSGVO-konform
 * 
 * This wrapper allows you to easily switch between analytics platforms
 * (Umami, Plausible, Google Analytics, etc.) without changing your code.
 * 
 * DSGVO: Analytics events are only sent if the user has given consent.
 * The Umami script is loaded dynamically via consentManager.js.
 */

import { isConsentGiven } from '../../shared/utils/consentManager';

// Choose your analytics provider here:
// Options: 'umami', 'plausible', 'ga4', 'none'
const ANALYTICS_PROVIDER = 'umami';

/**
 * Analytics Event Types
 * Define all events you want to track in your blog
 */
export const ANALYTICS_EVENTS = {
  // Page Events
  PAGE_VIEW: 'page-view',
  
  // Post Events
  POST_VIEW: 'post-view',
  POST_SHARE: 'post-share',
  POST_COPY_LINK: 'post-copy-link',
  
  // Navigation Events
  CATEGORY_CLICK: 'category-click',
  TAG_CLICK: 'tag-click',
  SEARCH: 'search',
  
  // Interaction Events
  OUTBOUND_LINK: 'outbound-link',
  SOCIAL_CLICK: 'social-link-click',
  COFFEE_CLICK: 'buy-me-coffee-click',
  RSS_CLICK: 'rss-feed-click',
  
  // Content Events
  CODE_COPY: 'code-copy',
  TOC_CLICK: 'toc-click',
  SCROLL_TO_TOP: 'scroll-to-top',
  
  // Engagement Events
  READING_TIME: 'reading-time',
  SCROLL_DEPTH: 'scroll-depth',
};

/**
 * Check if analytics consent is given
 */
const hasAnalyticsConsent = () => {
  return isConsentGiven('analytics');
};

/**
 * Platform-specific implementations
 */
const analyticsProviders = {
  /**
   * Umami Analytics
   */
  umami: {
    isAvailable: () => typeof window !== 'undefined' && window.umami && hasAnalyticsConsent(),
    
    trackPageView: () => {
      if (window.umami && hasAnalyticsConsent()) {
        window.umami.track();
      }
    },
    
    trackEvent: (eventName, eventData = {}) => {
      if (window.umami && hasAnalyticsConsent()) {
        window.umami.track(eventName, eventData);
      }
    },
  },

  /**
   * Plausible Analytics
   */
  plausible: {
    isAvailable: () => typeof window !== 'undefined' && window.plausible && hasAnalyticsConsent(),
    
    trackPageView: () => {
      if (window.plausible && hasAnalyticsConsent()) {
        window.plausible('pageview');
      }
    },
    
    trackEvent: (eventName, eventData = {}) => {
      if (window.plausible && hasAnalyticsConsent()) {
        window.plausible(eventName, { props: eventData });
      }
    },
  },

  /**
   * Google Analytics 4
   */
  ga4: {
    isAvailable: () => typeof window !== 'undefined' && window.gtag && hasAnalyticsConsent(),
    
    trackPageView: () => {
      if (window.gtag && hasAnalyticsConsent()) {
        window.gtag('event', 'page_view', {
          page_path: window.location.pathname,
        });
      }
    },
    
    trackEvent: (eventName, eventData = {}) => {
      if (window.gtag && hasAnalyticsConsent()) {
        window.gtag('event', eventName, eventData);
      }
    },
  },

  /**
   * No Analytics (for development/testing)
   */
  none: {
    isAvailable: () => true,
    trackPageView: () => {},
    trackEvent: () => {},
  },
};

/**
 * Get current analytics provider
 */
const getProvider = () => {
  const provider = analyticsProviders[ANALYTICS_PROVIDER];
  if (!provider) {
    console.warn(`Analytics provider "${ANALYTICS_PROVIDER}" not found. Using "none".`);
    return analyticsProviders.none;
  }
  return provider;
};

/**
 * Track a page view (only if consent given)
 */
export const trackPageView = () => {
  if (!hasAnalyticsConsent()) return;
  const provider = getProvider();
  if (provider.isAvailable()) {
    provider.trackPageView();
  }
};

/**
 * Track a custom event (only if consent given)
 * @param {string} eventName - Name of the event (use ANALYTICS_EVENTS constants)
 * @param {object} eventData - Additional data to track
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (!hasAnalyticsConsent()) return;
  const provider = getProvider();
  if (provider.isAvailable()) {
    provider.trackEvent(eventName, eventData);
  }
};

/**
 * Track a blog post view
 */
export const trackPostView = (postId, postTitle, categories = []) => {
  trackEvent(ANALYTICS_EVENTS.POST_VIEW, {
    postId,
    postTitle,
    categories: categories.join(', '),
  });
};

/**
 * Track a post share
 */
export const trackPostShare = (postId, postTitle, platform) => {
  trackEvent(ANALYTICS_EVENTS.POST_SHARE, {
    postId,
    postTitle,
    platform,
  });
};

/**
 * Track category click
 */
export const trackCategoryClick = (category) => {
  trackEvent(ANALYTICS_EVENTS.CATEGORY_CLICK, {
    category,
  });
};

/**
 * Track search
 */
export const trackSearch = (query, resultsCount) => {
  trackEvent(ANALYTICS_EVENTS.SEARCH, {
    query,
    resultsCount,
  });
};

/**
 * Track outbound link click
 */
export const trackOutboundLink = (url, linkText = '') => {
  trackEvent(ANALYTICS_EVENTS.OUTBOUND_LINK, {
    url,
    linkText,
  });
};

/**
 * Track social media click
 */
export const trackSocialClick = (platform, url) => {
  trackEvent(ANALYTICS_EVENTS.SOCIAL_CLICK, {
    platform,
    url,
  });
};

/**
 * Track Buy Me a Coffee click
 */
export const trackCoffeeClick = () => {
  trackEvent(ANALYTICS_EVENTS.COFFEE_CLICK);
};

/**
 * Track RSS feed click
 */
export const trackRSSClick = () => {
  trackEvent(ANALYTICS_EVENTS.RSS_CLICK);
};

/**
 * Track code copy
 */
export const trackCodeCopy = (language) => {
  trackEvent(ANALYTICS_EVENTS.CODE_COPY, {
    language,
  });
};

/**
 * Track Table of Contents click
 */
export const trackTOCClick = (heading) => {
  trackEvent(ANALYTICS_EVENTS.TOC_CLICK, {
    heading,
  });
};

/**
 * Track scroll to top button click
 */
export const trackScrollToTop = () => {
  trackEvent(ANALYTICS_EVENTS.SCROLL_TO_TOP);
};

/**
 * Track reading time (when user finishes reading)
 */
export const trackReadingTime = (postId, timeSpent) => {
  trackEvent(ANALYTICS_EVENTS.READING_TIME, {
    postId,
    timeSpent: Math.round(timeSpent),
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth) => {
  trackEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, {
    depth: `${depth}%`,
  });
};

/**
 * Get current analytics provider name
 */
export const getAnalyticsProvider = () => ANALYTICS_PROVIDER;

/**
 * Check if analytics is available (consent + provider loaded)
 */
export const isAnalyticsAvailable = () => {
  if (!hasAnalyticsConsent()) return false;
  const provider = getProvider();
  return provider.isAvailable();
};
