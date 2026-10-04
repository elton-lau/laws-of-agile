import { describe, it, expect } from 'vitest';
import { categories, laws, getLawsByLocale } from '../data';

describe('Laws Data Sanity Check', () => {
  it('loads laws correctly for default locale', () => {
    const englishLaws = getLawsByLocale('en');
    expect(englishLaws.length).toBeGreaterThan(0);
  });

  it('contains laws matching categories', () => {
    categories.forEach(category => {
      const categoryLaws = laws.filter(l => l.category === category.id);
      expect(categoryLaws.length).toBeGreaterThan(0);
    });
  });
});
