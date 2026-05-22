import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

test('displays Holberton School when isIndex is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  render(<Footer />);
  const expectedText = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;
  const paragraph = screen.getByText(expectedText);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph.tagName).toBe('P');
});

test('displays Holberton School main dashboard when isIndex is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});
