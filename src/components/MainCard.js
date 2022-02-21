import React from "react";
import styled from "styled-components";
import { Grid, TextLabel } from "../elements/Index";
import test from "../images/test.jpeg";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
import ReactModal from "react-modal";
import "../shared/App.css";

const MainCard = (props) => {
  console.log(props);
  const { page, userInfo, postId, title, price, likeCnt, state, image } = props;

  const [ModalState, setModalState] = React.useState(false);
  const [likeState, setLikeState] = React.useState(false);

  const likeChange = () => {
    setLikeState(!likeState);
  };
  console.log(image[0]);

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
          <AspectInner src={image[0]} />
        </Grid>
        <Grid
          is_flex
          flex_direction="column"
          align_items="flex-start"
          gap="5px"
          width="60%"
        >
          <TextLabel F_size="17px" F_weight="bold">
            {title}
          </TextLabel>
          <TextLabel F_color="#4D5159">{userInfo.address}</TextLabel>
          <Grid is_flex gap="10px">
            {state && (
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
            )}
            <TextLabel F_weight="bold">{price}원</TextLabel>
          </Grid>
        </Grid>
        <Grid position="absolute" right="10px" bottom="10px" is_flex gap="5px">
          <IoHeartOutline />
          <TextLabel>{likeCnt}</TextLabel>
        </Grid>

        <Grid position="absolute" top="15px" right="10px">
          {page === "like" ? (
            <Grid
              font_size="23px"
              _onClick={() => {
                likeChange();
              }}
              color={likeState ? "#ff7e36" : "#4D5159"}
            >
              {likeState ? <IoHeart /> : <IoHeartOutline />}
            </Grid>
          ) : (
            <Grid
              _onClick={() => {
                setModalState(true);
              }}
            >
              <IoEllipsisVertical />
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* 수정 모달 & 좋아요 기능 */}
      <ReactModal
        state={ModalState}
        isOpen={ModalState}
        ariaHideApp={false}
        onRequestClose={() => setModalState(false)}
        closeTimeoutMS={200}
        style={{
          overlay: {
            zIndex: 3,
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          content: {
            borderRadius: 0,
            top: "calc(100% - 200px)",
            height: "200px",
            width: "100%",
            left: 0,
            padding: 0,

            transition: "0.3s",
          },
        }}
      >
        <Grid
          is_flex
          flex_direction="column"
          justify_content="space-around"
          align_items="flex-start"
          padding="20px"
          height="100%"
          font_size="16px"
          font_weight="550"
        >
          <Grid>판매상태 변경</Grid>
          <Grid>게시글 수정</Grid>
          <Grid>삭제</Grid>
        </Grid>
      </ReactModal>
    </React.Fragment>
  );
};

MainCard.defaultProps = {
  page: null,
  userInfo: {
    userid: 0,
    nickname: "",
    rate: 36.5,
    address: "",
    profileImage: "",
  },
  postId: 0,
  title: "",
  content: "",
  category: "",
  createdAt: "",
  image: [],
  price: 0,
  viewCnt: 0,
  likeCnt: 0,
  state: true,
  consumer: "",
};

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 10px;
`;

export default MainCard;
