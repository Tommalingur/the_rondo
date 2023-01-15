import ".././App.css";
import "./Screens.css";
import styled from "styled-components";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import moment from "moment";

const NewsGrid = styled.div`
    display: grid;
    width: 100vw;
    background-color: var(--clr-secondary);
    color: var(--clr-secondary);
    padding-top: 1rem;
    padding-bottom: 1rem;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr 6fr;
    grid-template-areas:
    ". headline ."
    ". date ."
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

const DateDiv = styled.div`
    display: flex;
    font-size: 10px;
    background-color: var(--clr-primary);
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-area: date;
`;

const ContentDiv = styled.div`
    display: flex;
    text-align: start;
    background-color: var(--clr-primary);
    width: 100%;
    grid-area: content;
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function NewsPiece() {
    const [newsPieces, setNewsPieces] = useState([]);
    const { id } = useParams();
    const dateTime = moment(new Date(newsPieces.createdDate)).fromNow();
    const getNewsPieces = async () => {
        const result = await axios.get(
            `https://localhost:7199/api/news/${id}`,
        );
        setNewsPieces(result.data);
    };
    useEffect(() => {
        getNewsPieces();
    }, [newsPieces]);

    if (newsPieces.length === 0) {
        return (
            <NewsGrid>
                <Loading>Loading...</Loading>
            </NewsGrid>
        );
    }

    return (
        <div className="MainGrid">
            <Header />
            <NewsGrid>
                <HeadlineDiv>{newsPieces.headLine}</HeadlineDiv>
                <DateDiv>{dateTime}</DateDiv>
                <ContentDiv>{newsPieces.content}</ContentDiv>
            </NewsGrid>
            <Footer />
        </div>

    );
};

export default NewsPiece;