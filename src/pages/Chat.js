import React from "react";
import Header from "../shared/Header";
import { Grid, TextLabel } from "../elements/Index";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import profile from "../images/profile.jpeg";

const Chat = (props) => {
  return (
    <React.Fragment>
      <Header title="상대방닉네임" />
      <Grid padding="15px" is_flex gap="10px">
        {/* 상대방 채팅 */}
        <Grid is_flex gap="10px" width="100%">
          <ProfileOuter>
            <Profile src={profile} />
          </ProfileOuter>
          <ChatText color="rgb(240, 241, 246)">
            <TextLabel>채팅내용 입니다채팅내용 입니다채팅내용</TextLabel>
          </ChatText>
        </Grid>

        {/* 나의 채팅 */}
        <Grid is_flex width="100%" justify_content="flex-end">
          <ChatText color="#ff7e36">
            <TextLabel F_color="white">
              채팅내용 입니다채팅내용 입니다채팅내용
            </TextLabel>
          </ChatText>
        </Grid>
      </Grid>
      <Grid
        position="fixed"
        bottom="0"
        width="100%"
        padding="5px"
        BG_c="rgb(240,241,246)"
        is_flex
      >
        <Grid width="90%">
          <Input placeholder="메시지를 입력하세요." />
        </Grid>
        <Grid width="10%" color="rgba(0,0,0,0.2)">
          <SendButton>
            <IoMdSend />
          </SendButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const ChatText = styled.div`
  max-width: 80%;
  border-radius: 15px;
  padding: 7px 10px;
  font-weight: 550;
  background-color: ${(props) => props.color};
`;

const ProfileOuter = styled.div`
  width: 35px;
  height: 35px;
`;

const Profile = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  box-sizing: border-box;
  border: 1px solid rgb(235, 235, 238);
  font-size: 15px;

  &:focus {
    caret-color: #ff7e36;
    border: 1px solid rgb(235, 235, 238);
    outline: none;
  }
`;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 30px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
`;

export default Chat;
