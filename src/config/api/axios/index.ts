import { base_URL__server } from "../server";

export const init_config__axios = {
  baseURL: base_URL__server ?? "http://localhost:8081/api",
  timeout: process.env.VUE_APP_AXIOS__TIMEOUT ?? 3000,
  // headers: {},
};
