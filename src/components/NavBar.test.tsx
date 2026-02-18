import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect,it } from 'vitest';

import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders logo and nav links', () => {
    render(<NavBar />);
    expect(screen.getByAltText('Simple Web Co Logo')).toBeInTheDocument();
    expect(screen.getByText('Simple Web Co')).toBeInTheDocument();
    expect(screen.getAllByText('What We Do').length).toBeGreaterThan(0);
    expect(screen.getAllByText("FAQ's").length).toBeGreaterThan(0);
  });

  it('mobile menu toggles open/closed on hamburger click', async () => {
    const user = userEvent.setup();
    render(<NavBar />);

    const toggle = screen.getByLabelText('Toggle mobile menu');
    const mobileNav = document.querySelector('.mobile-nav')!;

    expect(mobileNav).not.toHaveClass('open');

    await user.click(toggle);
    expect(mobileNav).toHaveClass('open');

    await user.click(toggle);
    expect(mobileNav).not.toHaveClass('open');
  });

  it('mobile menu closes when a nav link is clicked', async () => {
    const user = userEvent.setup();
    render(<NavBar />);

    const toggle = screen.getByLabelText('Toggle mobile menu');
    await user.click(toggle);

    const mobileNav = document.querySelector('.mobile-nav')!;
    expect(mobileNav).toHaveClass('open');

    const mobileLinks = mobileNav.querySelectorAll('a');
    await user.click(mobileLinks[0]);

    expect(mobileNav).not.toHaveClass('open');
  });
});
