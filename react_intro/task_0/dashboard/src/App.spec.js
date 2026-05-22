import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the h1 element with the text "School dashboard"', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the body paragraph with the login text', () => {
    render(<App />);
    const bodyParagraph = screen.getByText(
      /login to access the full dashboard/i,
    );
    expect(bodyParagraph).toBeInTheDocument();
  });

  test('renders the footer paragraph with the copyright text', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    const footerParagraph = screen.getByText(
      new RegExp(`copyright\\s+${currentYear}\\s+-\\s+holberton school`, 'i'),
    );
    expect(footerParagraph).toBeInTheDocument();
  });

  test('renders an img element with the holberton logo alt text', () => {
    render(<App />);
    const image = screen.getByAltText(/holberton logo/i);
    expect(image).toBeInTheDocument();
  });
});
