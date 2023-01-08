import ".././App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddArticleGrid = styled.div`
    display: grid;
    width: 100vw;
    align-content: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
    " . header header ."
    " . name name ."
    ". user user ."
    ". submit submit .";
    grid-area: body;
    @media (max-width: 1060px) {
    display: grid;
    margin-top: 20px;
    width: 100vw;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "header"
    "name"
    "name"
    "user"
    "user"
    "submit";
    }   
`;

const NameDiv = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    grid-area: name;
`;

const UserDiv = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    grid-area: user;
`;

const SubmitDiv = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    grid-area: submit;
`;

const HeaderDiv = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    grid-area: header;
`;

function AddArticle() {
    const handleSubmit = e => {
        e.preventDefault()

        axios.post("https://localhost:7199/api/articles", { Headline, Content})
            .then(response => {
                console.log(response)
            })
    }

    const [Headline, setHeadline] = useState()
    const [Content, setContent] = useState()

    return (
        <div className="MainGrid">
            <Header />
            <AddArticleGrid>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <HeaderDiv><h1>Create a new article</h1></HeaderDiv>
                    <NameDiv>
                        <label>Headline: </label>
                        <input type="headline" name="Headline" onChange={e => setHeadline(e.target.value)} />
                        <label>Content: </label>
                        <input type="content" name="Content" onChange={e => setContent(e.target.value)} />
                    </NameDiv>
                    <SubmitDiv><input type="submit" value="AddArticle" /></SubmitDiv>
                </form>
            </AddArticleGrid>
            <Footer />
        </div>
    );
}

export default AddArticle;