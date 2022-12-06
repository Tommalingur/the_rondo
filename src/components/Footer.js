import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FooterButton } from "./Components";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="Social">
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
            </div>
            <div className="FooterLogo">
                <img
                    width={50}
                    height={50}
                    src={require("../assets/images/logo1.png")}
                    className="Logo"
                    alt="logo"
                />
            </div>
            <div className="Email">
                <FooterButton>
                    <FaAt size={28} />
                    <p className="EmailP">therondo@therondo.com</p>
                </FooterButton>
            </div>
        </div>
    );
}