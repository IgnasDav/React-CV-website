import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  padding-top: ${({ paddingTop }) => (paddingTop ? " 10rem" : "2.5rem")};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? " 10rem" : "2.5rem"}; ;
`;

export const Content = styled.div`
  display: flex;
  gap: 5rem;
`;

export const Image = styled.img`
  width: 70rem;
  grid-row: 1/2;
  object-fit: cover;
`;

export const Card = styled.div`
  background-color: var(--lightGray);
  width: 97rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;

  h2 {
    text-transform: uppercase;
    font-size: var(--fontSizeM);
    padding-bottom: 4rem;
    font-weight: var(--fontLight);
  }
  p {
    font-size: var(--fontSizeS);
    font-weight: var(--fontLight);
    line-height: 3rem;
    padding-bottom: 4rem;
  }
`;
