import { host } from "../../utils";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./_course-item.scss";
import { Modal } from "../modal";
import { useState } from "react";
import { deleteCourse } from "../../store/slices/courses";
import { useDispatch } from "react-redux";

export const CourseItem = ({ course, index }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <tr className="course-item">
        <td>{index}</td>
        <th>{course.title}</th>
        <td>{course.price}</td>
        <td>
          <img src={`${host}/static/${course.image}`} width={60} height={60} />
        </td>
        <td>
          <button onClick={() => setOpen(true)}>
            <FaEdit />
          </button>
          <button>
            <MdDelete
              onClick={() => dispatch(deleteCourse(course.course_id))}
            />
          </button>
        </td>
      </tr>
      {open ? (
        <Modal
          open={open}
          setOpen={setOpen}
          course={course}
          img={`${host}/static/${course.image}`}
        />
      ) : null}
    </>
  );
};
