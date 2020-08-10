import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Article = props => {
    const[title, setTitle] = useState("");
    const[authorName, setAuthorName] = useState("");
    const[article, setArticle] = useState("");

    useEffect(() => {
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setAuthorName(res.data.authorName),
            setArticle(res.data.article) 
        ])
        .catch(error => console.log(error))
    }, [props]);


    return (
    <MainContainer>
        <h2>{title}</h2>
        <p>{article}</p>
        <p className = "badge badge-secondary">{authorName}</p>
        <br />
        <div className = "row my-5">
        <Link path to = "/" type="submit" className="btn btn-primary">Back to home</Link>
        </div>
    </MainContainer>
    );
};

export default Article;

// main container
const MainContainer = styled.div `
    margin: 6rem auto;
    padding: 3rem 14rem;
    h2{
        text-align: center;
        font-weight: 900;
        margin-bottom: 3rem;
    }
    img{
        width: 10rem;
        display: block;
        margin: auto;
    }
    .btn-primary{
        margin-top:1rem;
    }
`;
