import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  render(<App />);
});

it('should match the snapshot', () => {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});