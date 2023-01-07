import ".././App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const UserGrid = styled.div`
    display: grid;
    width: 100vw;    
`;

function Users() {
    const [user, setUser] = useState('')
    const getUser = () => {
        axios.get('https://localhost:7199/api/users/1').then(res => {
            setUser(res.data.firstName)
        }).catch(err => {

        })
    }
    return (
        <div className="MainGrid">
            <Header />
            <UserGrid>
                <button onClick={getUser}>Get User</button>
                {user && <h1>{user}</h1>}
            </UserGrid>

            <Footer />
        </div>
    );
}

export default Users;