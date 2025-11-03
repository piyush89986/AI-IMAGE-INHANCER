import React from "react";
import Home from "./component/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-black mb-2">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-black">
          Upload your Image and let AI enhance it in seconds!
        </p>
      </div>

      {/* Main Section */}
      <Home />

      {/* Footer */}
      <div className="text-sm text-black mt-6">Powered By @piyushAI</div>
    </div>
  );
};

export default App;
