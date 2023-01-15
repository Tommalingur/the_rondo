import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import moment from "moment";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Headline = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
    height: 60px;
    color: var(--clr-primary);
    align-items: center;
    text-align: start;
    border-bottom: 1px solid var(--clr-primary);
    grid-area: headline;
    cursor: pointer;
  &:hover {
    color: var(--clr-hover);
  }
`;

const ListNewsApi = () => {
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
            {newsPieces.slice(0).reverse().map((newsPiece) => (
                <Link key={newsPiece.newsPieceId} to={`/News/${newsPiece.newsPieceId}`} style={{ textDecoration: 'none' }}>
                    <Headline>
                        <h4>{newsPiece.headLine}</h4>
                        <p>{moment(newsPiece.createdDate).fromNow()}</p>
                    </Headline>
                </Link>
            ))
            }
        </Wrapper>
    );
};

export default ListNewsApi;