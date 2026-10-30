import { useContext } from 'react';
import { ReactReduxContext, useSelector } from 'react-redux';
import '../../../styles/CourseList.css';
import CourseListRow from './CourseListRow/CourseListRow';

function CourseListView({ courses = [] }) {
  return (
    <table id="CourseList">
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
  );
}

function CourseListConnected() {
  const courses = useSelector((state) => state.courses.courses);
  return <CourseListView courses={courses} />;
}

function CourseList({ courses }) {
  const redux = useContext(ReactReduxContext);

  if (!redux) {
    return <CourseListView courses={courses} />;
  }

  return <CourseListConnected />;
}

export default CourseList;
