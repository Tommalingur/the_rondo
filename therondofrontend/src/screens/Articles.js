import ".././App.css";
import "./Screens.css";
import ArticleApi from "../components/ArticleApi";
import styled from "styled-components";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import React from "react";

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

const ArticlesList = styled.div`
    background-color: var(--clr-secondary);
    width: 100vw;
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