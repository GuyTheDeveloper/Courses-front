import { host } from "../../utils";
import "./_course-single-card.scss";

export const CourseSingleCard = ({ course }) => {
  return (
    <div className="course-single-card">
      <div className="course-single-card__inner">
        <h2 className="course-single-card__heading">{course.title}</h2>
        <h2 className="course-single-card__heading">{course.username}</h2>
        <p className="course-single-card__text">{course.description}</p>
        <span className="course-single-card__price">{course.price}</span>
        <button>Start</button>
      </div>
      <img src={`${host}/static/${course.image}`} alt="" />
    </div>
  );
};
