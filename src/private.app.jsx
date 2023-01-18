import { Route, Routes } from "react-router-dom";
import { CourseForm } from "./components/course-form";
import { MainLayout } from "./components/layouts";
import { CategorySingle, Home, UserCourses } from "./pages/private";
import { CourseSingle } from "./pages/private/course-single/course-single";

export const Private = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/web-technology"
          element={<CategorySingle category={1} />}
        />
        <Route
          path="/category/mobile-technology"
          element={<CategorySingle category={2} />}
        />
        <Route
          path="/category/design-technology"
          element={<CategorySingle category={3} />}
        />
        <Route path="/courses/:slug" element={<CourseSingle />} />
        <Route path="/user/courses" element={<UserCourses />} />
        <Route path="/user/new-course" element={<CourseForm />} />
      </Routes>
    </MainLayout>
  );
};
