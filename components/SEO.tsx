import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        
        // Parse selector to set attributes (simple version for name/property)
        if (selector.includes('[name=')) {
           const name = selector.match(/name="([^"]+)"/)?.[1];
           if (name) element.setAttribute('name', name);
        } else if (selector.includes('[property=')) {
           const property = selector.match(/property="([^"]+)"/)?.[1];
           if (property) element.setAttribute('property', property);
        }

        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    if (description) {
      updateMeta('meta[name="description"]', 'content', description);
      updateMeta('meta[property="og:description"]', 'content', description);
    }

    if (keywords && keywords.length > 0) {
      updateMeta('meta[name="keywords"]', 'content', keywords.join(', '));
    }

    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:url"]', 'content', window.location.href);

  }, [title, description, keywords]);

  return null;
};

export default SEO;