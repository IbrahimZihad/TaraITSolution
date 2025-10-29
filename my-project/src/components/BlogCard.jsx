import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, title, author, date, image, summary }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-card-light dark:bg-card-dark shadow-lg rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{date}</p>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{summary}</p>
        <p className="text-sm mb-4 text-primary font-medium">By {author}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate(`/blog/${id}`)}
        >
          Read More →
        </Button>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default BlogCard;
