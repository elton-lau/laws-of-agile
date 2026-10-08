import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LawCard from '../components/LawCard';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'littles-law',
  name: "Little's Law",
  summary: 'The long-term average number of items in a stationary queue system is equal to the product of long-term average effective arrival rate and average time.',
  description: 'Detailed description',
  icon: 'analytics',
  category: 'flow',
  takeaways: [],
  origin: {
    author: 'John Little',
    context: 'Operations Research',
    quote: 'L = lambda * W'
  },
  relatedLaws: []
};

describe('LawCard Component', () => {
  it('renders as a semantic button element with accessible content', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /Little's Law/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(screen.getByText("Little's Law")).toBeInTheDocument();
    expect(screen.getByText(mockLaw.summary)).toBeInTheDocument();
  });

  it('triggers onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /Little's Law/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
