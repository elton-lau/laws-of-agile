import { describe, it, expect } from 'vitest';
import { getLawByIdAndLocale, getLawsByLocale } from '../data';
import { useMemo } from 'react';

describe('relatedLaws benchmark / computation verification', () => {
  it('correctly filters related laws', () => {
    const law = getLawByIdAndLocale('brooks-law', 'en');
    const laws = getLawsByLocale('en');

    expect(law).toBeDefined();
    if (!law) return;

    const relatedLaws = laws.filter(l => law.relatedLaws.includes(l.id));
    expect(relatedLaws.length).toBeGreaterThan(0);
    expect(relatedLaws.map(l => l.id)).toEqual(expect.arrayContaining(law.relatedLaws));
  });

  it('benchmarks unmemoized vs memoized evaluation across re-renders', () => {
    const law = getLawByIdAndLocale('brooks-law', 'en')!;
    const laws = getLawsByLocale('en');

    const reRenders = 100000;

    // Baseline: Unmemoized (recalculated every re-render)
    const unmemoizedStart = performance.now();
    let unmemoizedResult;
    for (let i = 0; i < reRenders; i++) {
      unmemoizedResult = laws.filter(l => law.relatedLaws.includes(l.id));
    }
    const unmemoizedDuration = performance.now() - unmemoizedStart;

    // Optimized: Memoized (cached reference reused across re-renders when inputs remain unchanged)
    const memoizedStart = performance.now();
    // Simulating react useMemo cache hit
    let cachedResult = laws.filter(l => law.relatedLaws.includes(l.id));
    let cachedDeps = [laws, law.relatedLaws];
    let memoizedResult;

    for (let i = 0; i < reRenders; i++) {
      // Simulate useMemo dependency check
      if (cachedDeps[0] === laws && cachedDeps[1] === law.relatedLaws) {
        memoizedResult = cachedResult;
      } else {
        cachedResult = laws.filter(l => law.relatedLaws.includes(l.id));
        cachedDeps = [laws, law.relatedLaws];
        memoizedResult = cachedResult;
      }
    }
    const memoizedDuration = performance.now() - memoizedStart;

    console.log(`[Benchmark] ${reRenders} re-renders:`);
    console.log(`  - Unmemoized: ${unmemoizedDuration.toFixed(2)}ms`);
    console.log(`  - Memoized:   ${memoizedDuration.toFixed(2)}ms`);

    expect(memoizedResult).toEqual(unmemoizedResult);
    expect(memoizedDuration).toBeLessThan(unmemoizedDuration);
  });
});
