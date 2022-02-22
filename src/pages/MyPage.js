import React from "react";
import styled from "styled-components";
import { Grid, TextLabel } from "../elements/Index";
import profile from "../images/profile.jpeg";
import pay from "../images/pay.jpeg";
import sellIcon from "../images/sellIcon.jpeg";
import buyIcon from "../images/buyIcon.jpeg";
import likeIcon from "../images/likeIcon.jpeg";
import Header from "../shared/Header";
import { IoChevronForwardOutline, IoPencil } from "react-icons/io5";
import { history } from "../redux/configStore";
import Footer from "../shared/Footer";
import { useDispatch, useSelector } from "react-redux";

const MyPage = (props) => {
  const user = useSelector((state) => state.user.userInfo);

  console.log(user);

  return (
    <Grid>
      <Header title="나의 당근" />
      <Grid
        is_flex
        justify_content="space-between"
        padding="20px"
        _onClick={() => {
          history.push("/ProfileModify");
        }}
      >
        <Grid is_flex gap="20px" postion="relative">
          <ProfileOuter>
            <Profile
              src={
                user.profileImage === "default.img"
                  ? profile
                  : user.profileImage
              }
            />
          </ProfileOuter>
          <Grid
            is_flex
            flex_direction="column"
            align_items="flex-start"
            gap="10px"
          >
            <TextLabel F_size="17px" F_weight="bold">
              {user.nickname}
            </TextLabel>
            <TextLabel F_color="#4D5159" F_weight="500">
              {user.address}
            </TextLabel>
          </Grid>
        </Grid>

        <Grid>
          <IoChevronForwardOutline />
        </Grid>
      </Grid>
      <Grid
        Border="2px dashed #FF7E36"
        padding="15px"
        margin="0 20px"
        B_radius="5px"
        is_flex
        justify_content="space-between"
      >
        <PayImage src={pay} />
        <TextLabel F_size="15px" F_color="#4D5159" F_weight="500">
          중고거래는 이제 당큰페이로 해보세요!
        </TextLabel>
      </Grid>
      <Grid
        is_flex
        justify_content="space-around"
        margin="20px 0"
        font_size="20px"
        color="#4D5159"
      >
        <Grid
          is_flex
          flex_direction="column"
          gap="10px"
          _onClick={() => {
            history.push("/mypage/sell");
          }}
        >
          <Icon src={sellIcon} />
          <TextLabel F_size="16px" F_weight="550">
            판매내역
          </TextLabel>
        </Grid>
        <Grid
          is_flex
          flex_direction="column"
          gap="10px"
          _onClick={() => {
            history.push("/mypage/buy");
          }}
        >
          <Icon src={buyIcon} />
          <TextLabel F_size="16px" F_weight="550">
            구매내역
          </TextLabel>
        </Grid>
        <Grid
          is_flex
          flex_direction="column"
          gap="10px"
          _onClick={() => {
            history.push("/mypage/like");
          }}
        >
          <Icon src={likeIcon} />
          <TextLabel F_size="16px" F_weight="550">
            관심목록
          </TextLabel>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

MyPage.defaultProps = {};

const ProfileOuter = styled.div`
  width: 80px;
  height: 80px;
`;

const Profile = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 40px;
`;

const PayImage = styled.img`
  width: 55px;
`;

const Icon = styled.img`
  width: 70px;
`;

export default MyPage;
