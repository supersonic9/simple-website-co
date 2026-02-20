import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Services from './Services';

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: 'What We Do', level: 2 })).toBeInTheDocument();
  });

  it('renders all three card titles', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: 'Simple Sites', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ecommerce', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'SEO & Care', level: 3 })).toBeInTheDocument();
  });

  it('renders all three card descriptions', () => {
    render(<Services />);
    expect(
      screen.getByText(/A clean, professional website that works on every device/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Sell your products online with an easy-to-manage store/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Show up in search results and stay there/i)
    ).toBeInTheDocument();
  });

  it('renders three article cards', () => {
    render(<Services />);
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });
});
