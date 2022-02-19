import React from "react";
import styled from "styled-components";
import { Grid } from './Index'
import { HiUpload } from 'react-icons/hi';

const Upload = () => {

    return(

        <Grid width='auto'>
            <Lab htmlFor="up" >
                    <HiUpload />
            </Lab>
            <Elin type='file' id="up"/>
        </Grid>
    )
}

const Lab = styled.label`
    display: block;
    text-align center;
    line-height: 50px;
    font-size: 18px;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 3px;
`;

const Elin = styled.input`
    display: none;
`;

export default Upload;