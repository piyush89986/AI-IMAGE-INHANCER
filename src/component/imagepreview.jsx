import React from "react";
import Loading from "./Loading";

const ImagePreview = ({ uploadimg, inhanceimg, loader }) => {
  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "enhanced-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      {/* Original Image */}
      <div className=" shadow-lg rounded-xl overflow-hidden flex flex-col">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        <div className="flex-1 flex items-center justify-center bg-gray-200 min-h-[320px] relative">
          {uploadimg ? (
            <img
              src={uploadimg}
              alt="original"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-600 text-lg">No Image Selected</span>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className=" shadow-lg rounded-xl overflow-hidden flex flex-col">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>

        <div className="flex-1 flex items-center justify-center bg-gray-200 min-h-[320px] relative">
          {loader ? (
            <Loading />
          ) : inhanceimg ? (
            <>
              <img
                src={inhanceimg}
                alt="enhanced"
                className="w-full h-full object-cover"
              />

              {/* Transparent download button overlay */}
              <button
                onClick={() => handleDownload(inhanceimg)}
                className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-black/70 transition-all backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download Image
              </button>
            </>
          ) : (
            <span className="text-gray-600 text-lg">No Enhanced Image</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
