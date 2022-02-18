import React from "react";
import styled from "styled-components";
import { Grid, TextLabel, Button } from "../elements/Index";
import test from "../images/test.jpeg";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

const MainCard = (props) => {
  return (
    <React.Fragment>
      <Grid
        B_bottom="1px solid rgba(0,0,0,0.07)"
        padding="15px"
        gap="15px"
        is_flex
        align_items="flex-start"
        position="relative"
      >
        <Grid width="30%">
          <AspectInner src={test}></AspectInner>
        </Grid>
        <Grid
          is_flex
          flex_direction="column"
          align_items="flex-start"
          gap="5px"
          width="60%"
        >
          <TextLabel F_size="17px">삼성 노트북 팝니다!!</TextLabel>
          <TextLabel F_color="#4D5159">노원구 상계동</TextLabel>
          <TextLabel F_weight="bold">12,000원</TextLabel>
        </Grid>
        <Grid position="absolute" right="10px" bottom="10px" is_flex gap="5px">
          <IoHeartOutline />
          <TextLabel>0</TextLabel>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

MainCard.defaultProps = {};

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 10px;
`;

export default MainCard;
