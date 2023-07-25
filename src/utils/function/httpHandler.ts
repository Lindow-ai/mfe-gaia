import axios, { AxiosResponse } from "axios";
import { PostBodyData } from "../../interfaces/dataInterface/postBodyInterface.type";

export const POST = async (
  url: string,
  data: PostBodyData
): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(url, JSON.stringify(data));
    return response;
  } catch (error) {
    throw error;
  }
};
