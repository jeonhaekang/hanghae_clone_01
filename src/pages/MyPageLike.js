import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainCard from "../components/MainCard";
import apis from "../shared/apis";
import Header from "../shared/Header";

const MyPageLike = () => {
  const [list, setList] = useState([]);
  console.log(list);
  React.useEffect(() => {
    apis
      .likeList()
      .then((res) => {
        console.log(res.data);
        setList(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <React.Fragment>
      <Header title="관심목록" />
      {list.map((el, i) => {
        return <MainCard key={i} {...el} page="like" />;
      })}
    </React.Fragment>
  );
};

export default MyPageLike;
