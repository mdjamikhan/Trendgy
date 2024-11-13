import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaHome,
  FaInfoCircle,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-lg">
            <li>
              <Link
                to="/"
                className="flex items-center space-x-2 hover:text-yellow-300 transition duration-200"
              >
                <FaHome /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="flex items-center space-x-2 hover:text-yellow-300 transition duration-200"
              >
                <FaInfoCircle /> <span>Contact Us</span>
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com/mohd.jami09/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-300 transition duration-200"
              >
                <FaInstagram /> <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mdjamikhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-300 transition duration-200"
              >
                <FaGithub /> <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/jamikhan09/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-300 transition duration-200"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">
            Address: Shivaji park West Punjabi Bagh, adjacent to BOB Bank, Delhi
            110026
          </p>
          <p className="text-lg">Phone: (+91) 9773649449</p>
          <p className="text-lg">
            Hours: 09:15 AM - 11:15 PM, MON - SAT (except FRI)
          </p>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-center text-gray-200 mt-8 md:mt-0">
            &copy; 2024{" "}
            <span className="font-bold text-yellow-300">Trendgy</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
