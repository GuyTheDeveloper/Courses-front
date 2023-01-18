import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CourseSingleCard } from "../../../components/course-single-card/course-single-card";
import { getSingleCourse } from "../../../store/slices/courses";

export const CourseSingle = () => {
  const { slug } = useParams();
  const { courses, isLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCourse(slug));
  }, [slug]);
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        courses.map((course) => (
          <CourseSingleCard key={course.course_id} course={course} />
        ))
      )}
    </div>
  );
};
