import React from "react";
import { Target } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto w-full mt-4 border-t-2 ">
      <footer className="px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <span>
            <Target />
          </span>
          <div className="mt-4 grow md:ml-12 md:mt-0">
            <p className="text-base font-semibold text-gray-700">
              © Soccer-Verse
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="mb-8 lg:mb-0">
            <Link to="/fixtures">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Fixtures
              </p>
            </Link>
          </div>
          <div className="mb-8 lg:mb-0">
            <Link to="/players">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Players
              </p>
            </Link>
          </div>
          <div className="mb-8 lg:mb-0">
            <Link to="/Ranking">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Rankings
              </p>
            </Link>
          </div>
          <div className="mb-8 lg:mb-0">
            <Link to="/FeedbackForm">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Feedback
              </p>
            </Link>
          </div>
          <div className="mb-8 lg:mb-0">
            <Link to="/ContactUsForm">
              <p className="mb-6 text-lg font-semibold text-gray-700">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
