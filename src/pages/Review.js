import React from "react";
import Header from "../shared/Header";
import { Grid, TextLabel, Button } from "../elements/Index";
import test from "../images/test.jpeg";
import styled from "styled-components";
import bad from "../images/review/bad.png";
import badColor from "../images/review/badcolor.png";
import good from "../images/review/good.png";
import goodColor from "../images/review/goodcolor.png";
import veryGood from "../images/review/verygood.png";
import veryGoodColor from "../images/review/verygoodcolor.png";
import apis from "../shared/apis";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configStore";

const Review = (props) => {
  const postId = props.match.params.postid;
  const user = useSelector((state) => state.user.userInfo);
  console.log(postId);
  const [state, setState] = React.useState(null);

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    apis.getOnePost(postId).then((res) => {
      setPost(res.data);
    });
  }, []);

  const selectRate = () => {
    console.log("test");
    console.log("id : ", post.user.id, "rate : ", state);
    apis
      .rate({ id: post.user.id, rate: state, PostId: postId })
      .then((res) => {
        console.log(res);
        alert("판매자를 평가하였습니다! 감사합니다.");
        history.replace("/mypage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(post);

  return (
    <React.Fragment>
      <Header />
      {post && (
        <Grid>
          <Grid
            is_flex
            padding="15px"
            gap="15px"
            B_bottom="1px solid rgba(0,0,0,0.1)"
          >
            <Grid width="13%">
              <AspectInner src={post.image} />
            </Grid>
            <Grid
              is_flex
              flex_direction="column"
              align_items="flex-start"
              gap="5px"
            >
              <TextLabel F_size="15px" F_weight="bold">
                {post.title}
              </TextLabel>
              <TextLabel F_weight="500">{post.price}원</TextLabel>
            </Grid>
          </Grid>

          <Grid
            is_flex
            padding="15px"
            gap="12px"
            font_weight="600"
            flex_direction="column"
            align_items="flex-start"
          >
            <Grid>
              <TextLabel F_size="16px" F_weight="bold">
                {user.nickname}님, <br />
                이번 거래는 어떠셨나요?
              </TextLabel>
            </Grid>
            <Grid color="rgba(0,0,0,0.6)">
              <TextLabel F_size="13px">
                거래선호도는 나만 볼 수 있어요.
              </TextLabel>
            </Grid>

            <Grid
              is_flex
              justify_content="space-around"
              width="100%"
              color="#DEDEE2"
              font_weight="bold"
            >
              <Grid
                is_flex
                flex_direction="column"
                gap="10px"
                _onClick={() => setState(-1)}
              >
                <Image src={state === -1 ? badColor : bad} />
                <TextLabel F_color={state === -1 && "#888A93"}>
                  별로예요
                </TextLabel>
              </Grid>
              <Grid
                is_flex
                flex_direction="column"
                gap="10px"
                _onClick={() => setState(0)}
              >
                <Image src={state === 0 ? goodColor : good} />
                <TextLabel F_color={state === 0 && "#2FB791"}>좋아요</TextLabel>
              </Grid>
              <Grid
                is_flex
                flex_direction="column"
                gap="10px"
                _onClick={() => setState(1)}
              >
                <Image src={state === 1 ? veryGoodColor : veryGood} />
                <TextLabel F_color={state === 1 && "#F6793A"}>
                  최고예요
                </TextLabel>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            position="fixed"
            bottom="0"
            width="100%"
            padding="15px"
            color="white"
            font_weight="bold"
            font_size="15px"
          >
            <Button
              width="100%"
              padding="10px"
              Border="0"
              BG_color={state !== null ? "#F6793A" : "#DEDEE2"}
              B_radius="5px"
              disabled={state !== null ? false : true}
              _onClick={selectRate}
            >
              후기 보내기
            </Button>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 80px;
`;

export default Review;
