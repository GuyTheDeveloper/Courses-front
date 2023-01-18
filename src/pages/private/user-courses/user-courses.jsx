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
  console.log(courses);

  return (
    // <div>
    //   <div className="user-courses">
    //     <div className="user-courses__header">
    //       <span>Id</span>
    //       <span>Name</span>
    //       <span>Price</span>
    //       <span>Image</span>
    //       <span>Description</span>
    //     </div>
    //     {isLoading ? (
    //       <h1>Loading...</h1>
    //     ) : (
    //       courses.map((course, index) => (
    //         <CourseItem
    //           key={course.course_id}
    //           course={course}
    //           index={index + 1}
    //         />
    //       ))
    //     )}
    //   </div>
    // </div>

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
          <h1>Loading...</h1>
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
