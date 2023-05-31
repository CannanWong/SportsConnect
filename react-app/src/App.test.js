import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title element with text EVENTS', () => {
  render(<App />);
  const titleElement = screen.getByText(/EVENTS/i);
  expect(titleElement).toBeInTheDocument();
});
