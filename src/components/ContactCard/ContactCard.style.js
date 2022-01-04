import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 12rem 10rem;
`;
export const Content = styled.div`
  max-width: var(--maxWidth);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  img {
    width: 86rem;
  }
  .info {
    align-self: center;
    text-align: center;
    justify-self: center;
  }

  .name {
    display: flex;
    h3 {
      font-size: var(--fontSizeXL);
      padding: 1rem;
    }
  }
  .social {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: var(--fontSizeL);
      padding: 2rem;
      color: var(--black);
      :hover {
        color: red;
        i {
          opacity: 0.7;
        }
      }
      i {
        transition: all 0.3s;
        padding: 1rem;
      }
    }
  }
`;
