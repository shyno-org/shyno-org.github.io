import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shyno name', () => {
  render(<App />);
  const linkElement = screen.getByText(/shyno/i);
  expect(linkElement).toBeInTheDocument();
});
