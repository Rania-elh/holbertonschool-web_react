import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging';

class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

afterEach(() => {
  cleanup();
});

describe('WithLogging HOC', () => {
  test('renders the wrapped component (heading with the expected text)', () => {
    const MockAppWithLogging = WithLogging(MockApp);
    render(<MockAppWithLogging />);

    expect(
      screen.getByRole('heading', { name: /hello from mock app component/i })
    ).toBeInTheDocument();
  });

  test('logs on mount and unmount with the wrapped component name', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const MockAppWithLogging = WithLogging(MockApp);

    const { unmount } = render(<MockAppWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is mounted');

    unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Component MockApp is going to unmount'
    );

    consoleSpy.mockRestore();
  });

  test('defaults the name to "Component" when wrapping a nameless component', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const Nameless = () => <p>nameless</p>;
    Object.defineProperty(Nameless, 'name', { value: '' });

    const Wrapped = WithLogging(Nameless);
    const { unmount } = render(<Wrapped />);
    unmount();

    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Component Component is going to unmount'
    );

    consoleSpy.mockRestore();
  });
});
