import { BackApi } from "./config/api";
import { POST } from "../utils/function/httpHandler";

export const postBody = (typePage: string, body: {}) => {
  // console.log("type", typePage);
  return POST(BackApi.postBody[typePage], body);
};
