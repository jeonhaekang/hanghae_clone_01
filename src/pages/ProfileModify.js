import React from "react";
import Header from "../shared/Header";
import { Grid, TextLabel, Button } from "../elements/Index";
import styled from "styled-components";
import profile from "../images/profile.jpeg";
import ReactModal from "react-modal";

import { useDispatch, useSelector } from "react-redux";
import { imgActions } from "../redux/modules/Image";

const ProfileModify = (props) => {
  const dispatch = useDispatch();
  const pro = useSelector(state=>state.image.pro);
  const fileInput = React.useRef();
  const addrList = [
    "서울특별시",
    "울산광역시",
    "광주광역시",
    "인천광역시",
    "부산광역시",
    "대전광역시",
    "수원시",
    "안동시",
    "전주시",
    "청주시",
    "진주시",
    "경주시",
    "창원시",
  ];
  // 버튼 활성화 여부
  const [state, setState] = React.useState(false);

  const [nickname, setNickname] = React.useState("");
  const [address, setAdd] = React.useState("");
  const [open, setOpen] = React.useState(false);

  // 주소 선택
  const selAdd = (e) => {
    setOpen(false);
    setAdd(e.target.innerHTML);
  };

  // 닉네임 작성
  const editNickname = (e) => {
    setNickname(e.target.value);
  };

  // 사진변경
  const selpic = (e) => {
    const reader = new FileReader();
        let file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            dispatch(imgActions.setPro(reader.result,file));
        }
  }

  React.useEffect(() => {
    if (nickname) {
      setState(true);
    } else {
      setState(false);
    }
  }, [nickname]);

  return (
    <React.Fragment>
      <Header title="프로필 수정" />

      <Grid is_flex flex_direction="column" gap="20px" padding="20px">
        {/* <ProfileImage src={profile} /> */}
        <Grid width='auto' position='relative' >
          <ProfileLabel htmlFor="prof" src={ pro.length === 0 ? profile : pro[0] } />        
          {pro.length !== 0 &&
          <Delpro onClick={()=>{dispatch(imgActions.delPro())}} >x</Delpro>}
          <Editimg id='prof' ref={fileInput} type='file' onChange={selpic} />
        </Grid>
        <Input onChange={(e) => editNickname(e)} />
        <Input value={address} readOnly onClick={() => setOpen(true)} />
      </Grid>

      <EditBtn state={state}>완료</EditBtn>

      <ReactModal
        isOpen={open}
        ariaHideApp={false}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            zIndex: 3,
          },
          content: {
            height: "400px",
            top: "50%",
            transform: "translate(0,-50%)",
          },
        }}
      >
        {addrList.map((el, i) => {
          return (
            <Grid
              padding="16px 0"
              B_bottom="1px solid #ddd"
              key={i}
              _onClick={(e) => selAdd(e)}
            >
              {el}
            </Grid>
          );
        })}
      </ReactModal>
    </React.Fragment>
  );
};

const ProfileImage = styled.img`
  width: 120px;
`;

const ProfileLabel = styled.label`
  display: block;
  postion: relative;
  width: 120px;
  height: 120px;
  border: 1px solid rgba(0 0 0 0.7);
  border-radius: 120px;
  background-image: url(${props => props.src});
  background-size: cover;
`

const Delpro = styled.div`
  color: #FFF;
  font-size: 24px;
  text-align: center;
  line-height: 20px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #000;
  position: absolute;
  right: 3px;
  bottom: 2px;
`;

const Editimg = styled.input`
  display: none;
`;

const EditBtn = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 18px;
  border: 0;
  color: white;
  font-size: 19px;
  font-weight: bold;
  background-color: ${(props) =>
    props.state ? "#FF7E36" : "rgba(0, 0, 0, 0.15)"};
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  text-align: center;
  outline: none;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.7);
    caret-color: #ff7e36;
  }
`;

export default ProfileModify;
