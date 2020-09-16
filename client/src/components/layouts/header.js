import React from 'react'
import styled from "styled-components";

const header = () => {
    return (
        <MainContainer>
            <h1>Welcome to <br />
            EEZYS BLOG</h1>
        </MainContainer>
    )
}

export default header;

// main container
const MainContainer = styled.header `
    background: url(../../images/header2.jpg)no-repeat center/cover;
    height: 15rem;

    h1{
    text-align: center;
    padding: 35px;
    font-weight: 900;
    text-shadow: 0 0 20px #FF0000;
    font-size: 4rem;
    }
`;
