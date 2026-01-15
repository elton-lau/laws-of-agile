import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://lawsofagile.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  article?: {
    author?: string;
    publishedTime?: string;
  };
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords,
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  article
}) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const defaultDescription = 'A curated collection of heuristic principles for software engineering, categorized by The Three Ways of DevOps.';
  const metaDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Laws of Agile" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
    </Helmet>
  );
};

export default SEO;
