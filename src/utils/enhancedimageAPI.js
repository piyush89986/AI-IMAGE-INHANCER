import axios from "axios";


const API_KEY = import.meta.env.VITE_API_KEY_PICWISH_API;


const BASE_URL = "https://techhk.aoscdn.com";
const MAXIMUM_RATRIES = 20;

export const enhancedImageAPI = async (file) => {
  try {
    const task_id = await uploadimg(file);

    console.log("img uploaded succssefully", task_id);

    const inhanceimgdata = await Pollforinhacedimg(task_id);
    return inhanceimgdata;

    console.log("inhancedimg successfully", inhanceimgdata);
  } catch (error) {
    console.log("error inhancing image", error.message);
  }
};

const uploadimg = async (file) => {
  const formdata = new FormData();
  formdata.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formdata,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data?.task_id) {
    throw new Error("FAILD TO UPLOAD IMG ! TAS_ID NOT FOUND");
  }
  return data.data.task_id;
};

const Pollforinhacedimg = async (task_id, retries = 0) => {
  const result = await fetchinhancedimg(task_id);

  if (result.state === 4) {
    console.log(`processing...(${retries}/${MAXIMUM_RATRIES})`);

    if (retries > MAXIMUM_RATRIES) {
      throw new Error("MAXIMUM Retries reched. Try again later");
    }
    // wait 2seconds

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return Pollforinhacedimg(task_id, retries + 1);
  }
  console.log("inhancedimgURL here : ", result);
  return result;
};

const fetchinhancedimg = async (task_id) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${task_id}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("FAILD TO FOUND INHANCED IMG | IMG NOT FOUND");
  }
  return data.data;
};
