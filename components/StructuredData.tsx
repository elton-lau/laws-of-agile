import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Law } from '@/types';

const SITE_URL = 'https://lawsofagile.com';

interface WebsiteSchemaProps {
  type: 'website';
}

interface ArticleSchemaProps {
  type: 'article';
  law: Law;
}

interface BreadcrumbSchemaProps {
  type: 'breadcrumb';
  items: Array<{ name: string; url: string }>;
}

type StructuredDataProps = WebsiteSchemaProps | ArticleSchemaProps | BreadcrumbSchemaProps;

const StructuredData: React.FC<StructuredDataProps> = (props) => {
  const getSchema = () => {
    switch (props.type) {
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Laws of Agile',
          url: SITE_URL,
          description: 'A curated collection of heuristic principles for software engineering, categorized by The Three Ways of DevOps.',
          publisher: {
            '@type': 'Organization',
            name: 'Laws of Agile',
            url: SITE_URL
          }
        };

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: props.law.name,
          description: props.law.summary,
          url: `${SITE_URL}/laws/${props.law.id}`,
          author: {
            '@type': 'Person',
            name: props.law.origin.author
          },
          publisher: {
            '@type': 'Organization',
            name: 'Laws of Agile',
            url: SITE_URL
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/laws/${props.law.id}`
          }
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: props.items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      default:
        return null;
    }
  };

  const schema = getSchema();
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
