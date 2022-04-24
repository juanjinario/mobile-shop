import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MobileGridListComponent from './Mobile-card';

describe('<mobile-card-component />', () => {
  test('it should mount', () => {
    render(<MobileGridListComponent />);
    
    const mobileGridList = screen.getByTestId('mobile-grid-list');

    expect(mobileGridList).toBeInTheDocument();
  });
});