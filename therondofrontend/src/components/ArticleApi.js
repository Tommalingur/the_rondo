import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom';

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
    color: var(--clr-secondary);
    padding-bottom: 2px;
    grid-area: headline;
    cursor: pointer;
  &:hover {
    color: var(--clr-hover);
  }
`;

const ArticleApi = () => {
    const [articles, setArticles] = useState([]);
    const getArticles = async () => {
        const result = await axios.get(
            "https://localhost:7199/api/articles"
        );
        setArticles(result.data);
    };

    useEffect(() => {
        getArticles();
    }, []);

    if (articles.length === 0) {
        return (
            <Wrapper>
                <Loading>Loading...</Loading>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {articles.map((article) => (
                <Link key={article.articleId} to={`/Articles/${article.articleId}`} style={{ textDecoration: 'none' }}>
                    <Headline>{article.headLine}</Headline>
                </Link>
            ))
            }
        </Wrapper>
    );
};

export default ArticleApi;