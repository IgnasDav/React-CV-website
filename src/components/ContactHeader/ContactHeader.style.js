import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--darkGray);
  text-align: center;
  padding: 10rem 0;
  color: var(--white);
  margin: 0 auto;
  h1 {
    margin: 2.5rem 0;
    font-size: var(--fontSizeXL);
    font-weight: var(--fontLight);
  }
  h2 {
    margin: 2.5rem 0;
    font-size: var(--fontSizeM);
  }
  a {
    font-size: var(--fontSizeM);
    margin: 2.5rem 0;
    text-decoration: none;
    color: var(--white);
    display: flex;
    flex-direction: column;
  }
`;
