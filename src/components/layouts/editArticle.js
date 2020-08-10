import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EditArticle = props => {
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

        axios.put(`/articles/update/${props.match.params.id}`, articles).then(res => setMessage(res.data))
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setAuthorName(res.data.authorName),
            setArticle(res.data.article) 
        ])
        .catch(error => console.log(error))
        // delete props otherwise you cant edit 
    }, []);

    return (
    <AddArticleContainer>
    <div className = "container">
    <h1>Edit article</h1><br />
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
        <button type="submit" className="btn btn-primary">Update Article</button>
    </form>
    </div>
    </AddArticleContainer>
    )
}

export default EditArticle;

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
        padding: 1rem 1rem 3rem 0;
        margin-bottom: 3rem;
    }
`;