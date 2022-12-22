import ".././App.css";
import "./Screens.css";
import styled from "styled-components";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import React from "react";

const NewsGrid = styled.div`
    display: grid;
    width: 100vw;
    justify-items: center;
    algin-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    ". articles .";
    grid-area: body;
`;

const NewsList = styled.div`
    background-color: var(--clr-secondary);
    width: 100vw;
    grid-area: articles;
`;

function News() {
    return (
        <div className="MainGrid">
            <Header />
            <NewsGrid><NewsList><p>News Piece1</p><p>News Piece2</p><p>News Piece3</p></NewsList></NewsGrid>
            <Footer />
        </div>

    );
}

export default News;