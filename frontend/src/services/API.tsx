import axios from "axios";

export const createPost = async (data: any) => {
  const response = await axios.post(`http://localhost:8080/employee`, data);
  return response;
};
