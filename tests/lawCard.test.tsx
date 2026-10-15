import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LawCard from '../components/LawCard';
import { Law } from '../types';

const mockLaw: Law = {
  id: "test-law",
  name: "Test Law",
  summary: "This is a test summary for Test Law.",
  way: "flow",
  category: "agile-foundations",
  icon: "gavel",
  body: "Test body text"
};

describe('LawCard Component Accessibility & Interaction', () => {
  it('renders as a semantic button with proper ARIA attributes', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /Test Law/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
    expect(buttonElement).toHaveAttribute('type', 'button');
  });

  it('triggers onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<LawCard law={mockLaw} onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /Test Law/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
