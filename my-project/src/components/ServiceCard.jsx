import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

/**
 * Displays a single service card with icon, title, description, and button.
 * Props:
 * - icon: Material icon name or JSX
 * - title: service title
 * - description: service description text
 * - link: optional link for Learn More button
 */
const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
      <div className="flex justify-center mb-4">
        <span className="material-icons text-primary text-5xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

      {link ? (
        <a href={link}>
          <Button variant="outline" size="sm">
            Learn More →
          </Button>
        </a>
      ) : (
        <Button variant="outline" size="sm">
          Learn More →
        </Button>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ServiceCard;
