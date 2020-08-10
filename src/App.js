import React, { useState, useEffect } from 'react';
import {Route} from "react-router-dom";
import axios from "axios";
import Navigation from './components/layouts/navigation';
import EditArticle from './components/layouts/editArticle';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Article from './components/layouts/article';
import Articles from './components/articles';
import AddArticle from './components/addArticle';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("/articles").then(res => setPosts(res.data))
    .catch(error => console.log(error));
  });
  return (
    <div className="App">
     <Header />
      <Navigation />
      <Footer />
      <Route exact path = "/" render = {() => <Articles posts = {posts} />} />
      <Route path = "/article/:id" render = {props => <Article {...props} posts = {posts} />} />
      <Route path = "/update/:id" render = {props => <EditArticle {...props} posts = {posts} />} />
      <Route path = "/addArticle" component = {AddArticle} />
    </div>
  );
}

export default App;
