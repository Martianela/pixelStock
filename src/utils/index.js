import axios from "axios";

export const fetchImages = async (term = null) => {
  console.log(process.env.REACT_APP_API_KEY);
  const BASE_URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`;
  const { data } = await axios.get(BASE_URL);
  // console.log(data);
  return data;
};
