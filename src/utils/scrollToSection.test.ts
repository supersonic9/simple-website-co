import { describe, it, expect, vi } from 'vitest';
import { scrollToSection } from './scrollToSection';

describe('scrollToSection', () => {
  it('scrolls to element when found', () => {
    const el = document.createElement('div');
    el.id = 'test-section';
    el.scrollIntoView = vi.fn();
    document.body.appendChild(el);

    scrollToSection('test-section');

    expect(el.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    document.body.removeChild(el);
  });

  it('does nothing when element not found', () => {
    expect(() => scrollToSection('nonexistent')).not.toThrow();
  });
});
