function CourseListRow({
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
}) {
  const bgClass = isHeader ? 'bg-table-header/66' : 'bg-table-rows/45';
  const thClass = `border border-gray-400 ${bgClass}`;
  const tdClass = `border border-gray-400 pl-2 ${bgClass}`;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan={2} className={thClass}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr>
        <th className={thClass}>{textFirstCell}</th>
        <th className={thClass}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr>
      <td className={tdClass}>{textFirstCell}</td>
      <td className={tdClass}>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
