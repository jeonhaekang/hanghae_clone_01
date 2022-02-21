import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { deprecationHandler } from "moment";
import moment from "moment";
import apis from "../../shared/apis";
import test from "../../images/test.jpeg";

const LOAD_POST = "LOAD_POST";
const UPDATE_POST = "UPDATE_POST";
const ADD_POST = "ADD_POST";
const DEL_POST = "DEL_POST";

// actioncreators
const loadPost = createAction(LOAD_POST, (list) => ({ list }));
const updatePost = createAction(UPDATE_POST, (postId, data) => ({
  postId,
  data,
}));
const addPost = createAction(ADD_POST, (data) => ({ data }));
const delPost = createAction(DEL_POST, (postId) => ({ postId }));

// initialState
const initialState = {
  list: [],
};

const postInitialState = {
  userInfo: {
    userid: null,
    nickname: "goddoggood",
    rate: 36.5,
    address: "방구석 어딘가",
    profileImage: test,
  },
  postId: null,
  title: "",
  content: "",
  category: "",
  createdAt: "",
  image: [],
  price: 0,
  viewCnt: 0,
  likeCnt: 0,
  state: false,
  consumer: "",
};

// middlewares
const loadPostDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .posts()
      .then((res) => {
        console.log(res.data);
        dispatch(loadPost(res.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const getOnePostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getOnePost(postId)
      .then((res) => {
        console.log(res.data);
        dispatch(loadPost([res.data]));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const addPostDB = (data) => {
  return function (dispatch, getState, { history }) {
    console.log(data);
    apis
      .posting(data)
      .then((res) => {
        console.log(res);
        const postId = initialState.list.length; //임시아이디
        const date = moment().format("YYYY-MM-DD");
        //const image = getState().image.pres;

        dispatch(
          addPost({
            ...postInitialState,
            ...data,
            createdAt: date,
            //image: image,
            postId: postId,
          })
        );
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const modifyPostDB = (postId, data) => {
  return function (dispatch, getState, { history }) {
    apis
      .modifyPost(postId, data)
      .then((res) => {
        console.log(res);
        dispatch(updatePost(postId, data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const delPostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .postDel(postId)
      .then((res) => {
        console.log(res);
        dispatch(delPost(postId));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const postStateSetDB = (postId, state) => {
  return function (dispatch, getState, { history }) {
    console.log(postId);
    dispatch(updatePost(postId, { state: !state }));
  };
};

// reduser
export default handleActions(
  {
    [LOAD_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.list);
        draft.list = action.payload.list;
      }),
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        const postId = action.payload.postId;
        draft.list = draft.list.map((el) => {
          console.log(el.postId, postId);
          if (el.postId === parseInt(postId)) {
            return { ...el, ...action.payload.data };
          }
          return el;
        });
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.data);
      }),
    [DEL_POST]: (state, action) =>
      produce(state, (draft) => {
        const postId = action.payload.postId;
        draft.list = draft.list.filter((el) => {
          if (el.postId === postId) {
            return false;
          }
          return true;
        });
      }),
  },
  initialState
);

const postActions = {
  loadPostDB,
  addPostDB,
  delPostDB,
  postStateSetDB,
  getOnePostDB,
  modifyPostDB,
};

export { postActions };
