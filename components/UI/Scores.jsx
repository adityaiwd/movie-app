import React from 'react'
import styled from "styled-components";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

const Wrapper = styled.div`
    background-color:#fff;
    box-shadow:var(--shadow-dark);
    border-radius: 10rem 0 0 10rem;
    z-index:20;
    position:relative;
    width:90%;
    float:right;
    display:flex;
    margin-top:-4rem;
    padding: 1rem 5rem;
    justify-content:space-between;
    margin-bottom:4rem;
`

const Rating = styled.div`
    text-align:center;
`
const Rate = styled.h2`
    font-size:1.2rem;
    font-weight:300;
    & span{
        font-weight:600;
    }
`

const MetaScore = styled.h3`
    background-color:#51CF66;
    color:#fff;
    border-radius:1rem;
    display:inline-block;
    padding:.9rem;
    font-weight:400;
    margin-bottom:.5rem;
`

const Scores = ({rate,count}) => {
    return (
        <Wrapper>
            <Rating>
                <StarRoundedIcon style={{fontSize: 36, color: "#FCC419" }}/>
                <Rate><span>{rate}</span>/10</Rate>
                <h3 style={{color:"var(--color-grey-dark-3)",fontWeight:500}}>{count}</h3>
            </Rating>
            <Rating>
                <StarBorderRoundedIcon style={{fontSize: 36}}/>
                <h3>Rate This</h3>
            </Rating>
            <Rating>
                <MetaScore>86</MetaScore>
                <h3>Meta Score</h3>
                <h3 style={{color:"var(--color-grey-dark-3)",fontWeight:500}}>62 critic reviews</h3>
            </Rating>
        </Wrapper>
    )
}

export default Scores
