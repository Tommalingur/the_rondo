import ".././App.css";
import "./Screens.css";
import ListArticleApi from "../components/ListArticleApi";
import styled from "styled-components";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import React from "react";

const ArticleGrid = styled.div`
    display: grid;
    justify-items: center;
    background-color: var(--clr-secondary);
    padding-top: 2rem;
    padding-bottom: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    ". articles .";
    grid-area: body;
`;

const ArticlesList = styled.div`
    border: 4px solid var(--clr-primary);
    border-radius: 20px;
    color: var(--clr-primary);
    width: 100%;
    height: 600px;
    overflow-y: scroll;
    grid-area: articles;
`;

function Articles() {
    return (
        <div className="MainGrid">
            <Header />
            <ArticleGrid>
                <ArticlesList>
                    <h1>Articles</h1>
                    <ListArticleApi />
                </ArticlesList>
            </ArticleGrid>
            <Footer />
        </div>

    );
}

export default Articles;