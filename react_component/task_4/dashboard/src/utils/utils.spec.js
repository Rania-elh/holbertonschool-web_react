import {
  getCurrentYear,
  getFooterCopy,
  getLatestNotification,
} from './utils';

test('getCurrentYear returns the current year', () => {
  expect(getCurrentYear()).toBe(new Date().getFullYear());
});

test('getFooterCopy returns Holberton School when isIndex is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns Holberton School main dashboard when isIndex is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the urgent notification string', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD',
  );
});
