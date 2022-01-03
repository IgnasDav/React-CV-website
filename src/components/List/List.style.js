import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  text-align: center;
  padding-top: 5rem;
`;

export const Text = styled.div`
  font-size: var(--fontSizeM);
  color: var(--green);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10rem;
  justify-items: center;
  font-size: var(--fontSizeS);
  ul {
  }
  li {
    padding: 1rem;
    list-style-type: none;
  }
`;
