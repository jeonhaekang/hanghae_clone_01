import React from "react";
import styled from "styled-components";
import { Grid, TextLabel, Text } from "../elements/Index";
import test from "../images/test.jpeg";
import { IoHeartOutline } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
import ReactModal from "react-modal";
import "../shared/App.css";

const MainCard = (props) => {
  const [state, setState] = React.useState(false);
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
          <Grid is_flex gap="10px">
            <Grid
              width="auto"
              BG_c="rgba(0,0,0,0.6)"
              padding="1px 10px 3px 10px"
              B_radius="3px"
            >
              <TextLabel F_weight="bold" F_color="white" F_size="12px">
                거래완료
              </TextLabel>
            </Grid>
            <TextLabel F_weight="bold">12,000원</TextLabel>
          </Grid>
        </Grid>
        <Grid position="absolute" right="10px" bottom="10px" is_flex gap="5px">
          <IoHeartOutline />
          <TextLabel>0</TextLabel>
        </Grid>

        <Grid
          _onClick={() => {
            setState(true);
          }}
          position="absolute"
          top="15px"
          right="10px"
        >
          <IoEllipsisVertical />
        </Grid>
      </Grid>
      <ReactModal
        state={state}
        isOpen={state}
        ariaHideApp={false}
        onRequestClose={() => setState(false)}
        closeTimeoutMS={200}
        style={{
          overlay: {
            zIndex: 3,
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          content: {
            borderRadius: 0,
            top: "calc(100% - 300px)",
            height: "300px",
            width:"100%",
            left: 0,
            
            transition: "0.3s",
          },
        }}
      ></ReactModal>
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
