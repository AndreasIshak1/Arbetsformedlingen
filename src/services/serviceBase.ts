import axios from "axios"

export const getData = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url);
  return response.data;
}