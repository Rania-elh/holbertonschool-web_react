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

  test('renders 2 input elements for email and password', () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput.tagName).toBe('INPUT');
    expect(passwordInput.tagName).toBe('INPUT');
  });

  test('renders 2 label elements with the text Email and Password', () => {
    render(<App />);
    const emailLabel = screen.getByText(/email/i, { selector: 'label' });
    const passwordLabel = screen.getByText(/password/i, { selector: 'label' });
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('renders a button with the text "OK"', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
