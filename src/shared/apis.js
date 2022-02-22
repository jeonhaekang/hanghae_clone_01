import axios from "axios";
import { getCookie } from "./Cookie";

const token = getCookie("authorization");

const instance = axios.create({
  baseURL: "http://13.125.53.14:8080",
});

instance.defaults.headers.common["authorization"] = token;

instance.interceptors.request.use(function (config) {
  const token = getCookie("authorization");

  config.headers["Content-Type"] =
    "application/json;charset=UTF-8; charset=UTF-8";
  config.headers.common["authorization"] = `${token}`;
  return config;
});

const apis = {
  // 회원가입
  signup: (id, nick, pwd, address) =>
    instance.post("/user/signup", {
      username: id,
      nickname: nick,
      password: pwd,
      address: address,
    }),

  // 아이디 중복 체크
  idcheck: (id) => instance.post("/user/idcheck", { username: id }),

  // 로그인
  login: (id, pwd) =>
    instance.post("/user/login", { username: id, password: pwd }),

  // 로그인 체크
  check: () => instance.get("/user/"),

  // 게시글 수정
  modifyPost: (postId, data) => instance.put("/post/" + postId, data),

  // 게시글 불러오기
  posts: () => instance.get("/post"),

  // 게시글 삭제
  postDel: (postId) => instance.delete("/post/" + postId),

  // 게시글 한개 불러오기
  getOnePost: (postId) => instance.get("/post/" + postId),

  // 좋아요 유저목록 가져오기
  getLikeUser: (postId) => instance.get("/like/list/" + postId),

  // 판매 상태 변경
  setState: (postId, consumer) =>
    instance.post("/post/state/" + postId, consumer),

};

export default apis;
