import React from "react";
import { Grid } from "../elements/Index";
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
