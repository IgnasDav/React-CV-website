import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 5rem;
  background-color: var(--darkGray);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--fontSizeS);
  color: var(--white);
  a {
    text-decoration: none;
    color: var(--black);
    transition: all 0.5s;
    position: relative;
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

  a:hover {
    background-size: 100%;
  }
  a:hover:after {
    width: 100%;
  }
  p {
    padding: 5rem;
  }
  .square {
    border: 1px solid var(--white);
    margin-bottom: 1rem;
    p {
      padding: 2rem;
    }
  }
`;
