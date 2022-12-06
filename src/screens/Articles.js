import ".././App.css";
import "./Screens.css";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import React from "react";

function Articles() {
    return (
        <div className="MainGrid">
            <Header/>
            <div className="ArticleGrid">Articles</div>
            <Footer/>
        </div>
        
    );
}

export default Articles;