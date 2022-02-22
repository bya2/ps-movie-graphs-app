import axios from "axios";
import { init_config__axios } from "../../../config/api/axios";

export const api__server = axios.create({ ...init_config__axios });
