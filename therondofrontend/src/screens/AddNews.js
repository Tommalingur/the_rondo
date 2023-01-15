import ".././App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SiteButton } from "../components/Components";
import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddNewsGrid = styled.div`
    display: grid;
    width: 100vw;
    background-color: var(--clr-secondary);
    color: var(--clr-primary);
    align-content: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 5fr 1fr;
    grid-template-areas:
    " . header header ."
    " . headline headline ."
    ". content content ."
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
    "headline"
    "content"
    "content"
    "content"
    "submit";
    }   
`;

const HeadLineDiv = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    grid-area: headline;
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

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    grid-area: content;
`;

function AddNews() {
    const handleSubmit = e => {
        e.preventDefault();

        axios.post("https://localhost:7199/api/news", { Headline, Content })
            .then(response => {
                window.location = "/"
            })
    }

    const [Headline, setHeadline] = useState()
    const [Content, setContent] = useState()

    return (
        <div className="MainGrid">
            <Header />
            <form action="" method="post" onSubmit={handleSubmit}>
                <AddNewsGrid>
                    <HeaderDiv><h1>Create a new news piece</h1></HeaderDiv>
                    <HeadLineDiv>
                        <label>Headline </label>
                        <input type="headline" name="Headline" onChange={e => setHeadline(e.target.value)} style={{ width: "500px", height: "20px" }} />
                    </HeadLineDiv>
                    <ContentDiv><label>Content </label>
                        <textarea type="content" name="Content" onChange={e => setContent(e.target.value)} style={{ width: "600px", height: "400px" }} />
                    </ContentDiv>
                    <SubmitDiv><SiteButton type="submit" value="AddNews">Submit</SiteButton></SubmitDiv>
                </AddNewsGrid>
            </form>
            <Footer />
        </div>
    );
}

export default AddNews;