import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LawCard from '../components/LawCard';
import RelatedLawRow from '../components/RelatedLawRow';
import { Law } from '../types';

const mockLaw: Law = {
  id: 'test-law',
  name: 'Test Law',
  summary: 'Summary of test law',
  category: 'flow',
  icon: 'speed',
  origin: {
    author: 'Author Name',
    context: 'Test Context',
    quote: 'Test Quote',
  },
  takeaways: [
    { title: 'Takeaway 1', content: 'Content 1' }
  ],
  relatedLaws: [],
  resources: [],
  description: 'Full description of test law',
  locale: 'en',
  slug: 'test-law',
};

describe('LawCard Accessibility', () => {
  it('renders as a button element and handles click events', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /test law/i });
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('RelatedLawRow Accessibility', () => {
  it('renders as a button element and handles click events', () => {
    const handleClick = vi.fn();
    render(<RelatedLawRow law={mockLaw} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /test law/i });
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
