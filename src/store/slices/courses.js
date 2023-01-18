import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../service/api";

export const getCourse = createAsyncThunk("course/getAll", async () => {
  let response = await axios.get("/courses");
  return response.data;
});

export const postCourse = createAsyncThunk(
  "course/createCourse",
  async (body) => {
    let response = await axios.post("/courses", body);
    return response.data;
  }
);

export const filterCourse = createAsyncThunk(
  "course/filterCourse",
  async (categoryId) => {
    let response = await axios.get(`/courses?categoryId=${categoryId}`);
    return response.data;
  }
);

export const getUsersCourse = createAsyncThunk(
  "course/getUsersCourse",
  async () => {
    let response = await axios.get("/user/courses");
    return response.data;
  }
);

export const getSingleCourse = createAsyncThunk(
  "course/getSingleCourse",
  async (slug) => {
    let response = await axios.get(`/courses/${slug}`);
    return response.data;
  }
);

export const updateCourse = createAsyncThunk(
  "course/updateCourse",
  async ({ course_id, formData }) => {
    let response = await axios.put(`/courses/${course_id}`, formData);
    return { course_id, formData, course: response.data.data };
  }
);

export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (course_id) => {
    let response = await axios.delete(`/courses/${course_id}`);
    return course_id;
  }
);

const initialState = {
  isLoading: false,
  status: "idle",
  courses: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getCourse.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(getCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
    });
    build.addCase(getCourse.rejected, (state) => {
      state.isLoading = false;
    });
    build.addCase(filterCourse.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(filterCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
    });
    build.addCase(filterCourse.rejected, (state) => {
      state.isLoading = false;
    });
    build.addCase(getUsersCourse.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(getUsersCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
    });
    build.addCase(getUsersCourse.rejected, (state) => {
      state.isLoading = false;
    });
    build.addCase(postCourse.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(postCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses.push(action.payload.data);
      state.status = "success";
    });
    build.addCase(postCourse.rejected, (state) => {
      state.isLoading = false;
      state.status = "rejected";
    });
    build.addCase(updateCourse.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(updateCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      const courses = state.courses.filter(
        (course) => course.course_id != action.payload.course_id
      );
      state.courses = [...courses, action.payload.course];
      state.status = "success";
    });
    build.addCase(updateCourse.rejected, (state) => {
      state.isLoading = false;
      state.status = "rejected";
    });
    build.addCase(deleteCourse.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(deleteCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses = state.courses.filter(
        (course) => course.course_id !== action.payload
      );
      state.status = "success";
    });
    build.addCase(deleteCourse.rejected, (state) => {
      state.isLoading = false;
      state.status = "rejected";
    });
    build.addCase(getSingleCourse.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(getSingleCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
      state.status = "success";
    });
    build.addCase(getSingleCourse.rejected, (state) => {
      state.isLoading = false;
      state.status = "rejected";
    });
  },
});

export const {} = courseSlice.actions;
export default courseSlice.reducer;
