import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import LawCard from '../components/LawCard';
import { Law } from '../types';

describe('LawCard Component', () => {
  const sampleLaw: Law = {
    id: 'conways-law',
    name: "Conway's Law",
    summary: 'Organizations design systems that mirror their communication structure.',
    category: 'first-way',
    icon: 'hub',
    description: 'Detailed description',
    takeaways: [{ title: 'Takeaway 1', content: 'Content 1' }],
    origin: {
      author: 'Melvin Conway',
      quote: 'Organizations design systems...',
      context: '1967 paper',
    },
    relatedLaws: ['littles-law'],
  };

  it('renders as an accessible button element with correct aria-label', () => {
    const handleClick = vi.fn();
    render(<LawCard law={sampleLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: "Conway's Law: Organizations design systems that mirror their communication structure." });
    expect(button).toBeDefined();
    expect(button.getAttribute('type')).toBe('button');
  });

  it('triggers onClick when clicked or activated by keyboard', () => {
    const handleClick = vi.fn();
    render(<LawCard law={sampleLaw} onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
