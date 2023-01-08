import ".././App.css";
import "./Screens.css";
import styled from "styled-components";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ArticleGrid = styled.div`
    display: grid;
    width: 100vw;
    justify-items: center;
    algin-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    ". articles .";
    grid-area: body;
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Article() {
    const [articles, setArticles] = useState([]);
    const getArticles = async () => {
        const result = await axios.get(
            "https://localhost:7199/api/articles"
        );
        setArticles(result.data);
    };

    useEffect(() => {
        getArticles();
    });

    if (articles.length === 0) {
        return (
            <ArticleGrid>
                <Loading>Loading...</Loading>
            </ArticleGrid>
        );
    }

    return (
        <ArticleGrid>
            <p></p>
            <div>{articles.headline}</div>
            <div>{articles.content}</div>
        </ArticleGrid>
    );
};

export default Article;