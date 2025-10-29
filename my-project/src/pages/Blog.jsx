import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getBlogs } from "../api/blogService";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((data) => setBlogs(data));
  }, []);

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
          Our Latest Blogs
        </h1>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
