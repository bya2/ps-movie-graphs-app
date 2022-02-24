import { RequestBaseConfig_Obj } from "@/model/interface";
import {
  endpoint__movies__now_playing,
  endpoint__movies__latest,
  endpoint__movies__upcoming,
  endpoint__movies__popular,
} from "@/config/request/movies/endpoint";

export const config__movies__now_playing: RequestBaseConfig_Obj = {
  method: "GET",
  url: endpoint__movies__now_playing,
};

export const config__movies__latest: RequestBaseConfig_Obj = {
  method: "GET",
  url: endpoint__movies__latest,
};

export const config__movies__upcoming: RequestBaseConfig_Obj = {
  method: "GET",
  url: endpoint__movies__upcoming,
};

export const config__movies__popular: RequestBaseConfig_Obj = {
  method: "GET",
  url: endpoint__movies__popular,
};
