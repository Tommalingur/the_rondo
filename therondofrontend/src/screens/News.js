import ".././App.css";
import "./Screens.css";
import styled from "styled-components";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import React from "react";
import ListNewsApi from "../components/ListNewsApi";

const NewsGrid = styled.div`
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

const NewsList = styled.div`
    border: 4px solid var(--clr-primary);
    border-radius: 20px;
    color: var(--clr-primary);
    width: 100%;
    height: 600px;
    overflow-y: scroll;
    grid-area: articles;
`;

function News() {
    return (
        <div className="MainGrid">
            <Header />
            <NewsGrid>
                <NewsList>
                    <h1>News</h1>
                    <ListNewsApi />
                </NewsList>
            </NewsGrid>
            <Footer />
        </div>

    );
}

export default News;