import axios from "axios";
import { URL } from "../server";

const config__axios_instance = {
  baseURL: URL,
  timeout: 3000,
};

export const req_ins__server = axios.create({ ...config__axios_instance });
