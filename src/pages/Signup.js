import React, {useState} from "react";

import { useDispatch,useSelector } from "react-redux";
import { userActions } from "../redux/modules/User";

import { Grid, Input, Text, Button } from '../elements/Index';
import { FiChevronDown } from 'react-icons/fi'
import ReactModal from "react-modal";

const Signup = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [pwd, setPwd] = useState(''); 
  const [pwc, setPwc] = useState('');

  // 주소용 스테이트들
  const [address, setAdd] = useState(null);
  const [open, setOpen] = useState(false);

  const selAdd = (e) => {
    setOpen(false);
    setAdd(e.target.innerHTML);
  }

  // 제출용 버튼 함수
  const submit = () =>{
    let reg = /^[a-zA-Z0-9]{6,12}$/
    if(!reg.test(pwd)){
      window.alert('비밀번호에 특수문자는 넣으실 수 없습니다.')
      return;
    }
    // 공란 체크
    if(id.length === 0 || nick.length === 0 || pwd.length === 0 || !address){
      window.alert('공란이 있습니다.');
      return;
    }
    // 최소 8자 이상
    if(id.length < 8 || pwd.length < 8){
      window.alert('아이디와 비밀번호는 최소 8자입니다.');
      return;
    }
    if(nick.length < 6 || nick.length > 10){
      window.alert('닉네임은 최소 6자 최대 10자 입니다.');
      return;
    }
    // 비밀번호 체크
    if(pwd !== pwc){
      window.alert('비밀번호가 틀렸습니다. 다시 확인해 주세요.');
      return;
    }
    dispatch(userActions.signupDB(id,nick,pwd,address))
  }

  return (
  <Grid  padding='8px' is_flex flex_direction='column' >
    <Grid  B_bottom='2px solid rgba(0,0,0,0.07)' width='100%' is_flex justify_content='center' align_items='center' padding='32px 0'>
      <Text 
      width='auto' 
      margin='0'  
      F_size='36px' 
      F_weight='600' 
      > 회원가입 </Text>
    </Grid>

    <Grid width='100%' padding='16px 0 4px'>
      <Input 
      value={id}
      is_caret='#FF7E36'
      B_radius='5px'
      _onChange={(e)=>{setId(e.target.value)}}
      padding='8px' 
      width='100%' 
      label='아이디' 
      placeholder='아이디를 입력해 주세요.'
      />
    </Grid>

    <Grid width='100%' padding='0 0 16px'>
      <Input 
      value={nick}
      is_caret='#FF7E36'
      B_radius='5px'
      _onChange={(e)=>{setNick(e.target.value)}}
      padding='8px' 
      width='100%'
      label='닉네임' 
      placeholder='닉네임을 입력해 주세요.' 
      />
    </Grid>

    <Grid width='100%' padding='0 0 16px'>
      <Input 
      value={pwd}
      is_caret='#FF7E36'
      B_radius='5px'
      _onChange={(e)=>{setPwd(e.target.value)}}
      padding='8px' 
      width='100%'
      type='password' 
      label='비밀번호' 
      placeholder='비밀번호를 입력해 주세요.' 
      />
    </Grid>

    <Grid width='100%' padding='0 0 16px'>
      <Input 
      value={pwc}
      is_caret='#FF7E36'
      B_radius='5px'
      _onChange={(e)=>{setPwc(e.target.value)}}
      padding='8px' 
      width='100%' 
      type='password'   
      label='비밀번호 확인' 
      placeholder='비밀번호를 확인해 주세요.' 
      />
    </Grid>

    <Grid Border='1px solid #FF7E36' B_radius='8px' is_flex justify_content='space-between' width='100%' padding='8px 16px 8px' _onClick={()=>{setOpen(true)}}>
      {address ? address : '지역선택'}
      <FiChevronDown />
    </Grid>
    <ReactModal 
        isOpen={open}
        onRequestClose={props.clearSelectedOption}
        ariaHideApp={false}
        contentLabel="Selected Option">
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >서울특별시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >울산광역시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >광주광역시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >인천광역시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >부산광역시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >대전광역시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >수원시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >안동시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >전주시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >청주시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >진주시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >경주시</Grid>
          <Grid _onClick={selAdd} padding='16px 0' B_bottom='1px solid #ddd' >창원시</Grid>
    </ReactModal>

    <Grid padding='16px 0 0' width='100%'>
      <Button 
      width='100%'
      height='30px'
      _onClick={submit} 
      Border='1px solid rgba(0,0,0,0.07)' 
      B_radius='10px' 
      BG_color='#FF7E36'
      font_color='#fff'
      >가입하기</Button>
    </Grid>
  </Grid>
  );
};

Signup.defaultProps = {};

export default Signup;
