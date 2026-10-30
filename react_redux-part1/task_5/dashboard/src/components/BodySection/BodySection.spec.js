import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection component', () => {
  test('renders a heading with the title prop value', () => {
    render(<BodySection title="test title" />);
    const heading = screen.getByRole('heading', { name: /test title/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders any number of children passed to it', () => {
    render(
      <BodySection title="test">
        <p>child one</p>
        <p>child two</p>
      </BodySection>
    );
    expect(screen.getByText('child one')).toBeInTheDocument();
    expect(screen.getByText('child two')).toBeInTheDocument();
  });
});
