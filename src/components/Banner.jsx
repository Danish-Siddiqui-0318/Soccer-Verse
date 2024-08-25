import React, { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

function Banner({ msg, close }) {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showBanner && (
        <div
          className="rounded-md border-l-4 border-green-500 bg-green-100 p-4 "
          id="Div"
        >
          <div className="flex items-center justify-between space-x-4">
            <div>
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-lg font-medium text-green-600">{msg}</p>
            </div>
            <div>
              <X
                className="h-6 w-6 cursor-pointer text-green-600"
                onClick={close}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
