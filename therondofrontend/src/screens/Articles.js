import ".././App.css";
import "./Screens.css";
import ArticleApi from "../components/ArticleApi";
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
    background-color: var(--clr-secondary);
    border: 4px solid var(--clr-primary);
    width: 100%;
    grid-area: articles;
`;

function Articles() {
    return (
        <div className="MainGrid">
            <Header />
            <ArticleGrid><ArticlesList><ArticleApi/></ArticlesList></ArticleGrid>
            <Footer />
        </div>

    );
}

export default Articles;