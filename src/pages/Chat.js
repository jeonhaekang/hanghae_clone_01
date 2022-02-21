import React from "react";
import Header from "../shared/Header";
import { Grid, TextLabel } from "../elements/Index";
import styled from "styled-components";

const Chat = (props) => {
  return (
    <React.Fragment>
      <Header title="상대방닉네임" />
      <Grid padding="15px">ddd</Grid>
      <Grid position="fixed" bottom="0" width="100%" padding="15px">
        <Input placeholder="메시지를 입력하세요." />
      </Grid>
    </React.Fragment>
  );
};

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export default Chat;
