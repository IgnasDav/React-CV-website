import styled from "styled-components";

export const Wrapper = styled.div`
  button,
  a {
    font-family: inherit;
    background-color: var(--green);
    color: var(--white);
    border: 1px solid var(--green);
    padding: 1.6rem 4rem;
    font-size: var(--fontSizeS);
    transition: all 0.3s;
    text-transform: uppercase;
    text-decoration: none;

    :hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;
