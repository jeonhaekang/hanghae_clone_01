import React from "react";
import { Grid, TextLabel, Image } from "../elements/Index";
import test from "../images/test.jpeg";
import Rate from "../components/Rate";

const DetailUserCard = (props) => {
  return (
    <Grid
      B_bottom="1px solid rgba(0,0,0,0.1)"
      padding="20px 15px"
      is_flex
      justify_content="space-between"
    >
      <Grid is_flex gap="10px">
        <Grid>
          <Image shape="circle" size="45" src={test} />
        </Grid>
        <Grid
          is_flex
          flex_direction="column"
          align_items="flex-start"
          gap="5px"
        >
          <TextLabel F_weight="bold">godgooddog</TextLabel>
          <TextLabel>노원구 상계</TextLabel>
        </Grid>
      </Grid>
      <Grid>
        <Rate />
      </Grid>
    </Grid>
  );
};

export default DetailUserCard;
