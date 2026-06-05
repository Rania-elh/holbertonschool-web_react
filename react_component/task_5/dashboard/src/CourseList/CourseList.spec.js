import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList component', () => {
  test('renders 5 different rows when it receives an array of courses', () => {
    render(<CourseList courses={coursesList} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5);
  });

  test('renders 1 row in the tbody when it receives an empty array', () => {
    const { container } = render(<CourseList courses={[]} />);
    const tbodyRows = container.querySelectorAll('tbody tr');
    expect(tbodyRows).toHaveLength(1);
    expect(tbodyRows[0]).toHaveTextContent('No course available yet');
  });
});
