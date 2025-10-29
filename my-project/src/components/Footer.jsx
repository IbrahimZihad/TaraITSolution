import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card-dark text-gray-400">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Tara IT Solution
            </h3>
            <p className="mb-4">
              Delivering professional IT, design, and translation services with
              a commitment to quality and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <span className="material-icons">facebook</span>
              </a>
              <a href="#" className="hover:text-white">
                <span className="material-icons">language</span>
              </a>
              <a href="#" className="hover:text-white">
                <span className="material-icons">email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <p className="flex items-center mb-2">
              <span className="material-icons mr-2">location_on</span>
              Kashinathpur, Santhia, Pabna
            </p>
            <p className="flex items-center mb-2">
              <span className="material-icons mr-2">phone</span>
              0194652001, 01377147178
            </p>
            <p className="flex items-center mb-2">
              <span className="material-icons mr-2">email</span>
              info@tara2bd.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© 2024 Tara IT Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
