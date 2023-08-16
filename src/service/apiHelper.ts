import { BackApi } from "./config/api";
import { POST } from "../utils/function/httpHandler";
import { AxiosResponse } from "axios";
import { PostBodyData } from "../interfaces/dataInterface/postBodyInterface.type";

export const postData = async (
  pageType: string,
  key: string,
  data: PostBodyData[typeof pageType]
): Promise<AxiosResponse> => {
  return await POST(pageType, BackApi[pageType].postData[key].url, data);
};
