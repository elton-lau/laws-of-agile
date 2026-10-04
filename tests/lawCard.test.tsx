import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LawCard from '../components/LawCard';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'conways-law',
  name: "Conway's Law",
  summary: 'Organizations design systems that mirror their communication structure.',
  category: 'flow',
  icon: 'schema',
  description: 'Full description here',
  takeaways: [{ title: 'Takeaway 1', content: 'Content 1' }],
  origin: { author: 'Melvin Conway', quote: 'Quote', context: 'Context' },
  relatedLaws: [],
  resources: [],
};

describe('LawCard Component Keyboard Accessibility', () => {
  it('renders with button role, tabIndex=0, and aria-label', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const cardButton = screen.getByRole('button', { name: "Conway's Law" });
    expect(cardButton).toBeDefined();
    expect(cardButton.getAttribute('tabindex')).toBe('0');
    expect(cardButton.getAttribute('aria-label')).toBe("Conway's Law");
  });

  it('triggers onClick on mouse click', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const cardButton = screen.getByRole('button', { name: "Conway's Law" });
    fireEvent.click(cardButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('triggers onClick when Enter key is pressed', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const cardButton = screen.getByRole('button', { name: "Conway's Law" });
    fireEvent.keyDown(cardButton, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('triggers onClick when Space key is pressed', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const cardButton = screen.getByRole('button', { name: "Conway's Law" });
    fireEvent.keyDown(cardButton, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
