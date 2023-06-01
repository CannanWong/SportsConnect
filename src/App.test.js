import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title element with text EVENTS', () => {
  render(<App />);
  const titleElement = screen.getAllByText(/EVENTS/i)[0];
  expect(titleElement).toBeInTheDocument();
});
