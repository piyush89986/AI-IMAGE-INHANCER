import React, { useState } from "react";
import ImageUpload from "./Imageupload";
import ImagePreview from "./imagepreview";
import { enhancedImageAPI } from "../utils/enhancedimageAPI";

const Home = () => {
  const [uploadimg, setuploadimg] = useState(null);
  const [inhanceimg, setinhanceimg] = useState(null);
  const [loader, setloader] = useState(false);

  const uploadimghandler = async (file) => {
    setuploadimg(URL.createObjectURL(file));
    setloader(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setinhanceimg(enhancedURL.image);
      setloader(false);
    } catch (error) {
      console.log(error);
      alert("dikkat hai bhai kuchh developer ko dikha ");
    }
  };

  return (
    <>
      <ImageUpload uploadimghandler={uploadimghandler} />
      <ImagePreview
        uploadimg={uploadimg}
        inhanceimg={inhanceimg}
        loader={loader}
      />
    </>
  );
};

export default Home;
