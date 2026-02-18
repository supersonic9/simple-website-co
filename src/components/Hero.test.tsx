import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';

describe('Hero', () => {
  it('renders headline and CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('We build websites that small businesses love')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Contact Us' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Our Work' })).toBeInTheDocument();
  });

  it('opens ContactModal when "Contact Us" clicked', async () => {
    const user = userEvent.setup();
    render(<Hero />);

    await user.click(screen.getByRole('button', { name: 'Contact Us' }));

    expect(screen.getByText('Get in touch')).toBeInTheDocument();
  });

  it('modal closes when close action triggered', async () => {
    const user = userEvent.setup();
    render(<Hero />);

    await user.click(screen.getByRole('button', { name: 'Contact Us' }));
    expect(screen.getByText('Get in touch')).toBeInTheDocument();

    await user.click(screen.getByLabelText('Close'));
    expect(screen.queryByText('Get in touch')).not.toBeInTheDocument();
  });
});
