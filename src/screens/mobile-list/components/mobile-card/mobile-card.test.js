import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MobileCardComponent from './Mobile-card';

describe('<mobile-card-component />', () => {
  test('it should mount', () => {
    render(<MobileCardComponent />);
    
    const mobileCard = screen.getByTestId('mobile-card');

    expect(mobileCard).toBeInTheDocument();
  });
});