import React, { useState } from "react";
import styled from "styled-components";
import { HeaderButton } from "./Components";
import { SignUpModal } from './SignUpModal';
import { AdminModal } from "./AdminModal";
import { Link } from 'react-router-dom';

const HeaderGrid = styled.div`
    display: grid;
    border-image:   
    grid-template-columns: 0,5fr 1fr 1fr 1fr 1fr 1fr 0,5fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    ". nav nav nav logo rondo .";
    grid-area: header;
    @media (max-width: 840px) {
    grid-template-areas:
    ". drop drop . logo logo ."
    ". . rondo rondo rondo . .";
    width: 100vw;
    grid-gap: 10px;
    }
`;

const Nav = styled.div`
    display: grid, block;
    margin-top: 20px;
    justify-self: start;
    grid-area: nav;
    @media (max-width: 840px) {
    display: none;
    }
`;

const Logo = styled.div`
    justify-self: center;
    margin-top: 20px;
    grid-area: logo;
`;

const DropDiv = styled.div`
@media (max-width: 840px) {
    grid-area: drop;
    position: relative;
    }   
`;

const DropDown = styled.div`
    display: none;
    @media (max-width: 840px) {
    display: block;
    align-self: center;
    justify-self: center;
    }
`;

const DropMenu = styled.div`
    position: absolute;
`;

const Rondo = styled.div`
    display: block;
    margin-top: 20px;
    justify-self: start;
    grid-area: rondo;
    @media (max-width: 840px) {
    display: block;
    justify-self: center;
    }
`;


export default function Header() {

    const [openModal, setOpenModal] = useState(false);
    const [openAdmin, setOpenAdmin] = useState(false);

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };


    return (
        <HeaderGrid>
            <Nav>
                <Link to="/"><HeaderButton>Home</HeaderButton></Link>
                <Link to="/Articles"><HeaderButton>Articles</HeaderButton></Link>
                <Link to="/News"><HeaderButton>News</HeaderButton></Link>
                <HeaderButton onClick={() => setOpenModal(true)}>Sign In</HeaderButton>
                <HeaderButton onClick={() => setOpenAdmin(true)}>Admin</HeaderButton>

            </Nav>
            <Logo>
                <img width={50} height={50} src={require("../assets/images/logo1.png")} alt="logo" />
            </Logo>
            <Rondo>
                <img width={200} height={50} src={require("../assets/images/rondo_logo.jpg")} alt="rondo" />
            </Rondo>
            <DropDiv>
                <DropDown>
                    <HeaderButton onClick={toggleNav}>Menu</HeaderButton>
                </DropDown>
                {isNavVisible ? (
                    <DropMenu><ul>
                        <li className="DropButton">
                            <Link to="/"><HeaderButton onClick={toggleNav}>Home</HeaderButton></Link>
                        </li>
                        <li className="DropButton">
                            <Link to="/Articles"><HeaderButton onClick={toggleNav}>Articles</HeaderButton></Link>
                        </li>
                        <li className="DropButton">
                            <Link to="/News"><HeaderButton onClick={toggleNav}>News</HeaderButton></Link>
                        </li>
                        <li className="DropButton">
                            <HeaderButton onClick={toggleNav}>Sign In</HeaderButton>
                        </li>
                        <li className="DropButton">
                            <HeaderButton onClick={toggleNav}>Sign Up</HeaderButton>
                        </li>
                    </ul></DropMenu>
                ) : null}

            </DropDiv>
            <SignUpModal open={openModal} onClose={() => setOpenModal(false)} />
            <AdminModal open={openAdmin} onClose={() => setOpenAdmin(false)}/>
        </HeaderGrid>
    );
}
