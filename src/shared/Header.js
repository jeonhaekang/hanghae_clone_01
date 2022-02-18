import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements/Index";
import { history } from "../redux/configStore";

const Header = (props) => {
  const { title } = props;
  return (
    <Grid
      padding="15px"
      width="100%"
      height="56px"
      is_flex
      gap="15px"
      B_bottom="1px solid rgba(0,0,0,0.07)"
      position="sticky"
      top="0"
      BG_c="white"
      z_index="3"
    >
      <Text
        _onClick={() => history.goBack()}
        width="auto"
        F_size="25px"
        is_flex
      >
        <IoArrowBackOutline />
      </Text>
      <Text width="auto" F_size="18px" F_weight="bold">
        {title}
      </Text>
    </Grid>
  );
};

Header.defaultProps = {
  title: null,
};

export default Header;
