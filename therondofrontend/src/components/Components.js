import styled from "styled-components";

export const HeaderButton = styled.button`
  height: 40px;
  width: 60px;
  border: none;
  background-color: var(--clr-primary);
  color: var(--clr-secondary);
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    color: var(--clr-hover);
  }
`;

export const FooterButton = styled.button`
  border: none;
  width: 100%;
  background-color: var(--clr-primary);
  color: var(--clr-secondary);
  cursor: pointer;
  &:hover {
    color: var(--clr-hover);
  }
`;
