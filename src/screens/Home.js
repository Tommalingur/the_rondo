import ".././App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import styled from "styled-components";

const HomeGrid = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
    ". mainarticle mainarticle mainarticle articlelist articlelist ."
    "newslist newslist newslist newslist newslist newslist newslist";
    grid - area: body;
    @media (max-width: 1060px) {
    display: grid;
    margin-top: 20px;
    width: 100vw;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas:
    ". mainarticle mainarticle mainarticle mainarticle mainarticle ."
    ". articlelist articlelist articlelist articlelist articlelist ."
    "newslist newslist newslist newslist newslist newslist newslist";
    }
`;

const MainArticleContent = styled.div`
    display: grid;
    grid-area: mainarticle;
`;

const ArticleListContent = styled.div`
    display: grid;
    grid-area: articlelist;
`;

const NewsContent = styled.div`
    display: grid;
    background-color: var(--clr - secondary);
    grid-area: newslist;
`;

function Home() {
    return (
        <div className="MainGrid">
            <Header />
            <HomeGrid>
                <MainArticleContent />
                <ArticleListContent />
                <NewsContent />
            </HomeGrid>
            <Footer />
        </div>
    );
}

export default Home;