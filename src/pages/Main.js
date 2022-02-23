import React from "react";
import MainCard from "../components/MainCard";
import { Grid, TextLabel, Button } from "../elements/Index";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import {
  IoOptionsOutline,
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../redux/modules/Post";

const Main = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState(true);
  const [post, setPost] = React.useState([]);
  const postList = useSelector((state) => state.post.list);

  React.useEffect(() => {
    dispatch(postActions.loadPostDB());
  }, []);

  React.useEffect(() => {
    if (state) {
      setPost(postList);
    } else {
      const filter = postList.filter((el) => {
        if (el.state === false) {
          return true;
        }
      });
      setPost(filter);
    }
  }, [state, postList]);

  return (
    <React.Fragment>
      <Header />
      <Grid
        position="sticky"
        top="56px"
        padding="10px"
        B_bottom="1px solid rgba(0,0,0,0.07)"
        BG_c="white"
        z_index="3"
      >
        <Grid is_flex justify_content="space-between" font_size="15px">
          <Grid is_flex gap="5px">
            <Grid font_size="23px" is_flex>
              <IoOptionsOutline />
            </Grid>
            <TextLabel F_weight="bold">검색 필더</TextLabel>
          </Grid>
          <Grid is_flex gap="5px">
            <Grid
              font_size="23px"
              color={state ? "rgba(0,0,0,0.5)" : "#FF7E36"}
              is_flex
              _onClick={() => setState(!state)}
            >
              {state ? (
                <IoCheckmarkCircleOutline />
              ) : (
                <IoCheckmarkCircleSharp />
              )}
            </Grid>
            <TextLabel>거래 완료 안보기</TextLabel>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        {post.map((el, i) => {
          return <MainCard {...el} key={i} />;
        })}
      </Grid>
      <EditButton onClick={() => history.push("/post")}> +</EditButton>
      <Footer />
    </React.Fragment>
  );
};

const EditAnimation = keyframes`
  100%{
    transform: rotate(90deg);
  }
`;

const EditButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  border: 0;
  background-color: #ff7e36;
  font-size: 50px;
  color: white;
  position: fixed;
  bottom: 90px;
  right: 20px;
  & :hover {
    animation: ${EditAnimation} 0.2s;
  }
`;

Main.defaultProps = {};

export default Main;
