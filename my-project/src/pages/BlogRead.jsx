import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogById } from "../api/blogService";
import Button from "../components/Button";

const BlogRead = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlogById(id).then((data) => setBlog(data));
  }, [id]);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500">Loading blog...</div>
    );
  }

  return (
    <article className="py-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-2xl mb-8 w-full object-cover max-h-[500px]"
        />
        <h1 className="text-4xl font-bold mb-4 text-text-light dark:text-text-dark">
          {blog.title}
        </h1>
        <p className="text-gray-500 mb-6">
          By <span className="font-semibold">{blog.author}</span> • {blog.date}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>

        <div className="mt-10">
          <Link to="/blog">
            <Button variant="outline" size="md">
              ← Back to Blogs
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogRead;
