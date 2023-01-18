import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CourseCard } from "../../../components/course-card";
import { getCourse } from "../../../store/slices/courses";
import "./_home.scss";

export const Home = () => {
  const { isLoading, courses } = useSelector((state) => state.course);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourse());
  }, []);

  return (
    <div className="home">
      {isLoading ? (
        <div className="home__loader">
          <h2>Loading...</h2>
        </div>
      ) : (
        courses.map((course) => (
          <CourseCard key={course.courseId} course={course} />
        ))
      )}
    </div>
  );
};
