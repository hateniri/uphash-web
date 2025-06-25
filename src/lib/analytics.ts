// Google Analytics helper functions

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: any
    ) => void;
  }
}

// Check if Google Analytics is loaded
export const isGALoaded = () => {
  return typeof window !== 'undefined' && typeof window.gtag !== 'undefined';
};

// Track page views (automatically handled by GA4, but useful for SPAs)
export const trackPageView = (url: string) => {
  if (!isGALoaded()) return;
  
  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!isGALoaded()) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined event trackers
export const analytics = {
  // Track form submissions
  trackFormSubmission: (formName: string, success: boolean = true) => {
    trackEvent('form_submit', 'engagement', formName, success ? 1 : 0);
  },
  
  // Track downloads
  trackDownload: (fileName: string, fileType: string) => {
    trackEvent('file_download', 'downloads', `${fileName} (${fileType})`);
  },
  
  // Track external link clicks
  trackOutboundLink: (url: string) => {
    trackEvent('click', 'outbound', url);
  },
  
  // Track video engagement
  trackVideoPlay: (videoName: string) => {
    trackEvent('video_play', 'video', videoName);
  },
  
  // Track product views
  trackProductView: (productName: string, productCategory: string) => {
    trackEvent('view_item', 'ecommerce', productName);
    window.gtag('event', 'view_item', {
      currency: 'JPY',
      value: 0,
      items: [{
        item_name: productName,
        item_category: productCategory,
      }]
    });
  },
  
  // Track scroll depth
  trackScrollDepth: (percentage: number) => {
    trackEvent('scroll', 'engagement', `${percentage}%`, percentage);
  },
  
  // Track search
  trackSearch: (searchTerm: string, resultsCount: number) => {
    trackEvent('search', 'engagement', searchTerm, resultsCount);
  },
  
  // Track 404 errors
  track404: (url: string) => {
    trackEvent('404_error', 'errors', url);
  },
  
  // Track contact form submission
  trackContact: (contactMethod: string) => {
    trackEvent('contact', 'conversion', contactMethod);
  },
};