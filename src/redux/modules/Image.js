import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer' 

// action
const SET_PRE = 'SET_PRE';
const INIT_PRE = 'INIT_PRE';
const DEL_PRE = 'DEL_PRE';
const EDIT_PRE = 'EDIT_PRE';

// actioncreators
const setPre = createAction(SET_PRE,(pre,data)=>({pre,data}));
const initPre = createAction(INIT_PRE,()=>({}));
const delPre = createAction(DEL_PRE,(index)=>({index}));
const editPre = createAction(EDIT_PRE,(pres)=>({pres}));

// initialState
const initialState = {
    pres : [
        'https://w.namu.la/s/28abf5dfab63f6d3228cc09b868618eddf3e2df5a3f5770f0433a9e330afe855966893e4664410e98d1a088564a40d388527eecd35c9c759020adf4906e41e2629f63bcf94d90b6881271d92a0bbc833',
        'https://w.namu.la/s/28abf5dfab63f6d3228cc09b868618eddf3e2df5a3f5770f0433a9e330afe855966893e4664410e98d1a088564a40d388527eecd35c9c759020adf4906e41e2629f63bcf94d90b6881271d92a0bbc833',
],
    files: [1,2],
}

// middlewares 사실상 무쓸모

// reducer
export default handleActions({
    [SET_PRE]:(state,action)=>produce(state,(draft)=>{
        draft.pres = [...draft.pres,action.payload.pre]
        draft.files = [...draft.files,action.payload.data]
    }),
    [INIT_PRE]:(state,action)=>produce(state,(draft)=>{
        draft.pres = []
        draft.files = []
    }),
    [DEL_PRE]:(state,action)=>produce(state,(draft)=>{
        draft.pres = draft.pres.filter((p,i)=> i !== action.payload.index);
        draft.files = draft.files.filter((p,i)=> i !== action.payload.index);
    }),
    [EDIT_PRE]:(state,action)=>produce(state,(draft)=>{
        
    }),
},initialState)

const imgActions = {
    setPre,
    initPre,
    delPre,
    editPre
}

export { imgActions }