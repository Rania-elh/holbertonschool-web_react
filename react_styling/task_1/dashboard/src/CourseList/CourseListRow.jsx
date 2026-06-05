function CourseListRow({
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
}) {
  const rowClass = isHeader ? 'bg-table-header/66' : 'bg-table-rows/45';

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={rowClass}>
          <th colSpan={2} className="border border-gray-400">
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className={rowClass}>
        <th className="border border-gray-400">{textFirstCell}</th>
        <th className="border border-gray-400">{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={rowClass}>
      <td className="border border-gray-400 pl-2">{textFirstCell}</td>
      <td className="border border-gray-400 pl-2">{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
