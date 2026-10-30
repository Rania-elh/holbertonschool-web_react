import { useDispatch, useSelector } from 'react-redux';
import './CourseList.css';
import CourseListRow from './CourseListRow/CourseListRow.jsx';
import { selectCourse, unSelectCourse } from '../../features/courses/coursesSlice.js';

function CourseList() {
  const dispatch = useDispatch();
  const selectedCourses = useSelector((state) => state.courses?.courses);
  const courses = Array.isArray(selectedCourses) ? selectedCourses : [];

  const onChangeRow = (id, checked) => {
    if (checked) {
      dispatch(selectCourse(id));
    } else {
      dispatch(unSelectCourse(id));
    }
  };

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
              id={String(course.id)}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isChecked={course.isSelected === true}
              changeRow={onChangeRow}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default CourseList;
