import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import LawCard from '../components/LawCard';
import RelatedLawRow from '../components/RelatedLawRow';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'conways-law',
  name: "Conway's Law",
  summary: 'Organizations design systems that mirror their communication structure.',
  description: 'Detailed description of Conway Law.',
  category: 'first-way',
  icon: 'schema',
  origin: {
    author: 'Melvin Conway',
    year: 1967,
    context: 'How committees create software',
    quote: 'Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.',
  },
  takeaways: [
    {
      title: 'Communication structure',
      content: 'Structure teams according to desired architecture.',
    },
  ],
  relatedLaws: ['brooks-law'],
};

describe('LawCard and RelatedLawRow Accessibility', () => {
  it('renders LawCard as a button element and calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Conway's Law/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders RelatedLawRow as a button element and calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<RelatedLawRow law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Conway's Law/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
