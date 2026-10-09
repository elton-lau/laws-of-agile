import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import LawCard from '../components/LawCard';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'conways-law',
  name: "Conway's Law",
  summary: 'Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.',
  category: 'flow',
  icon: 'schema',
  description: 'Full description',
  takeaways: [],
  origin: { author: 'Melvin Conway', context: '1967', quote: 'Quote' },
  relatedLaws: [],
  resources: [],
};

describe('LawCard Accessibility & Interaction', () => {
  it('renders as a semantic button and handles click events', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Conway's Law/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
