import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer' 

import apis from "../../shared/apis";
import { setCookie, deleteCookie } from "../../shared/Cookie";

// actionCreate
const SET_USER = 'SET_USER';
const SET_SMAE = 'SET_SAME';

// action
const setUser = createAction(SET_USER,(userInfo)=>({userInfo}))
const setSame = createAction(SET_SMAE,(same)=>({same}))

// initial State
const initialState = {
    is_login: false,
    userInfo: {
        nickname: 'nick',
        rate: '36.5',
        address: '주소',
        profileImage: 'url',
    },
    is_same: null,
}

// middlewares
const signupDB =(id,nick,pwd,address) => {
    return function(dispatch, getState, {history}){
        apis.signup(id,nick,pwd,address)
        .then(()=>{
            window.alert('회원가입 완료!');
            history.replace('/login');
        })
        .catch(err=>{
            console.log('err',err)
        })
    }
}

const idcheckDB = (id) => {
    return function(dispatch, getState, {history}){

        apis.idcheck(id)
        .then(res => {
            console.log(res.data);
            // dispatch(setSame())
        })
        .catch(err=>{console.log('err',err)})
    }
}

const loginDB =(id,pwd) => {
    return function(dispatch, getState, {history}){
        apis.login(id,pwd)
        .then(res =>{

            setCookie(res.headers.authorization, 3);

            apis.check()
            .then(res=>{
                console.log(res.data)
                // dispatch(setUser(res.data))
                history.replace('/main')
            })
            .catch(err=>{
                console.log('err',err)
            })

        })
        .catch(err => {console.log('err',err)})
    }
}

// reducer
export default handleActions({
    [SET_USER]:(state,action)=>produce(state,(draft)=>{
        console.log('login')
    }),
    [SET_SMAE]:(state,action)=>produce(state,(draft)=>{
        draft.is_same = action.payload.same;
    }),
},initialState)

const userActions = {
    loginDB,
    signupDB,
    idcheckDB
}

export { userActions }