import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import LawCard from '../components/LawCard';
import RelatedLawRow from '../components/RelatedLawRow';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'littles-law',
  name: "Little's Law",
  summary: 'The long-term average number of items in a stationary queue system equals the long-term average effective arrival rate multiplied by the average time that an item spends in the system.',
  description: 'Detailed description...',
  icon: 'queue',
  category: 'flow',
  takeaways: [],
  origin: { author: 'John Little', quote: 'Quote', context: 'Context' },
  resources: [],
  relatedLaws: ['conways-law'],
};

describe('LawCard Component Accessibility & Interaction', () => {
  it('renders as a button element with law details', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Little's Law/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByText("Little's Law")).toBeInTheDocument();
    expect(screen.getByText(mockLaw.summary)).toBeInTheDocument();
  });

  it('triggers onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Little's Law/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('RelatedLawRow Component Accessibility & Interaction', () => {
  it('renders as a button element with law details', () => {
    const handleClick = vi.fn();
    render(<RelatedLawRow law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Little's Law/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByText("Little's Law")).toBeInTheDocument();
    expect(screen.getByText(mockLaw.summary)).toBeInTheDocument();
  });

  it('triggers onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<RelatedLawRow law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Little's Law/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
