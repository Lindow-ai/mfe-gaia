import axios, { AxiosResponse } from "axios";
import { PostBodyData } from "../../interfaces/dataInterface/postBodyInterface.type";

export const POST = async (
  pageType: string,
  url: string,
  data: PostBodyData[typeof pageType]
): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};
