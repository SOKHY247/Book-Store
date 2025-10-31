import axios from "axios";

const fetchAPI = async () => {
  const response = await axios("https://books-store-api-2025.onrender.com/books");
 

  return response.data;
  
};

export default fetchAPI;
