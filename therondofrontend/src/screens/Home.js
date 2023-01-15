import ".././App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeArticleApi from "../components/HomeArticleApi";
import React from "react";
import styled from "styled-components";
import HomeNewsApi from "../components/HomeNewsApi";

const HomeGrid = styled.div`
    display: grid;
    width: 100vw;
    background-color: var(--clr-secondary);
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
    ". . mainarticle mainarticle mainarticle . ."
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
    ". newslist newslist newslist newslist newslist .";
    }
`;

const MainArticleContent = styled.div`
    display: grid;
    grid-area: mainarticle;
    border-bottom: 1px solid var(--clr-primary);
`;

const NewsContent = styled.div`
    display: grid;
    grid-area: newslist;
    background-color: var(--clr-secondary);
`;

function Home() {
    return (
        <div className="MainGrid">
            <Header />
            <HomeGrid>
                <MainArticleContent><HomeArticleApi /></MainArticleContent>
                <NewsContent>
                    <HomeNewsApi />                    
                </NewsContent>
            </HomeGrid>
            <Footer />
        </div>
    );
}

export default Home;