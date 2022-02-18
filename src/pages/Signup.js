import React, {useState} from "react";

import { useDispatch } from "react-redux";

import { Grid, Input, Text, Button } from '../elements/Index';

const Signup = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwc, setPwc] = useState('');

  const submit = () =>{
    // 공란 체크
    if(id.length === 0 || nick.length === 0 || pwd.length === 0){
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
    // dispatch
    console.log('dispatch')
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

    <Grid width='100%' padding='16px 0 16px'>
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

    <Grid width='100%'>
      <Button 
      width='100%'
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
