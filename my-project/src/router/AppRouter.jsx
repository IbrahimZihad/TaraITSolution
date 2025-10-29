import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import BlogRead from "../pages/BlogRead";
import Contact from "../pages/Contact";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogRead />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRouter;
