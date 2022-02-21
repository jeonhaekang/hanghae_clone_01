import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import apis from "../shared/apis";

import { Grid, Upload, Button } from '../elements/Index';
import { FiChevronDown } from 'react-icons/fi'
import Header from "../shared/Header";

import ReactModal from "react-modal";

const Post = (props) => {
  const files = useSelector(state => state.image.files)
  // category & modal
  const [open, setOpen] = React.useState(false);
  const [cat, setCat] = React.useState(null);

  // title, content, price
  const [title, setTit] = React.useState('');
  const [content, setCon] = React.useState('');
  const [price, setPri] = React.useState('');
  const [_dis,setDis] = React.useState(true);

  const least = () => {
    if(title.length !== 0 && content.length !==0 && cat ){
      setDis(false);
    }
    if(title.length === 0 || content.length === 0 ){
      setDis(true);
    }
  }

  const selectCat = (e) => {
    setCat(e.target.innerHTML)
    least()
    setOpen(false)
  }

  const posting = () => {
    setDis(true)
    let data = {
      title: title,
      content: content,
      category: cat,
      image: files,
      price: price,
    };
    
    console.log(data)

    // apis.posting(data)
    // .then(()=>{
    //   history.replace('/main')
    // })
    // .catch(err=>{
    //   console.log('err',err)
    // })

  }

  return (
    <>
    <Header title='post' _dis={_dis} _onClick={posting} />
    <Grid width='100%' padding='8px'>

      {/* 사진 업로드  */}
      <Grid padding='10px 4px' width='100%' B_bottom='1px solid rgba(0,0,0,0.07)' >
        <Upload />
      </Grid>

      {/* 제목 */}
      <Grid padding='16px 4px' width='100%' B_bottom='1px solid rgba(0,0,0,0.07)' >
        <input 
        type='text'
        placeholder='제목'
        onChange={(e)=>{
          setTit(e.target.value)
          least()
        }}
        style={{border:'none',outline:'none',width:'100%',caretColor:'#FF7E36',}} 
        />
      </Grid>

      {/* 카테고리 modal 이용 단 골라진 카테고리가 modal 적용 되지는 않음 */}
      <Grid padding='16px 4px' width='100%' B_bottom='1px solid rgba(0,0,0,0.07)' >
        <Grid is_flex justify_content='space-between' _onClick={()=>{setOpen(true)}}>
            {cat ? cat : '카테고리'}
            <FiChevronDown />
        </Grid>
        <ReactModal 
        isOpen={open}
        onRequestClose={props.clearSelectedOption}
        ariaHideApp={false}
        contentLabel="Selected Option">
          <Grid _onClick={selectCat} padding='16px 0' B_bottom='1px solid #ddd' >장난감</Grid>
          <Grid _onClick={selectCat} padding='16px 0' B_bottom='1px solid #ddd' >의류</Grid>
          <Grid _onClick={selectCat} padding='16px 0' B_bottom='1px solid #ddd' >기프티콘</Grid>
        </ReactModal>
      </Grid>

      {/* 가격 */}
      <Grid is_flex justify_content='space-between' padding='16px 4px' width='100%' B_bottom='1px solid rgba(0,0,0,0.07)' >
        <Grid is_flex justify_content='space-between'>
        {price.length === 0 ?
        <div style={{
          display:'inline-block',
          padding:'4px',
          width:'auto',
          color:'rgba(0,0,0,0.5)',
          fontSize:'12px'}}>
          ￦</div> :
        <div style={{
          display:'inline-block',
          padding:'4px',
          width:'auto',
          color:'#000',
          fontSize:'12px'}}>
          ￦</div>
        }
        
        <input 
         type='number'
         onChange={(e)=>{setPri(e.target.value)}}
         style={{
           width:'auto',
           border:'none',
           outline:'none',
           caretColor:'#FF7E36',
         }}
         placeholder='가격(선택사항)'
         />
          
        </Grid>

        <Grid>
          <input type='checkbox'/>
          <div style={{display:'inline-block',width:'auto',fontSize:'12px'}}>가격 제안받기</div>
        </Grid>
      </Grid>

      {/* 내용 */}
      <Grid padding='16px 4px' width='100%' >
        <textarea 
        rows={10}
        onChange={(e)=>{
          setCon(e.target.value)
          least()
        }}
        style={{
          width:'100%',
          lineHeight:'2',
          border:'none',
          outline:'none', 
          fontSize:'14px',
          caretColor:'#FF7E36'
        }}
        placeholder='구매 일자, 사용감 등 물품에 대한 자세한 정보를 작성하면 판매확률이 올라가요!' 
        />
      </Grid>
      
    </Grid>
    </>
  )
};

Post.defaultProps = {};

export default Post;
