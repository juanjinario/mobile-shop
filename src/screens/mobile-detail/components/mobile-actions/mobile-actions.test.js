import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MobileInfoComponent from './mobile-actions.component';

describe('<mobile-info-component />', () => {
  test('it should mount', () => {
    render(<MobileInfoComponent />);
    
    const mobileInfo = screen.getByTestId('mobile-info');

    expect(mobileInfo).toBeInTheDocument();
  });
});