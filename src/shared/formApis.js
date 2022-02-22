import axios from "axios";
import { getCookie } from "./Cookie";

const token = getCookie("authorization");

const instance = axios.create({
  baseURL: "http://13.125.53.14:8080",
  headers: {
    "Content-Type": "multipart/form-data",
    accept: 'application/josn,',
  },
});

instance.interceptors.request.use(function (config) {
  const token = getCookie("authorization");

  config.headers.common["authorization"] = `${token}`;
  return config;
});

const formApis = {
  // 게시글 작성
  posting: (formdata) => instance.post("/post", formdata),
};

export default formApis;
