import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import apis from "../../shared/apis";
import { setCookie, deleteCookie } from "../../shared/Cookie";
import formApis from "../../shared/formApis";

// actionCreate
const SET_USER = "SET_USER";
const SET_SMAE = "SET_SAME";
const GET_LIKE_USER = "GET_LIKE_USER";

// action
const setUser = createAction(SET_USER, (userInfo) => ({ userInfo }));
const setSame = createAction(SET_SMAE, (same) => ({ same }));

// initial State
const initialState = {
  is_login: false,
  userInfo: {
    username: 'name',
    id: null,
    nickname: "nick",
    rate: "36.5",
    address: "주소",
    profileImage: "url",
  },
};

// middlewares
const signupDB = (id, nick, pwd, address) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(id, nick, pwd, address)
      .then((res) => {
        console.log(res);
        window.alert("회원가입 완료!");
        history.replace("/login");
      })
      .catch((res) => {
        console.log(res.response);
        window.alert("아이디 또는 닉네임이 중복됩니다.");
      });
  };
};

const loginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(id, pwd)
      .then((res) => {
        setCookie(res.headers.authorization, 3);

        apis
          .check()
          .then((res) => {
            dispatch(setUser(res.data));
            history.replace("/main");
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => {
        console.log("err", err.response);
      });
  };
};

const logincheckDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .check()
      .then((res) => {
        console.log(res);
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        window.alert("다시 로그인 해주세요!");
        history.replace("/");
        console.log("error from check", err);
      });
  };
};

const userInfoModifyDB = (image, data) => {
  return function (dispatch, getState, { history }) {
    console.log(image, data);
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append(
      "info",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );

    formApis
      .userInfoModify(formdata)
      .then((res) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
          dispatch(setUser({ ...data, profileImage: reader.result }));
        };
        console.log(res);
        history.replace("/mypage");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = { ...action.payload.userInfo };
      }),
    [SET_SMAE]: (state, action) =>
      produce(state, (draft) => {
        draft.is_same = action.payload.same;
      }),
  },
  initialState
);

const userActions = {
  loginDB,
  signupDB,
  logincheckDB,
  userInfoModifyDB,
};

export { userActions };
