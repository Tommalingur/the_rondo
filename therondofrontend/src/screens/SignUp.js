import ".././App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SignUpGrid = styled.div`
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

function SignUp() {
    return (
        <div className="MainGrid">
            <Header />
            <SignUpGrid>
                <HeaderDiv><h1>Create a new account</h1></HeaderDiv>                
                <NameDiv>Name info</NameDiv>
                <UserDiv>User info</UserDiv>
                <SubmitDiv>Submit button</SubmitDiv>
            </SignUpGrid>
            <Footer />
        </div>
    );
}

export default SignUp;