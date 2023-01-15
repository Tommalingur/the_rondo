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
    height: 100%;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: Space-around;
    width: 100%;
    height: 90%;
`;

const MoreWrapper = styled.div`
    display: flex;
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Headline = styled.div`
    display: flex;
    flex-direction: row;
    color: var(--clr-primary);
    border: 3px solid var(--clr-primary);
    border-radius: 10px;
    box-shadow: 2px 1px 10px var(--clr-primary);
    align-items: center;
    justify-content: space-between;
    text-align: start;
    height: 50px;
    cursor: pointer;
  &:hover {
    color: var(--clr-hover);
  }
`;

const HomeArticleApi = () => {
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
            <CardWrapper>
                {articles.slice(-5).reverse().map((article) => (
                    <Link key={article.articleId} to={`/Articles/${article.articleId}`} style={{ textDecoration: 'none' }}>
                        <Headline>
                            <h4>{article.headLine}</h4>
                            <p>{moment(article.createdDate).fromNow()}</p>
                        </Headline>
                    </Link>
                ))
                }
            </CardWrapper>
            <MoreWrapper>
                <Link to={"Articles"} style={{ textDecoration: 'none' }} >
                    <MoreButton>More</MoreButton>
                </Link>
            </MoreWrapper>

        </Wrapper>
    );
};

export default HomeArticleApi;