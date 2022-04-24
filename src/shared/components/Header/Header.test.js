import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderComponent from './Header';

describe('<Header />', () => {
  test('it should mount', () => {
    render(<HeaderComponent />);
    
    const header = screen.getByTestId('Header');

    expect(header).toBeInTheDocument();
  });
});