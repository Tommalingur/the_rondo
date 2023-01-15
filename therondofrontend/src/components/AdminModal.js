import React from "react";
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
`;

const ModalContainer = styled.div`
    width: 600px;
    height: 300px;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    background-color: var(--clr-secondary);
    grid-template-areas:
    "top top"
    "create create"
    "create create";
    color: var(--clr-primary);
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
`;

const XBtn = styled.button`
    position: fixed;
    display: grid;
    grid-area: top;
    top: 8px;
    right: 8px;
    background-color: var(--clr-secondary);
    color: var(--clr-primary);
    border: none;
    cursor: pointer;
        &:hover {
            color: var(--clr-hover);
`;

const Header = styled.text`
    align-self: center;
    display: grid;
    grid-area: top
`;

const Create = styled.div`
    display: grid;
    grid-area: create;
`;

const LinkButton = styled.button`
    background-color: var(--clr-alert);
    color: var(--clr-primary);
    height: 50px;
    width: 200px;
    font-family: Morille;
    border: 3px solid var(--clr-secondary);
    border-radius: 20px;
    align-self: center;
    justify-self: center;
    cursor: pointer;
    &:hover {
        background-color: var(--clr-hover);
  }
  ${({ disabled }) =>
        disabled &&
        css`
      background-color: grey;
      border: 3px solid var(--clr-secondary);
      cursor: default;
      &:hover {
        background-color: grey;
      }
    `}
`;

export function AdminModal({ open, onClose }) {
    if (!open) return null;

    return (
        <Overlay>
            <ModalContainer>
                <XBtn onClick={onClose}>X</XBtn>
                <Header>Welcome Admin.</Header>
                <Create>
                    <Link to="/AddArticle"><LinkButton>Add a new article</LinkButton></Link>
                    <Link to="/AddNews"><LinkButton>Add a new newspiece</LinkButton></Link>
                </Create>
            </ModalContainer>
        </Overlay>
    )
};