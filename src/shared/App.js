import "./App.css";
import React from "react";
import styled from "styled-components";
import {
  Detail,
  Edit,
  Login,
  Main,
  MyPage,
  Post,
  Signup,
  Start,
  ProfileModify,
  MyPageBuy,
  MyPageSell,
  MyPageLike,
  Review,
  Chat,
} from "../pages/Index";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

function App() {
  return (
    <React.Fragment>
      <Container>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Start} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/main" exact component={Main} />

          {/* 게시글 */}
          <Route path="/post" exact component={Post} />
          <Route path="/edit/:postid" exact component={Edit} />
          <Route path="/detail" exact component={Detail} />
          <Route path="/chat" exact component={Chat} />

          {/* 내정보 */}
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/profileModify" exact component={ProfileModify} />
          <Route path="/mypage/buy" exact component={MyPageBuy} />
          <Route path="/mypage/sell" exact component={MyPageSell} />
          <Route path="/mypage/like" exact component={MyPageLike} />
          <Route path="/review" exact component={Review} />
        </ConnectedRouter>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default App;
