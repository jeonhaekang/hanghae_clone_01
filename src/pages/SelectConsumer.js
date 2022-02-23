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

  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {
    apis
      .getLikeUser(postId)
      .then((res) => {
        console.log(res);
        setUserList(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setState = (consumer) => {
    dispatch(postActions.postStateSetDB(postId, consumer));
  };

  return (
    <>
      <Header title="구매자 선택" />
      <Grid padding="15px">
        <Grid>어떤분에게 판매하셨나요??</Grid>
        {userList.map((el, i) => {
          console.log(el);
          return (
            <Grid key={i} _onClick={() => setState(el.id)}>
              <DetailUserCard user={el} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SelectConsumer;
