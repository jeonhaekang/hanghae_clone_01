import React from "react";
import { Grid, TextLabel } from "../elements/Index";

const DetailContentCard = (props) => {
  return (
    <React.Fragment>
      <Grid
        B_bottom="1px solid rgba(0,0,0,0.1)"
        padding="20px 15px"
        is_flex
        flex_direction="column"
        align_items="flex-start"
        justify_content="space-between"
      >
        <Grid>
          <TextLabel F_weight="bold" F_size="25px">
            티비나온 강아지
          </TextLabel>
        </Grid>
        <Grid margin="5px 0" color="#4D5159">
          <TextLabel>야생 강아지</TextLabel>
        </Grid>
        <Grid margin="10px 0 30px 0">
          <TextLabel F_size="17px">티비나온 강아지</TextLabel>
        </Grid>
        <Grid color="#4D5159">
          <TextLabel F_size="13px">관심 1 ∙ 조회 20</TextLabel>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DetailContentCard;
