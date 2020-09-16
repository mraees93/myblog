import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [message, setMessage] = useState("");

    const onClick = e => {
        e.preventDefault();

        const articles = {
            title,
            article,
            authorName
        }

        setTitle("");
        setArticle("");
        setAuthorName("");

        axios.post("/articles/add", articles).then(res => setMessage(res.data))
        .catch(err => {
            console.log(err);
        });
    };

    return (
    <AddArticleContainer>
    <div className = "container">
    <h1>Add new article</h1><br />
    <span className = "message">{message}</span>
    <form onSubmit = {onClick} encType = "multipart/form-data">
        <div className="form-group">
        <label htmlFor="authorName">Author Name:</label>
        <input type="type" value = {authorName} onChange = {e => setAuthorName(e.target.value)}
        className="form-control" placeholder="Author Name" />
        </div>
        <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" value = {title} onChange = {e => setTitle(e.target.value)}
        className="form-control" placeholder="Title" />
        </div>
        <div className="form-group">
        <label htmlFor="article">Article</label>
        <textarea value = {article} onChange = {e => setArticle(e.target.value)}
        className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Post Article</button>
    </form>
    </div>
    </AddArticleContainer>
    )
}

export default AddArticle;

// main container
const AddArticleContainer = styled.div `
    margin: 3rem auto;
    padding: 4rem;
    width: 55rem;
    h1{
        font-weight: 900;
        text-align: center;
    }
    .btn-primary{
        margin-top:1rem;
    }
    .message{
        font-weight: 900;
        color: red;
        padding: 1rem 1rem 1rem 0;
    }
`;