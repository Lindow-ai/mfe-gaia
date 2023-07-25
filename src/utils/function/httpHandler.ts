import axios from "axios";

export const POST = (url: string, body: {}) => {
  axios.post(url, JSON.stringify(body));
};
