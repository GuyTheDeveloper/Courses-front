import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCourse } from "../../store/slices/courses";
import "./_course-form.scss";

export const CourseForm = () => {
  const { status, isLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = formRef.current;

    let formData = new FormData();
    formData.append("title", form.title.value);
    formData.append("image", selectedFile, selectedFile.name);
    formData.append("price", form.price.value);
    formData.append("description", form.description.value);
    formData.append("category_id", form.category.value);

    dispatch(postCourse(formData));
    status === "success"
      ? console.log("ishlaydi zayebal")
      : console.log("kutib tur zayebal");
  };

  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setImg(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="Title" required />
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
        <img src={img} className={`${img ? "uploadImg" : ""}`} alt="Selected" />
      </label>
      <input
        type="number"
        placeholder="Price"
        name="price"
        max={99999999}
        required
      />
      <select name="category">
        <option value={1}>Web technology</option>
        <option value={2}>Mobile technology</option>
        <option value={3}>Design technology</option>
      </select>
      <input
        name="description"
        type="text"
        placeholder="Description"
        required
      />
      <button type="submit" disabled={isLoading}>
        Create
      </button>
    </form>
  );
};
