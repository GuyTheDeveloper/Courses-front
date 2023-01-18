import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CourseCard } from "../../../components/course-card";
import { filterCourse } from "../../../store/slices/courses";
import "./_category-single.scss";

export const CategorySingle = ({ category }) => {
  const { isLoading, courses, status } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCourse(category));
  }, [category]);

  return (
    <div className="category-single">
      {isLoading ? (
        <div className="category-single__loader">
          <h2>Loading...</h2>
        </div>
      ) : (
        courses?.map((course) => (
          <CourseCard key={course.course_id} course={course} />
        ))
      )}
      {courses.length === 0 && !isLoading ? (
        <div className="category-single__empty">Empty</div>
      ) : null}
    </div>
  );
};
