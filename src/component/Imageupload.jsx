import React from "react";

const ImageUpload = (props) => {

    const handlesubmit = (e) => {
        const file = e.target.files[0]

        if(file){
          props.uploadimghandler(file)
        }
        
    }
  return (
    <div className=" shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
      >
        <input type="file" id="fileInput" className="hidden" onChange={handlesubmit} />
        <span className="text-lg font-medium text-black">
          Click and drag to upload your image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;

