import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CourseCard } from "../../../components/course-card";
import { filterCourse } from "../../../store/slices/courses";

export const CategorySingle = ({ category }) => {
  const { isLoading, courses } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCourse(category));
  }, [category]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        courses?.map((course) => (
          <CourseCard key={course.course_id} course={course} />
        ))
      )}
    </div>
  );
};
