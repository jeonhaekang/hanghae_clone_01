import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements/Index";
import logo from "../images/DaangnMarket_logo.jpeg";
import { history } from "../redux/configStore";
import Header from "../shared/Header";

const Start = (props) => {
  return (
    <Grid>
      <Header title="로그인" />
      <Grid
        is_flex
        flex_direction="column"
        gap="20px"
        position="fixed"
        left="50%"
        top="50%"
        transform="translate(-50%, -60%)"
        width="100%"
      >
        <Logo src={logo} />
        <Text width="auto" F_weight="bold" F_size="25px">
          당신 근처의 당근마켓
        </Text>
        <Text
          width="auto"
          F_weight="bold"
          F_align="center"
          F_size="17px"
          F_color="#4D5159"
        >
          내 동네를 설정하고 <br /> 당근마켓을 시작해보세요.
        </Text>
      </Grid>
      <Grid
        position="fixed"
        bottom="0"
        width="100%"
        padding="15px"
        is_flex
        flex_direction="column"
        gap="20px"
      >
        <Grid width="100%">
          <Button
            _onClick={() => history.push("/login")}
            width="100%"
            Border="0"
            B_radius="5px"
            BG_color="#FF7E36"
            padding="10px"
          >
            <Text F_size="17px" F_weight="bold" F_color="white">
              시작하기
            </Text>
          </Button>
        </Grid>
        <Grid is_flex>
          <Text width="auto" margin="0 5px 0 0">
            아직 계정이 없나요?
          </Text>
          <Text
            _onClick={() => history.push("/signup")}
            width="auto"
            F_weight="bold"
            F_color="#FF7E36"
          >
            회원가입
          </Text>
        </Grid>
      </Grid>
    </Grid>
  );
};

Start.defaultProps = {};

const Logo = styled.img`
  width: 100px;
`;

export default Start;
