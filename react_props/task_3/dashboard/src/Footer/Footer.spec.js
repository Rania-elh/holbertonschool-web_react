import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

describe('Footer component', () => {
  test('renders "Copyright {currentYear} - Holberton School" in a p element', () => {
    render(<Footer />);
    const expectedText = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;
    const paragraph = screen.getByText(expectedText);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  });
});
