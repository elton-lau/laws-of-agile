import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LawCard from '../components/LawCard';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'conways-law',
  name: "Conway's Law",
  summary: 'Organizations design systems that mirror their communication structure.',
  description: 'Detailed description',
  category: 'flow',
  icon: 'schema',
  takeaways: [],
  origin: {
    author: 'Melvin Conway',
    context: '1967 paper',
    quote: 'Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.',
  },
  relatedLaws: [],
};

describe('LawCard Accessibility', () => {
  it('renders as a focusable button element and triggers onClick', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Conway's Law/i });
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
