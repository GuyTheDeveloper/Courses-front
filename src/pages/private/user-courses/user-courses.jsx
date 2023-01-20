import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CourseItem } from "../../../components/course-item";
import { getUsersCourse } from "../../../store/slices/courses";
import "./_user-courses.scss";

export const UserCourses = () => {
  const { isLoading, courses } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersCourse());
  }, []);

  return (
    <table className="user-courses">
      <thead className="user-courses__header">
        <th>Id</th>
        <th>Title</th>
        <th>Price</th>
        <th>Img</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <h1>Loading...</h1>
          </tr>
        ) : (
          courses.map((course, index) => (
            <CourseItem
              key={course.course_id}
              course={course}
              index={index + 1}
            />
          ))
        )}
      </tbody>
    </table>
  );
};
