import React from "react";
import { Grid, TextLabel } from "../elements/Index";
import styled from "styled-components";
import test from "../images/test.jpeg";

const MyPageSoldout = () => {
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
          <AspectInner src={test} />
        </Grid>
        <Grid
          is_flex
          flex_direction="column"
          align_items="flex-start"
          gap="5px"
          width="60%"
        >
          <TextLabel F_size="17px" F_weight="bold">
            삼성 노트북 팝니다!!
          </TextLabel>
          <TextLabel F_color="#4D5159">노원구 상계동</TextLabel>
          <TextLabel F_weight="bold">12,000원</TextLabel>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 10px;
`;

export default MyPageSoldout;
