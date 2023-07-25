import { BackApi } from "./config/api";
import { POST } from "../utils/function/httpHandler";
import { AxiosResponse } from "axios";
import { PostBodyData } from "../interfaces/dataInterface/postBodyInterface.type";

export const postData = async (
  pageType: string,
  data: PostBodyData
): Promise<AxiosResponse> => {
  return await POST(BackApi[pageType].postData.url, data);
};
