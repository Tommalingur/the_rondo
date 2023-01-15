import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import moment from "moment";
import { MoreButton } from "./Components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const CardWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    grid-area: cards;
`;

const MoreWrapper = styled.div`
    grid-area: more;
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Headline = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--clr-primary);
    border: 5px solid var(--clr-primary);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 250px;
    box-shadow: 5px 3px 10px var(--clr-primary);
    cursor: pointer;
  &:hover {
    color: var(--clr-hover);
  }
`;

const NewsApi = () => {
    const [newsPieces, setNewsPieces] = useState([]);
    const getNewsPieces = async () => {
        const result = await axios.get(
            "https://localhost:7199/api/news"
        );
        setNewsPieces(result.data);
    };

    useEffect(() => {
        getNewsPieces();
    }, []);

    if (newsPieces.length === 0) {
        return (
            <Wrapper>
                <Loading>Loading...</Loading>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <CardWrapper>{newsPieces.slice(-5).reverse().map((newsPiece) => (
                <Link key={newsPiece.newsPieceId} to={`/News/${newsPiece.newsPieceId}`} style={{ textDecoration: 'none' }}>
                    <Headline>
                        <h4>{newsPiece.headLine}</h4>
                        <p>{moment(newsPiece.createdDate).fromNow()}</p>
                    </Headline>
                </Link>
            ))
            }</CardWrapper>
            <MoreWrapper>
                <Link to={"News"} style={{ textDecoration: 'none' }} ><MoreButton>More</MoreButton></Link>
            </MoreWrapper>
        </Wrapper>
    );
};

export default NewsApi;