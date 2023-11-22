import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import NotFound from "../NotFound/NotFound";
import Contact from "../component/Contact/Contact";
import Projects from "../component/Projects/Projects";
import Certificate from "../component/Certificate/Certificate";
const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
