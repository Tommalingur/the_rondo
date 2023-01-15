import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Articles from "./screens/Articles";
import Article from "./screens/Article";
import News from "./screens/News";
import NewsPiece from "./screens/NewsPiece"
import SignUp from "./screens/SignUp";
import AddArticle from "./screens/AddArticle";
import AddNews from "./screens/AddNews";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Articles" element={<Articles />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/AddArticle" element={<AddArticle />} />
                    <Route path="/AddNews" element={<AddNews />} />
                    <Route path="/Articles/:id" element={<Article />} />
                    <Route path="/News/:id" element={<NewsPiece />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

