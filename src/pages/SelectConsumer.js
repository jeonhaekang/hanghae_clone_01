import React from "react";
import Header from "../shared/Header";
import { Grid, TextLabel } from "../elements/Index";
import DetailUserCard from "../components/DetailUserCard";
import apis from "../shared/apis";
import { useDispatch } from "react-redux";
import { postActions } from "../redux/modules/Post";

const SelectConsumer = (props) => {
  const dispatch = useDispatch();
  const postId = props.match.params.postid;
  console.log(postId);

  let userList = [];

  //   React.useEffect(() => {
  //     apis
  //       .getLikeUser()
  //       .then((res) => {
  //         console.log(res.data.likeUsers);
  //         userList = res.data.likeUsers;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });

  const setState = (consumer) => {
    dispatch(postActions.postStateSetDB(postId, consumer));
  };

  return (
    <>
      <Header title="구매자 선택" />
      <Grid padding="15px">
        <Grid>어떤분에게 판매하셨나요??</Grid>
        {userList.map((el) => {
          console.log(el);
          return (
            <Grid _onClick={setState(el.userid)}>
              <DetailUserCard user={el} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SelectConsumer;
