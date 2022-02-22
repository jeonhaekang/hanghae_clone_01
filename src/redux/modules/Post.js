import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { deprecationHandler } from "moment";
import moment from "moment";

const ADD_POST = "ADD_POST";

// actioncreators
const loadPost = createAction(ADD_POST, () => ({}));
const addPost = createAction(ADD_POST, (data) => ({ data }));

// initialState
const initialState = {
  list: [],
};

const postInitialState = {
  userInfo: {
    userid: null,
    nickname: "",
    rate: 36.5,
    address: "",
    profileImage: "",
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
  state: true,
  consumer: "",
};

// middlewares
const loadPostDB = () => {
  return function (dispatch, getState, { history }) {};
};

const addPostDB = (data) => {
  return function (dispatch, getState, { history }) {
    const date = moment().format("YYYY-MM-DD");
    console.log(date);

    const image = getState().image.pres;
    console.log(image);

    console.log({ ...postInitialState, ...data });
    dispatch(
      addPost({
        ...postInitialState,
        ...data,
        createdAt: date,
        image: image,
      })
    );
  };
};

// reduser
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.data);
      }),
  },
  initialState
);

const postActions = {
  loadPostDB,
  addPostDB,
};

export { postActions };
