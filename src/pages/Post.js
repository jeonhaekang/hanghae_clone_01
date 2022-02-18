import React from "react";
import { Grid, Upload, Image } from '../elements/Index';

const Post = (props) => {
  return (
    <Grid width='100%' padding='8px'>
      {/* 사진 업로드 */}
      <Grid padding='10px 4px' width='100%' B_bottom='1px solid #000' >
        <Upload />
      </Grid>
      {/* 제목 */}
      <Grid padding='4px' width='100%' B_bottom='1px solid #000' >
        안녕
      </Grid>
      {/* 카테고리 mordal 이용 단 골라진 카테고리가 딱히 적용 되지는 않음 */}
      <Grid padding='4px' width='100%' B_bottom='1px solid #000' >
        카테고리-mordal
      </Grid>
      {/* 가격 */}
      <Grid padding='4px' width='100%' B_bottom='1px solid #000' >
        가격-input
      </Grid>
      {/* 내용 */}
      <Grid padding='4px' width='100%' B_bottom='1px solid #000' >
        내용-textarea
      </Grid>
    </Grid>
  )
};

Post.defaultProps = {};

export default Post;
