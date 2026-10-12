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
  summary: 'WIP limits decrease lead time.',
  icon: 'speed',
  category: 'flow',
  way: 'first-way',
  body: 'Full content',
};

describe('LawCard Accessibility', () => {
  it('renders with role="button", tabIndex 0, and correct aria-label', () => {
    render(<LawCard law={mockLaw} onClick={vi.fn()} />);

    const button = screen.getByRole('button', { name: "Little's Law: WIP limits decrease lead time." });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('tabindex', '0');
  });

  it('triggers onClick when clicked or when Enter/Space key is pressed', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(2);

    fireEvent.keyDown(button, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});

describe('RelatedLawRow Accessibility', () => {
  it('renders with role="button", tabIndex 0, and handles keyboard activation', () => {
    const handleClick = vi.fn();
    render(<RelatedLawRow law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: "Little's Law: WIP limits decrease lead time." });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('tabindex', '0');

    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
