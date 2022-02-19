import React from "react";
import { Grid, TextLabel, Button, Image } from "../elements/Index";
import styled from "styled-components";
import test from "../images/test.jpeg";
import DetailUserCard from "../components/DetailUserCard";
import DetailContentCard from "../components/DetailContentCard";
import DetailFooter from "../components/DetailFooter";
import DetailSlider from "../components/DetailSlider";

const Detail = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <DetailSlider />
        <DetailUserCard />
        <DetailContentCard />
        <DetailFooter />
      </Grid>
    </React.Fragment>
  );
};

Detail.defaultProps = {};

export default Detail;
