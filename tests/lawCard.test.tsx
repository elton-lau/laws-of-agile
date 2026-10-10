import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LawCard from '../components/LawCard';
import RelatedLawRow from '../components/RelatedLawRow';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'littles-law',
  name: "Little's Law",
  summary: 'Lead time equals Work in Progress divided by Throughput.',
  description: 'Detailed description of Little\'s Law.',
  icon: 'analytics',
  category: 'flow',
  origin: {
    author: 'John Little',
    context: 'Operations research',
    quote: 'L = W * lambda'
  },
  takeaways: [
    { title: 'Reduce WIP', content: 'Lowering WIP reduces lead time.' }
  ],
  relatedLaws: ['conways-law']
};

describe('LawCard and RelatedLawRow Accessibility', () => {
  it('renders LawCard as a semantic button with accessible role and fires onClick', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Little's Law/i });
    expect(button).toBeDefined();
    expect(button.getAttribute('type')).toBe('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders RelatedLawRow as a semantic button with accessible role and fires onClick', () => {
    const handleClick = vi.fn();
    render(<RelatedLawRow law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Little's Law/i });
    expect(button).toBeDefined();
    expect(button.getAttribute('type')).toBe('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
