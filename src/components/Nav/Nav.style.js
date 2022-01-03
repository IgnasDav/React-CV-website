import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--green);
  color: var(--black);
  display: grid;
  justify-items: center;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  width: var(--maxWidth);

  a {
    text-decoration: none;
  }
`;

export const Menu = styled.div`
  font-size: var(--fontSizeS);
  font-family: "Comfortaa", cursive;
  ul {
    display: flex;
    list-style: none;
    a {
      text-decoration: none;
      padding: 2rem;
      color: var(--black);
      transition: all 0.2s;
      letter-spacing: 1.3rem;
      position: relative;
      font-weight: var(--fontBold);
      -webkit-text-stroke: 1px var(--white);
      background: linear-gradient(var(--white) 0 100%) left / 0 no-repeat;
      color: transparent;
      background-clip: text;
      transition: 0.5s linear;
    }
    a:after {
      display: block;
      position: absolute;
      top: 50%;
      content: "";
      height: 1px;
      width: 0;
      left: 0;
      background-color: var(--white);
      opacity: 1;
      transition: width 0.5s linear;
    }

    a:hover {
      background-size: 100%;
    }
    a:hover:after {
      width: 90%;
    }
  }
`;

export const Logo = styled.div`
  object-fit: cover;
  font-size: var(--fontSizeM);
  font-family: "Rock 3D", cursive;
  position: relative;
  bottom: 10%;
  text-decoration: none;
  color: var(--white);

  span {
    display: block;
  }
  .big {
    font-size: 10rem;
  }
  .flex {
    display: flex;
  }
  .text {
    left: 100%;
    top: 10%;
    position: absolute;
  }
`;
