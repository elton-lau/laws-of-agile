import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import LawCard from '../components/LawCard';
import RelatedLawRow from '../components/RelatedLawRow';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'conways-law',
  name: "Conway's Law",
  category: 'flow',
  icon: 'schema',
  summary: 'Organizations design systems that mirror their communication structure.',
  description: 'Full description of Conway Law',
  origin: {
    author: 'Melvin Conway',
    context: 'Paper in Datamation, 1967',
    quote: 'Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.'
  },
  takeaways: [
    {
      title: 'Structure mirrors communication',
      content: 'Team structure directly influences software architecture.'
    }
  ],
  relatedLaws: ['littles-law'],
  resources: []
};

describe('LawCard Accessibility & Interaction', () => {
  it('renders as a semantic button with proper aria-label and triggers onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', {
      name: `${mockLaw.name}: ${mockLaw.summary}`
    });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('RelatedLawRow Accessibility & Interaction', () => {
  it('renders as a semantic button with proper aria-label and triggers onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<RelatedLawRow law={mockLaw} onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', {
      name: `${mockLaw.name}: ${mockLaw.summary}`
    });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
