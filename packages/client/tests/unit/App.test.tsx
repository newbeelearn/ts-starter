// packages/client/tests/unit/App.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).not.toBeNull();
  });

  it('contains a main heading', () => {
    render(<App />);
    // This assumes your App has a heading - adjust selector as needed
    const heading = screen.getByRole('heading', { level: 1 }) ||
                    screen.getByText(/welcome/i);
    expect(heading).toBeInTheDocument();
  });
});
