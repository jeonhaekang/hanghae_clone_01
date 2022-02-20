import React from "react";
import MainCard from "../components/MainCard";
import Header from "../shared/Header";

const MyPageLike = () => {
  return (
    <React.Fragment>
      <Header title="관심목록" />
      <MainCard page="like" />
      <MainCard page="like" />
      <MainCard page="like" />
      <MainCard page="like" />
    </React.Fragment>
  );
};

export default MyPageLike;
