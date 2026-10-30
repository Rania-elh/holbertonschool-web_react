import { render, screen, fireEvent } from '@testing-library/react';
import CourseListRow from './CourseListRow';

const renderInTable = (ui) => render(<table><tbody>{ui}</tbody></table>);

describe('CourseListRow component', () => {
  describe('when isHeader is true', () => {
    test('renders one columnheader with colspan=2 when textSecondCell is null', () => {
      renderInTable(
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
      );
      const headers = screen.getAllByRole('columnheader');
      expect(headers).toHaveLength(1);
      expect(headers[0]).toHaveAttribute('colspan', '2');
      expect(headers[0]).toHaveTextContent('Available courses');
    });

    test('renders two th cells when textSecondCell is provided', () => {
      renderInTable(
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      );
      const headers = screen.getAllByRole('columnheader');
      expect(headers).toHaveLength(2);
      expect(headers[0]).toHaveTextContent('Course name');
      expect(headers[1]).toHaveTextContent('Credit');
    });
  });

  describe('when isHeader is false', () => {
    test('renders two td elements inside a tr element', () => {
      const { container } = renderInTable(
        <CourseListRow
          isHeader={false}
          textFirstCell="ES6"
          textSecondCell={60}
        />
      );
      const row = container.querySelector('tbody > tr');
      expect(row).toBeInTheDocument();
      const cells = row.querySelectorAll('td');
      expect(cells).toHaveLength(2);
      expect(cells[0]).toHaveTextContent('ES6');
      expect(cells[1]).toHaveTextContent('60');
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('calls changeRow with the course id and the new checked state', () => {
      const changeRow = jest.fn();
      renderInTable(
        <CourseListRow
          id="1"
          textFirstCell="ES6"
          textSecondCell={60}
          isChecked={false}
          changeRow={changeRow}
        />
      );

      fireEvent.click(screen.getByRole('checkbox'));

      expect(changeRow).toHaveBeenCalledTimes(1);
      expect(changeRow).toHaveBeenCalledWith('1', true);
    });
  });
});
