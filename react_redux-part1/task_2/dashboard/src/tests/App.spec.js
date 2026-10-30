import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

async function logInUser(user) {
  await user.type(screen.getByLabelText(/email/i), 'test@example.com');
  await user.type(screen.getByLabelText(/password/i), 'password123');
  await user.click(screen.getByRole('button', { name: /ok/i }));
}

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

    test('does not render the logoutSection', () => {
      const { container } = render(<App />);
      expect(container.querySelector('#logoutSection')).toBeNull();
    });
  });

  describe('when the user is logged in', () => {
    test('renders the CourseList table', async () => {
      const user = userEvent.setup();
      const { container } = render(<App />);

      await logInUser(user);

      const table = container.querySelector('table#CourseList');
      expect(table).toBeInTheDocument();
    });

    test('does not render the Login form', async () => {
      const user = userEvent.setup();
      render(<App />);

      await logInUser(user);

      expect(
        screen.queryByText(/login to access the full dashboard/i)
      ).not.toBeInTheDocument();
    });

    test('renders the logoutSection with the user email', async () => {
      const user = userEvent.setup();
      const { container } = render(<App />);

      await logInUser(user);

      expect(container.querySelector('#logoutSection')).toBeInTheDocument();
      expect(screen.getByText(/welcome test@example.com/i)).toBeInTheDocument();
    });

    test('renders the "Contact us" link in the Footer', async () => {
      const user = userEvent.setup();
      render(<App />);

      await logInUser(user);

      expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
    });
  });

  describe('when a notification item is clicked', () => {
    test('removes the notification from the list and logs the expected message', async () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      render(<App />);

      fireEvent.click(screen.getByText(/your notifications/i));
      expect(screen.getAllByRole('listitem')).toHaveLength(3);

      const items = screen.getAllByRole('listitem');
      fireEvent.click(items[0]);

      expect(consoleSpy).toHaveBeenCalledWith(
        'Notification 1 has been marked as read'
      );
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
      expect(screen.queryByText('New course available')).not.toBeInTheDocument();

      consoleSpy.mockRestore();
    });
  });

  describe('when the user logs out', () => {
    test('updates the interface when clicking the logout link in the Header', async () => {
      const user = userEvent.setup();
      const { container } = render(<App />);

      await logInUser(user);

      expect(container.querySelector('#CourseList')).toBeInTheDocument();
      expect(container.querySelector('#logoutSection')).toBeInTheDocument();

      fireEvent.click(screen.getByRole('link', { name: /logout/i }));

      expect(container.querySelector('#CourseList')).toBeNull();
      expect(container.querySelector('#logoutSection')).toBeNull();
      expect(
        screen.getByText(/login to access the full dashboard/i)
      ).toBeInTheDocument();
    });

    test('updates the interface when ctrl + h keys are pressed', async () => {
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      const user = userEvent.setup();
      const { container } = render(<App />);

      await logInUser(user);

      expect(container.querySelector('#CourseList')).toBeInTheDocument();

      fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

      expect(alertSpy).toHaveBeenCalledWith('Logging you out');
      expect(container.querySelector('#CourseList')).toBeNull();
      expect(
        screen.getByText(/login to access the full dashboard/i)
      ).toBeInTheDocument();

      alertSpy.mockRestore();
    });
  });
});
