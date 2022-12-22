import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FooterButton } from "./Components";

const FooterGrid = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
    ". social logo email .";
    grid-area: footer;
    @media (max-width: 840px) {
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
    "social social social social email";
    }
`;

const Social = styled.div`
    display: flex;
    grid-area: social;
    color: var(--clr - secondary);
    align-self: center;
    justify-content: space - between;
`;

const Email = styled.div`
    display: flex;
    grid-area: email;
    color: var(--clr - secondary);
    align-self: center;
    align-items: center;
    justify-content: flex - start;
`;

const FooterLogo = styled.div`
    display: block;
    grid-area: logo;
    align-self: center;
    @media (max-width: 840px) {
    display: none;
    align-self: center;
    }
`;

const EmailP = styled.div`
    display: block;
    @media (max-width: 840px) {
    display:none
    }
`;

export default function Footer() {
    return (
        <FooterGrid>
            <Social>
                <FooterButton>
                    <FaFacebookF size={28} />
                </FooterButton>
                <FooterButton>
                    <FaTwitter size={28} />
                </FooterButton>
                <FooterButton>
                    <FaInstagram size={28} />
                </FooterButton>
                <FooterButton>
                    <FaYoutube size={28} />
                </FooterButton>
                <FooterButton>
                    <FaSnapchatGhost size={28} />
                </FooterButton>
            </Social>
            <FooterLogo>
                <img
                    width={50}
                    height={50}
                    src={require("../assets/images/logo1.png")}
                    className="Logo"
                    alt="logo"
                />
            </FooterLogo>
            <Email>
                <FooterButton>
                    <FaAt size={28} />
                    <EmailP>therondo@therondo.com</EmailP>
                </FooterButton>
            </Email>
        </FooterGrid>
    );
}