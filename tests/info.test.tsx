import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import i18n from '../i18n';
import Info from '../pages/Info';
import { HelmetProvider } from 'react-helmet-async';
import enTranslation from '../public/locales/en/translation.json';

describe('Info Component Security & Rendering', () => {
  beforeEach(async () => {
    if (!i18n.isInitialized) {
      await i18n.init({
        lng: 'en',
        fallbackLng: 'en',
        resources: {
          en: {
            translation: enTranslation,
          },
        },
      });
    } else {
      i18n.addResourceBundle('en', 'translation', enTranslation, true, true);
      await i18n.changeLanguage('en');
    }
  });

  it('renders projectIntro safely without dangerouslySetInnerHTML', () => {
    const { container } = render(
      <HelmetProvider>
        <Info />
      </HelmetProvider>
    );

    // Verify strong tag is properly rendered
    const strongElement = screen.getByText('Three Ways');
    expect(strongElement.tagName).toBe('STRONG');

    // Ensure no element has dangerouslySetInnerHTML attribute/usage or raw html strings in rendered output
    const htmlString = container.innerHTML;
    expect(htmlString).not.toContain('dangerouslySetInnerHTML');
    expect(htmlString).toContain('<strong>Three Ways</strong>');
  });
});
