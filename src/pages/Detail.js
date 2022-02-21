import React from "react";
import { Grid } from "../elements/Index";
import DetailUserCard from "../components/DetailUserCard";
import DetailContentCard from "../components/DetailContentCard";
import DetailFooter from "../components/DetailFooter";
import DetailSlider from "../components/DetailSlider";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../redux/modules/Post";

const Detail = (props) => {
  const dispatch = useDispatch();
  const postId = props.match.params.postid;
  const postList = useSelector((state) => state.post.list);
  const postIdx = postList.findIndex((el) => el.postId === parseInt(postId));
  let post = postList[postIdx];

  React.useEffect(() => {
    if (post) {
      return;
    }
    dispatch(postActions.getOnePostDB(postId));
  });

  const postData = {
    title: post?.title,
    content: post?.content,
    category: post?.category,
    likeCnt: post?.likeCnt,
    viewCnt: post?.viewCnt,
  };

  return (
    <React.Fragment>
      {post && (
        <Grid>
          <DetailSlider image={post.image} />
          <DetailUserCard user={post.user} />
          <DetailContentCard {...postData} />
          <DetailFooter price={post.price} postId={post.postId} />
        </Grid>
      )}
    </React.Fragment>
  );
};

Detail.defaultProps = {};

export default Detail;
