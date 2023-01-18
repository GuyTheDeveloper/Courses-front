import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { host } from "../../utils";
import "./_course-card.scss";

export const CourseCard = ({ course }) => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <div className="course__card">
      <img src={`${host}/static/${course.image}`} alt="course" />
      <div className="course__card__inner">
        <h2 className="course__card__heading">{course.title}</h2>
        <h3 className="course__card__user">{course.username}</h3>
        <h3 className="course__card__category">{course.category_name}</h3>
        <div className="course__card__bottom">
          <p>{course.price} UZS</p>
          {loggedIn ? (
            <Link to={`/courses/${course.slug}`} className="course__card__link">
              Learn more <BsFillArrowRightCircleFill />
            </Link>
          ) : null}
        </div>
      </div>
      <button className="course__card__heart">
        <AiOutlineHeart />
      </button>
    </div>
  );
};
