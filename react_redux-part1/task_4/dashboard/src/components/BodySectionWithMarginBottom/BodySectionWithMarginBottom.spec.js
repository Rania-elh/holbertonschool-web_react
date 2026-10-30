import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom component', () => {
  test('contains a div with the class bodySectionWithMargin', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test">
        <p>test</p>
      </BodySectionWithMarginBottom>
    );
    expect(container.querySelector('.bodySectionWithMargin')).toBeInTheDocument();
  });

  test('renders the BodySection component', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test title">
        <p>child content</p>
      </BodySectionWithMarginBottom>
    );
    expect(container.querySelector('.bodySection')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /test title/i })
    ).toBeInTheDocument();
    expect(screen.getByText('child content')).toBeInTheDocument();
  });
});
