import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    render(<Notifications />);
    expect(
      screen.getByText(/here is the list of notifications/i),
    ).toBeInTheDocument();
  });

  test('renders 3 li notification items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  test('renders a close button', () => {
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test('logs "Close button has been clicked" when the close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });

  test('renders the urgent requirement notification in bold', () => {
    const { container } = render(<Notifications />);
    const strong = container.querySelector('strong');
    expect(strong).toBeInTheDocument();
    expect(strong.textContent).toMatch(/urgent requirement/i);
  });
});
