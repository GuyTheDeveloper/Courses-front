import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layouts";
import { Home } from "./pages/private/home";
import { Login, Register } from "./pages/public";

export const Public = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </MainLayout>
  );
};
