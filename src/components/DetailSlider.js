import React from "react";
import test from "../images/test.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Grid } from "../elements/Index";

const DetailSlider = (props) => {
  const style = {
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    // showIndicators: false, 페이지 표시 기능 off
  };
  return (
    <React.Fragment>
      <Carousel {...style}>
        <AspectInner src={test} />
        <AspectInner src={test} />
        <AspectInner src={test} />
      </Carousel>
    </React.Fragment>
  );
};

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default DetailSlider;
