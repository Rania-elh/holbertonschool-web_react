import {
  getCurrentYear,
  getFooterCopy,
  getLatestNotification,
} from './utils';

describe('utils', () => {
  describe('getCurrentYear', () => {
    test('returns the current year', () => {
      const expectedYear = new Date().getFullYear();
      expect(getCurrentYear()).toBe(expectedYear);
    });

    test('returns a number', () => {
      expect(typeof getCurrentYear()).toBe('number');
    });
  });

  describe('getFooterCopy', () => {
    test('returns "Holberton School" when isIndex is true', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('returns "Holberton School main dashboard" when isIndex is false', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  });

  describe('getLatestNotification', () => {
    test('returns the correct urgent notification string', () => {
      expect(getLatestNotification()).toBe(
        '<strong>Urgent requirement</strong> - complete by EOD',
      );
    });
  });
});
