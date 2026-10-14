import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LawCard from '../components/LawCard';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'conways-law',
  name: "Conway's Law",
  summary: 'Organizations design systems that mirror their communication structures.',
  icon: 'hub',
  category: 'flow',
  locale: 'en',
  relatedLaws: [],
  description: 'Full description here.',
  takeaways: [],
  origin: {
    author: 'Melvin Conway',
    year: '1967',
    quote: 'Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.',
    context: 'Context here.',
  },
};

describe('LawCard Accessibility & Keyboard Navigation', () => {
  it('renders with button role, tabIndex, aria-label and triggers onClick on click', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const card = screen.getByRole('button', { name: "Conway's Law" });
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('tabindex', '0');

    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('triggers onClick when Enter or Space key is pressed', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const card = screen.getByRole('button', { name: "Conway's Law" });

    fireEvent.keyDown(card, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(card, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);

    fireEvent.keyDown(card, { key: 'Escape' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
