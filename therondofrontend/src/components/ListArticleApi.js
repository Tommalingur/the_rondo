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

const ListArticleApi = () => {
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
            {articles.slice(0).reverse().map((article) => (
                <Link key={article.articleId} to={`/Articles/${article.articleId}`} style={{ textDecoration: 'none' }}>
                    <Headline>
                        <h4>{article.headLine}</h4>
                        <p>{moment(article.createdDate).fromNow()}</p>
                    </Headline>
                </Link>
            ))
            }
        </Wrapper>
    );
};

export default ListArticleApi;