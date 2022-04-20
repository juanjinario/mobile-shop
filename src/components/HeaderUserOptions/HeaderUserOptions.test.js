import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderUserOptions from './HeaderUserOptions';

describe('<HeaderUserOptions />', () => {
  test('it should mount', () => {
    render(<HeaderUserOptions />);
    
    const headerUserOptions = screen.getByTestId('HeaderUserOptions');

    expect(headerUserOptions).toBeInTheDocument();
  });
});