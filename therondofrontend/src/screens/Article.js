import ".././App.css";
import "./Screens.css";
import styled from "styled-components";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"

const ArticleGrid = styled.div`
    display: grid;
    width: 100vw;
    background-color: var(--clr-secondary);
    color: var(--clr-secondary);
    padding-top: 1rem;
    padding-bottom: 1rem;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 6fr;
    grid-template-areas:
    ". headline ."
    ". content .";
    grid-area: body;
`;

const HeadlineDiv = styled.div`
    display: flex;
    font-size: 30px;
    background-color: var(--clr-primary);
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-area: headline;
`;

const ContentDiv = styled.div`
    display: flex;
    background-color: var(--clr-primary);
    width: 100%;
    grid-area: content;
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Article() {
    const [articles, setArticles] = useState([]);
    const { id } = useParams();
    const getArticles = async () => {
        const result = await axios.get(
            `https://localhost:7199/api/articles/${id}`
        );
        setArticles(result.data);
    };
    useEffect(() => {
        getArticles();
    }, [articles]);

    if (articles.length === 0) {
        return (
            <ArticleGrid>
                <Loading>Loading...</Loading>
            </ArticleGrid>
        );
    }

    return (
        <div className="MainGrid">
            <Header />
            <ArticleGrid>
                <HeadlineDiv>{articles.headLine}</HeadlineDiv>
                <ContentDiv>{articles.content}</ContentDiv>
            </ArticleGrid>
            <Footer />
        </div>

    );
};

export default Article;