import { Routes, Route } from "react-router-dom";
import Login from "../Login/index";

export default () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
