import React from "react";
import Header from "../shared/Header";
import { Grid, TextLabel } from "../elements/Index";
import MainCard from "../components/MainCard";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../redux/modules/Post";

const MyPageBuy = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  const user = useSelector((state) => state.user.userInfo.nickname);

  console.log(user);

  React.useEffect(() => {
    dispatch(postActions.loadPostDB());
  }, []);

  return (
    <Grid>
      <Header title="구매내역" />
      {/* 리스트 */}
      <Grid>
        {postList.map((el, i) => {
          console.log(el);
          if (el.consumer === user) {
            return (
              <React.Fragment key={i}>
                <MainCard {...el} />
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
          }
        })}
      </Grid>
    </Grid>
  );
};

export default MyPageBuy;
