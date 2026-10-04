import { describe, it, expect } from 'vitest';
import { categories, laws } from '../data';
import { Law } from '../types';

describe('Home laws filtering benchmark', () => {
  it('benchmarks filtering vs grouping laws by category', () => {
    const ITERATIONS = 10000;

    // Warm up JS engine JIT
    for (let i = 0; i < 1000; i++) {
      categories.forEach(category => laws.filter(law => law.category === category.id));
    }

    // Baseline: Repeated filtering on every render for each category (unmemoized)
    const startFilter = performance.now();
    for (let i = 0; i < ITERATIONS; i++) {
      categories.forEach(category => {
        const categoryLaws = laws.filter(law => law.category === category.id);
        expect(categoryLaws.length).toBeGreaterThanOrEqual(0);
      });
    }
    const durationFilter = performance.now() - startFilter;

    // Pre-computation (done once inside useMemo when laws dependency changes)
    const lawsByCategoryMap = laws.reduce((acc, law) => {
      if (!acc[law.category]) {
        acc[law.category] = [];
      }
      acc[law.category].push(law);
      return acc;
    }, {} as Record<string, Law[]>);

    // Optimized render loop: Direct dictionary lookups on re-renders
    const startLookupOnly = performance.now();
    for (let i = 0; i < ITERATIONS; i++) {
      categories.forEach(category => {
        const categoryLaws = lawsByCategoryMap[category.id] || [];
        expect(categoryLaws.length).toBeGreaterThanOrEqual(0);
      });
    }
    const durationLookupOnly = performance.now() - startLookupOnly;

    console.log(`\n--- BENCHMARK RESULTS (${ITERATIONS} iterations across ${categories.length} categories) ---`);
    console.log(`Unmemoized Filter Duration (Per Render loop): ${durationFilter.toFixed(3)} ms`);
    console.log(`Memoized Lookups Duration (Per Render loop): ${durationLookupOnly.toFixed(3)} ms`);

    const speedupLookups = ((durationFilter - durationLookupOnly) / durationFilter) * 100;
    console.log(`Render Loop Speedup: ${speedupLookups.toFixed(2)}% faster\n--------------------------------------------------------------\n`);

    expect(durationLookupOnly).toBeLessThan(durationFilter);
  });
});
