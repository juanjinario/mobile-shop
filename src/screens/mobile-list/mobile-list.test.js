import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MobileListScreen from './mobile-list.screen';

describe('<mobile-list-screen />', () => {
  test('it should mount', () => {
    render(<MobileListScreen />);
    
    const mobileList = screen.getByTestId('mobile-list-screen');

    expect(mobileList).toBeInTheDocument();
  });
});