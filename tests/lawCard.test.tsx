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
  description: 'Full description here...',
  takeaways: [{ title: 'Takeaway 1', content: 'Content 1' }],
  icon: 'schema',
  category: 'flow',
  ways: ['first-way'],
  origin: {
    author: 'Melvin Conway',
    context: '1967 Paper',
    quote: 'Any organization that designs a system...'
  },
  relatedLaws: ['littles-law']
};

describe('LawCard Component Accessibility', () => {
  it('renders as a semantic button with correct title and summary', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /conway's law/i });
    expect(button).toBeInTheDocument();
    expect(button.getAttribute('type')).toBe('button');
    expect(screen.getByText("Conway's Law")).toBeInTheDocument();
    expect(screen.getByText(mockLaw.summary)).toBeInTheDocument();
  });

  it('triggers onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /conway's law/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('RelatedLawRow Component Accessibility', () => {
  it('renders as a semantic button with correct title and summary', () => {
    const handleClick = vi.fn();
    render(<RelatedLawRow law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /conway's law/i });
    expect(button).toBeInTheDocument();
    expect(button.getAttribute('type')).toBe('button');
  });

  it('triggers onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<RelatedLawRow law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /conway's law/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
