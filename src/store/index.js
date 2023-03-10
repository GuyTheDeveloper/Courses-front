import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import coursesReducer from "./slices/courses";
import categoryReducer from "./slices/category";

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    course: coursesReducer,
  },
});

export default store;
