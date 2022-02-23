import React from "react";
import Header from "../shared/Header";
import { Grid, TextLabel } from "../elements/Index";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../redux/modules/Post";
import { history } from "../redux/configStore";

const MyPageSell = () => {
  const [state, setState] = React.useState(true);

  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  const user = useSelector((state) => state.user.userInfo);

  React.useEffect(() => {
    dispatch(postActions.loadPostDB());
  }, []);

  return (
    <Grid>
      <Header title="판매내역" />

      {/* 네비게이션 바 */}
      <Grid is_flex font_size="16px" font_weight="550" position="relative">
        <Grid width="100%" box_shadow="rgba(50, 50, 105, 0.15) 0px 0px 5px 0px">
          <Menu>
            <MenuList
              onClick={() => {
                setState(true);
              }}
              state={state}
            >
              판매중
            </MenuList>
            <MenuList
              onClick={() => {
                setState(false);
              }}
              state={!state}
            >
              거래완료
            </MenuList>
          </Menu>
        </Grid>
        <Slider state={state} />
      </Grid>

      {/* 리스트 */}
      <Grid>
        {postList.map((el, i) => {
          console.log(el);
          if (!state === el.state && el.user.id === user.id) {
            return (
              <React.Fragment key={i}>
                <MainCard {...el} />
                {state && (
                  <Grid
                    is_flex
                    B_bottom="1px solid rgba(0,0,0,0.1)"
                    padding="10px"
                    justify_content="center"
                    _onClick={() =>
                      history.push("/selectConsumer/" + el.postId)
                    }
                  >
                    <TextLabel F_size="15px" F_weight="550">
                      판매상태 변경
                    </TextLabel>
                  </Grid>
                )}
              </React.Fragment>
            );
          }
        })}
      </Grid>
    </Grid>
  );
};

const Menu = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  list-style: none;
`;

const MenuList = styled.li`
  width: 50%;
  float: left;
  line-height: 40px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;

  ${(props) => (!props.state ? "color: rgba(0,0,0,0.4)" : "")}
`;

const Slider = styled.div`
  height: 3px;
  width: 50%;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: ${(props) => (props.state ? "0" : "50%")};
  transition: 0.2s;
`;

export default MyPageSell;
