import ".././App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import styled from "styled-components";

const MainGrid = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 0,5fr 2fr 2fr 0,5fr;
    grid-template-rows: 1fr 4fr 1fr;
    grid-template-areas:
    "header header header header"
    "body body body body"
    "footer footer footer footer";
`;

const HomeGrid = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
    ". mainarticle mainarticle mainarticle articlelist articlelist ."
    "newslist newslist newslist newslist newslist newslist newslist";
    grid - area: body;
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
        <MainGrid>
            <Header />
            <HomeGrid>
                <MainArticleContent />
                <ArticleListContent />
                <NewsContent/>
            </HomeGrid>
            <Footer/>
        </MainGrid>
    );
}

export default Home;