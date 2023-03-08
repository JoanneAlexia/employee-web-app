import axios from "axios";
import IEmployeeRequest from "../Interfaces/IEmployeeRequest";

export const createPost = async (data: IEmployeeRequest) => {
  const response = await axios.post(`http://localhost:8080/employee`, data);
  return response;
};

export const getAll = async () => {
  const response = await axios.get("http://localhost:8080/employee");
  return response;
};

export const getById = async (id: string | undefined) => {
  const response = await axios.get(`http://localhost:8080/employee/${id}`);
  return response;
};

export const updateById = async (
  id: string | undefined,
  data: IEmployeeRequest
) => {
  const response = await axios.put(
    `http://localhost:8080/employee/${id}`,
    data
  );
  return response;
};

export const deleteById = async (id: string) => {
  const response = await axios.delete(`http://localhost:8080/employee/${id}`);
  return response;
};
