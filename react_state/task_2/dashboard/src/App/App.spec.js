import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('renders the title', () => {
    render(<App />);
    const title = screen.getByRole('heading', {
      level: 1,
      name: /school dashboard/i,
    });
    expect(title).toBeInTheDocument();
  });

  test('renders the logo', () => {
    render(<App />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders the copyright footer', () => {
    render(<App />);
    const footerRegex = /copyright \d{4}.*holberton school/i;
    const footer = screen.getByText(footerRegex);
    expect(footer).toBeInTheDocument();
  });

  test('renders the "News from the School" section by default', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /news from the school/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/holberton school news goes here/i)
    ).toBeInTheDocument();
  });

  describe('when the user is not logged in', () => {
    test('renders the Login form', () => {
      render(<App />);
      expect(
        screen.getByText(/login to access the full dashboard/i)
      ).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    test('does not render the CourseList table', () => {
      const { container } = render(<App />);
      expect(container.querySelector('#CourseList')).toBeNull();
    });
  });

  describe('when the user is logged in', () => {
    test('renders the CourseList table', async () => {
      const user = userEvent.setup();
      const { container } = render(<App />);

      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/password/i), 'password123');
      await user.click(screen.getByRole('button', { name: /ok/i }));

      const table = container.querySelector('table#CourseList');
      expect(table).toBeInTheDocument();
    });

    test('does not render the Login form', async () => {
      const user = userEvent.setup();
      render(<App />);

      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/password/i), 'password123');
      await user.click(screen.getByRole('button', { name: /ok/i }));

      expect(
        screen.queryByText(/login to access the full dashboard/i)
      ).not.toBeInTheDocument();
    });
  });

  describe('when ctrl + h keys are pressed', () => {
    let alertSpy;

    beforeEach(() => {
      alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
      alertSpy.mockRestore();
    });

    test('logs the user out and displays the Login form', async () => {
      const user = userEvent.setup();
      render(<App />);

      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/password/i), 'password123');
      await user.click(screen.getByRole('button', { name: /ok/i }));

      expect(
        screen.queryByText(/login to access the full dashboard/i)
      ).not.toBeInTheDocument();

      fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

      expect(alertSpy).toHaveBeenCalledWith('Logging you out');
      expect(
        screen.getByText(/login to access the full dashboard/i)
      ).toBeInTheDocument();
    });

    test('calls alert with the string "Logging you out"', () => {
      render(<App />);

      fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

      expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    });
  });
});
