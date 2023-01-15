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
    const handleSubmit = e => {
        e.preventDefault();

        axios.post("https://localhost:7199/api/users", { FirstName, LastName, UserName, Password })
            .then(response => {
                window.location = "/"
            })
    }

    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [UserName, setUserName] = useState()
    const [Password, setPassword] = useState()

    return (
        <div className="MainGrid">
            <Header />

            <form action="" method="post" onSubmit={handleSubmit}>
                <SignUpGrid>
                    <HeaderDiv><h1>Create a new account</h1></HeaderDiv>
                    <NameDiv>
                        <label>First Name: </label>
                        <input type="firstName" name="First Name" onChange={e => setFirstName(e.target.value)} />
                        <label>Last Name: </label>
                        <input type="lastName" name="Last Name" onChange={e => setLastName(e.target.value)} />
                    </NameDiv>
                    <UserDiv>
                        <label>User Name: </label>
                        <input type="userName" name="User Name" onChange={e => setUserName(e.target.value)} />
                        <label>Password: </label>
                        <input type="password" name="Password" onChange={e => setPassword(e.target.value)} />
                    </UserDiv>
                    <SubmitDiv><input type="submit" value="SignUp" /></SubmitDiv>
                </SignUpGrid>
            </form>

            <Footer />
        </div>
    );
}

export default SignUp;