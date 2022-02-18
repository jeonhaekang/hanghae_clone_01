import "./App.css";
import React from "react";
import styled from "styled-components";
import {
  Detail,
  Edit,
  List,
  Login,
  Main,
  MyPage,
  Post,
  Signup,
  Start,
} from "../pages/Index";
import { Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Route path="/" exact component={Start} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/main" exact component={Main} />

        {/* 게시글 */}
        <Route path="/post" exact component={Post} />
        <Route path="/edit" exact component={Edit} />
        <Route path="/detail" exact component={Detail} />

        {/* 내정보 */}
        <Route path="/mypage" exact component={MyPage} />
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  width: 412px;
  min-height: 100vh;
`;

export default App;
