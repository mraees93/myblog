import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import logo from "../../logo.jpeg";

const navigation = () => {
    return (
        <NavigationContainer>
            <nav className="navbar navbar-expand-lg navbar-light px-3 py-0">
  <Link className="navbar-brand" to="#"><img className = "logo"  src = {logo} alt = "logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="addArticle">Add article</Link>
      </li>
    </ul>
  </div>
</nav>
</NavigationContainer>
    )
}

export default navigation;

// navigation container
const NavigationContainer = styled.div `
    background:{
      color: cyan;
    }
    .nav-link{
        color: black !important;
        &:hover{
            background: skyblue;
        }
    }
    .logo{
        width: 50px;
        border: 4px solid red;
        border-radius: 27px;
    }

`;
