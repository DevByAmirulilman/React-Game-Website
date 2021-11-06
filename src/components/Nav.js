import React, { useState } from 'react'

//import styles and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';


//import animations
import {fadeIn} from '../animation';

//imprt resux and routes
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

function Nav() {
    const dispatch = useDispatch();
    const [textInput,setTextInput]=useState("");

    const inputHandler = (e)=>{
        setTextInput(e.target.value);
    };
    const submitSearch = (e)=>{
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    }
    const clearSearched =()=>{
        dispatch({type:"CLEARED_SEARCHED"});
    }
    return (
        <div>
            <StyledNav variants={fadeIn} initial="hidden" animate="show">
                <Logo onClick={clearSearched}>
                    <h1>Game Zone</h1>
                </Logo>
                <StyledSearch>
                <form className="search">
                    <input value={textInput} onChange={inputHandler} type="text" />
                    <button onClick={submitSearch} type="submit">Search</button>
                </form>
                </StyledSearch>
            </StyledNav>
        </div>
    )
}

const StyledSearch = styled(motion.div)`
margin-top: -120px;

`

const StyledNav =styled(motion.div)`
padding: 3rem 5rem;
text-align: center;
input{
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
    outline: none;
    opacity: 0.5;
}
button{
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #000000;
    color: white;
}
`
const Logo = styled(motion.div)`
display: flex;
justify-content: center;
cursor: pointer;
color: white;
position: absolute;
top: 20px;
right: 639px;


h1{
    font-size: 3rem;
    color: #ffffff;
}

img{
    width: 4rem;
    height: 4rem;
    color: #ffffff;
}
`

export default Nav
