import React from "react";
import Header from "../shared/Header";
import { Grid, TextLabel } from "../elements/Index";
import MainCard from "../components/MainCard";
import { history } from "../redux/configStore";

const MyPageBuy = () => {
  const test = [1, 2, 3, 4];

  return (
    <Grid>
      <Header title="구매내역" />
      {/* 리스트 */}
      <Grid>
        {test.map((el) => {
          return (
            <React.Fragment key={el}>
              <MainCard />
              <Grid
                is_flex
                B_bottom="1px solid rgba(0,0,0,0.1)"
                padding="10px"
                justify_content="center"
                _onClick={() => {
                  history.push("/review");
                }}
              >
                <TextLabel F_size="15px" F_weight="550" F_color="#ff7e36">
                  거래 후기 보내기
                </TextLabel>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default MyPageBuy;
