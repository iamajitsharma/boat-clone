import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
