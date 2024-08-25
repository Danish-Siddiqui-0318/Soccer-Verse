import React from "react";
import { Menu, X, Check, ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const LiveScroe = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center">
        <div>
          <div>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl mx-4 ">
              No Match Currently Live
            </h1>
            <p className="mt-4 text-gray-500  hidden">
              Sorry, the page you are looking for doesn&apos;t exist or has been
              moved.
            </p>
            <div className="mt-6 flex items-center gap-x-3">
              <button
                onClick={() => navigate("/")}
                type="button"
                className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ArrowLeft size={16} className="mr-2" />
                Go back
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://www.wnct.com/wp-content/uploads/sites/99/2023/10/1040x585-2022-0110-best-size-5-soccer-ball-5a0ad2.jpg"
            alt="404"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LiveScroe;
