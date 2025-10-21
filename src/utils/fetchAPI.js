import axios from "axios";

const fetchAPI = async () => {
  const response = await axios("https://clothes-json.onrender.com/products");

  return response.data;
};

export default fetchAPI;
