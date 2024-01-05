/**
 * @jest-environment jsdom
 */
import { getByRole, render, screen } from '@testing-library/react';
import Home from '@/pages/home/index';

describe('Home', () => {
  it('Home renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i
    });

    expect(heading).toBeInTheDocument();
  });
  it('Home renders a heading nested', () => {
    render(<Home />);

    const main = screen.getByRole('main');

    getByRole(main, 'heading', {
      name: 'A great framework'
    });
  });
});
