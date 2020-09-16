import React from 'react';
import styled from "styled-components";

const footer = () => {
    return (
        <FooterContainer>
            <span>
                &copy;{new Date().getFullYear()} All rights Reserved. Raees Dolley.
            </span>
        </FooterContainer>
    )
};

export default footer;

// footer container
const FooterContainer = styled.footer `
    background: skyblue;
    height: 3.5rem;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
    position: absolute;
    
    span{
        color: black;
        padding-top: 10rem;
        text-align: center;
        position: relative;
    }
`;