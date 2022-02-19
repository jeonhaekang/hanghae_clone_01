import React from "react";
import MainCard from "../components/MainCard";
import { Grid, TextLabel, Button } from "../elements/Index";
import Header from "../shared/Header";
import {
  IoOptionsOutline,
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import { history } from "../redux/configStore";

const Main = (props) => {
  const [state, setState] = React.useState(true);

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
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </Grid>
      <Grid position="fixed" bottom="20px" right="20px">
        <EditButton onClick={() => history.push("/post")}> +</EditButton>
      </Grid>
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
  bottom: 20px;
  right: 20px;
  & :hover {
    animation: ${EditAnimation} 0.2s;
  }
`;

Main.defaultProps = {};

export default Main;
