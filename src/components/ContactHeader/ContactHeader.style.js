import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--darkGray);
  text-align: center;
  padding: 10rem 0;
  color: var(--white);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    color: var(--black);
    display: flex;
    flex-direction: column;
    position: relative;
    width: fit-content;
    text-align: center;
    :hover {
      color: red;
    }
  }
  a:after {
    display: block;
    position: absolute;
    top: 42%;
    content: "";
    height: 1px;
    width: 0;
    left: 0;
    background-color: red;
    opacity: 1;
    transition: width 0.5s linear;
  }
  a:hover:after {
    width: 100%;
  }
`;
