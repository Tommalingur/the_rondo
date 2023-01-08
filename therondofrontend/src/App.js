import "./App.css";
import React from "react";
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Articles from "./screens/Articles";
import Article from "./screens/Article";
import News from "./screens/News";
import Users from "./screens/Users";
import SignUp from "./screens/SignUp";
import AddArticle from "./screens/AddArticle";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Articles" element={<Articles />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/AddArticle" element={<AddArticle />} />
                    <Route path="/Articles/:id" render={({ match }) => <Article article={articles[match.params.articleId - 1]} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

