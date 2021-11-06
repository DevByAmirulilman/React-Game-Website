import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

import hero from '../img/hero.jpg'

function Hero() {
    return (
        <StyledHero>
            <img src={hero} alt="" />
        </StyledHero>
    )
}

const StyledHero = styled(motion.div)`
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}

`

export default Hero
