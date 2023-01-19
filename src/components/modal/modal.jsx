import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import "./_modal.scss";
import { updateCourse } from "../../store/slices/courses";

export const Modal = ({ open, setOpen, course, img }) => {
  const { status, isLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = formRef.current;

    let formData = new FormData();
    formData.append("title", form.title.value);
    formData.append("price", form.price.value);
    formData.append("category_id", form.category.value);
    if (selectedFile) {
      formData.append("image", selectedFile, selectedFile.name);
    }

    formData = {
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      category_id: form.category.value,
    };

    dispatch(updateCourse({ course_id: course.course_id, formData }));
    status === "success"
      ? console.log("ishladi")
      : console.log("kutib tur zayebal");
  };

  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setImage(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <>
      <div className="modal">
        <div className="modal-wrapper">
          <div className="modal__header">
            <span>Update your course</span>{" "}
            <button
              onClick={() => setOpen(false)}
              className="modal__header__close"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="modal__body">
            <form ref={formRef} className="modal__body">
              <input
                name="title"
                className="modal__title"
                type="text"
                placeholder="Title"
                defaultValue={course.title}
                required
              />
              <input
                className="modal__price"
                type="number"
                placeholder="Price"
                name="price"
                maxLength={8}
                defaultValue={course.price}
                required
              />
              <select name="category" defaultValue={course.category_id}>
                <option value={1}>Web technology</option>
                <option value={2}>Mobile technology</option>
                <option value={3}>Design technology</option>
              </select>

              <div className="modal__center">
                {" "}
                <label htmlFor="image" className="drop-container">
                  +<span className="drop-title">Upload</span>
                  <input
                    name="image"
                    type="file"
                    id="image"
                    accept="image/*"
                    className="fileUpload"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    required
                  />
                  <img
                    src={image ? image : img}
                    className={`${image || img ? "uploadImg" : ""}`}
                    alt="Selected"
                  />
                </label>
                <textarea
                  name="description"
                  className="modal__description"
                  defaultValue={course.description}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className="modal__footer">
                <button type="reset" onClick={() => setOpen(false)}>
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
