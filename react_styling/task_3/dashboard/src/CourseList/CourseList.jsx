import CourseListRow from './CourseListRow';

function CourseList({ courses = [] }) {
  return (
    <div className="w-4/5 mx-auto my-8">
      <table
        id="CourseList"
        className="w-full border-collapse border border-gray-400"
      >
        <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={true}
          />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
      </table>
    </div>
  );
}

export default CourseList;
