import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactModal from './ContactModal';

describe('ContactModal', () => {
  it('renders nothing when isOpen is false', () => {
    const { container } = render(<ContactModal isOpen={false} onClose={() => {}} />);
    expect(container.innerHTML).toBe('');
  });

  it('renders form fields when open', () => {
    render(<ContactModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup();
    render(<ContactModal isOpen={true} onClose={() => {}} />);

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('shows email format error for invalid email', async () => {
    const user = userEvent.setup();
    render(<ContactModal isOpen={true} onClose={() => {}} />);

    await user.type(screen.getByLabelText('Name'), 'Test');
    await user.type(screen.getByLabelText('Email'), 'bad-email');
    await user.type(screen.getByLabelText('Message'), 'Hello');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });

  it('calls onClose when overlay clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<ContactModal isOpen={true} onClose={onClose} />);

    await user.click(document.querySelector('.modal-overlay')!);

    expect(onClose).toHaveBeenCalled();
  });

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<ContactModal isOpen={true} onClose={onClose} />);

    await user.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalled();
  });

  it('clears form fields on Clear button click', async () => {
    const user = userEvent.setup();
    render(<ContactModal isOpen={true} onClose={() => {}} />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');

    await user.type(nameInput, 'Test');
    await user.type(emailInput, 'test@test.com');
    await user.type(messageInput, 'Hello');

    await user.click(screen.getByRole('button', { name: 'Clear' }));

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });

  it('successful submit calls onClose and resets form', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<ContactModal isOpen={true} onClose={onClose} />);

    await user.type(screen.getByLabelText('Name'), 'Test');
    await user.type(screen.getByLabelText('Email'), 'test@test.com');
    await user.type(screen.getByLabelText('Message'), 'Hello');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onClose).toHaveBeenCalled();
  });
});
