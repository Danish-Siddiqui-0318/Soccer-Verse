"use client";

import React from "react";
import { Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ className = "" }) {
  return (
    <div className={`relative w-full bg-white ${className}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/">
          <div className="inline-flex items-center space-x-2">
            <span>
              <Target />
            </span>
            <span className="font-bold">Soccer-Verse</span>
          </div>
        </Link>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            <li>
              <a
                to=""
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Live Score
              </a>
            </li>
            <li>
              <Link
                to="/fixtures"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Fixtures
              </Link>
            </li>
            <li>
              <Link
                to="/players"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Players
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Rankings
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex grow justify-end">
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search"
          ></input>
        </div>
      </div>
    </div>
  );
}
