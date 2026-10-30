function CourseListRow({
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
  id = '',
  isChecked = false,
  changeRow = () => {},
}) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(event) => changeRow(id, event.target.checked)}
        />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
