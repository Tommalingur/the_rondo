import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding-top: 2rem;
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ArticleCard = styled.button`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 3fr 1fr;
  grid-template-areas:
  "headline headline headline image"
  "article article article image";
  width: 50%;
  background-color: var(--clr-alert);
  border: 4px solid var(--clr-primary);
  color: var(--clr-primary);
  padding: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    border: 4px solid var(--clr-hover);
  }
`;

const ImageDiv = styled.div`
    display: flex;
    justify-self: center;
    align-items: center;
    grid-area: image;
`;

const ArticleThumb = styled.div`
    display: flex;
    grid-area: article;
`;

const Headline = styled.div`
    display: flex;
    grid-area: headline;
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
                <ArticleCard key={article.articleId}>
                    <Headline>{article.headLine}</Headline>
                    <ArticleThumb>{article.content}</ArticleThumb>
                    <ImageDiv><img width={200} height={100} src={article.articleImgUrl} /></ImageDiv>
                </ArticleCard>
            ))
            }
        </Wrapper>
    );
};

export default ArticleApi;