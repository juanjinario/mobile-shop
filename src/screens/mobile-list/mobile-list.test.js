import { render, screen } from "@testing-library/react";
import MobileListScreen from './mobile-list.screen';

describe('<mobile-list-screen />', () => {

  const initRender = () => render(<MobileListScreen />);
  
  test('Mobile list screen it should be visible', () => {
    initRender();
    const mobileList = screen.getByTestId('mobile-list-screen');
    expect(mobileList).toBeInTheDocument();
  });

  test('Mobile list screen it should have mobile grid list', () => {
    initRender();
    const mobileList = screen.getByTestId('mobile-list-screen');
    const mobileListGrid = screen.getByTestId('mobile-grid-list');
    expect(mobileList).toContainElement(mobileListGrid);
  });
});