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

export const SiteButton = styled.button`
  height: 40px;
  width: 60px;
  border: none;
  border-radius: 7px;
  background-color: var(--clr-primary);
  color: var(--clr-secondary);
  box-shadow: 3px 1px 10px var(--clr-primary);
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    color: var(--clr-hover);
  }
`;

export const MoreButton = styled.button`
  display: flex;
  height: 20px;
  width: 40px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid var(--clr-primary);
  box-shadow: 3px 1px 10px var(--clr-primary);
  background-color: var(--clr-secondary);
  color: var(--clr-primary);
  cursor: pointer;
  &:hover {
    color: var(--clr-hover);
  }
`;