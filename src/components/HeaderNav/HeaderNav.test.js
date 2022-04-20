import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderNav from './HeaderNav';

describe('<HeaderNav />', () => {
  test('it should mount', () => {
    render(<HeaderNav />);
    
    const headerNav = screen.getByTestId('HeaderNav');

    expect(headerNav).toBeInTheDocument();
  });
});