import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Mobile-list from './Mobile-list';

describe('<Mobile-list />', () => {
  test('it should mount', () => {
    render(<Mobile-list />);
    
    const mobileList = screen.getByTestId('Mobile-list');

    expect(mobileList).toBeInTheDocument();
  });
});