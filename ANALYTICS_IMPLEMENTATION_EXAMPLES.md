# Analytics Implementation Examples

This document shows how to implement various analytics tracking throughout the UpHash website.

## 1. Download Tracking

Use the `TrackedDownloadLink` component for any downloadable files:

```tsx
import TrackedDownloadLink from '@/components/TrackedDownloadLink';

// Example: Product catalog download
<TrackedDownloadLink
  href="/downloads/Lixel-L2Pro-Catalog-JP.pdf"
  fileName="Lixel-L2Pro-Catalog-JP"
  fileType="pdf"
  className="btn btn-primary"
>
  Download Catalog
</TrackedDownloadLink>
```

## 2. Form Tracking

Already implemented in ContactForm. For other forms:

```tsx
import { analytics } from '@/lib/analytics';

// On successful submission
analytics.trackFormSubmission('newsletter_signup', true);

// On error
analytics.trackFormSubmission('newsletter_signup', false);
```

## 3. Product View Tracking

Add to product pages:

```tsx
import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

export default function ProductPage({ product }) {
  useEffect(() => {
    analytics.trackProductView(product.name, product.category);
  }, [product]);
  
  return (
    // Your product page content
  );
}
```

## 4. Video Engagement Tracking

For video players:

```tsx
import { analytics } from '@/lib/analytics';

// In your video component
<video
  onPlay={() => analytics.trackVideoPlay('Product Demo Video')}
  // other props
/>
```

## 5. External Link Tracking

For links to external sites:

```tsx
import { analytics } from '@/lib/analytics';

<a
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => analytics.trackOutboundLink('https://external-site.com')}
>
  Visit Partner Site
</a>
```

## 6. Search Tracking

If you implement a search feature:

```tsx
import { analytics } from '@/lib/analytics';

const handleSearch = (searchTerm: string) => {
  // Perform search...
  const results = performSearch(searchTerm);
  
  // Track the search
  analytics.trackSearch(searchTerm, results.length);
};
```

## 7. Scroll Depth Tracking

To track how far users scroll:

```tsx
import { useEffect, useRef } from 'react';
import { analytics } from '@/lib/analytics';

export default function LongFormContent() {
  const hasTracked = useRef({
    25: false,
    50: false,
    75: false,
    100: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop + windowHeight) / documentHeight * 100;

      [25, 50, 75, 100].forEach(threshold => {
        if (scrollPercentage >= threshold && !hasTracked.current[threshold]) {
          analytics.trackScrollDepth(threshold);
          hasTracked.current[threshold] = true;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Your content
  );
}
```

## 8. 404 Error Tracking

In your 404 page:

```tsx
import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';
import { usePathname } from 'next/navigation';

export default function NotFoundPage() {
  const pathname = usePathname();
  
  useEffect(() => {
    analytics.track404(pathname);
  }, [pathname]);
  
  return (
    // Your 404 page content
  );
}
```

## 9. Custom Event Tracking

For any custom events:

```tsx
import { trackEvent } from '@/lib/analytics';

// Example: Track feature usage
trackEvent('feature_used', 'engagement', 'dark_mode_toggle', 1);

// Example: Track user preferences
trackEvent('preference_set', 'user_preferences', 'language_japanese');

// Example: Track navigation patterns
trackEvent('navigation', 'user_flow', 'header_menu_products');
```

## Best Practices

1. **Consistent Naming**: Use consistent event names and categories
2. **Meaningful Labels**: Make labels descriptive and actionable
3. **Don't Over-Track**: Focus on events that provide business value
4. **Test Tracking**: Always test tracking in GA4 real-time reports
5. **Privacy First**: Never track personal information

## Testing Your Implementation

1. **Local Testing**:
   - Open browser developer tools
   - Go to Network tab
   - Filter by "google-analytics" or "gtag"
   - Verify requests are being sent

2. **GA4 Real-Time**:
   - Go to GA4 → Reports → Real-time
   - Perform actions on your site
   - Verify events appear immediately

3. **Debug Mode**:
   - Install Google Analytics Debugger Chrome extension
   - Enable debug mode
   - Check console for detailed tracking information