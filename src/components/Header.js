import React, { useState } from "react";
import styled from "styled-components";
import { HeaderButton } from "./Components";
import { Link } from 'react-router-dom';

const HeaderGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-template-columns: 0,5fr 1fr 1fr 1fr 1fr 1fr 0,5fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    ". nav nav nav logo rondo .";
    grid-area: header;
`;

const Nav = styled.div`
    display: grid, block;
    justify-self: start;
    grid-area: nav;
`;

const Logo = styled.div`
    justify-self: center;
    grid-area: logo;
`;

const DropDiv = `
    grid-area: drop;
    position: relative;
`;

const DropDown = styled.div`
    display: none;
`;

const Rondo = styled.div`
    display: block;
    justify-self: start;
    grid-area: rondo;
`;


export default function Header() {

    return (
        <HeaderGrid>
            <Nav>
                <Link to="/"><HeaderButton>Home</HeaderButton></Link>
                <Link to="/Articles"><HeaderButton>Articles</HeaderButton></Link>
                <Link to="/News"><HeaderButton>News</HeaderButton></Link>
                <Link to="/"><HeaderButton>Sign In</HeaderButton></Link>
            </Nav>
            <Logo>
                <img width={50} height={50} src={require("../assets/images/logo1.png")} alt="logo"/>
            </Logo>
            <Rondo>
                <img width={200} height={50} src={require("../assets/images/rondo_logo.jpg")} alt="rondo" />
            </Rondo>
        </HeaderGrid>
        );
}
