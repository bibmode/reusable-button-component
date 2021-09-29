import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;
  height: 100vh;
  padding: 5.3rem 8.3rem 0 8.3rem;
  text-align: left;
  flex: 1;
  color: #4f4f4f;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
`;

export const ButtonContainer = styled.div`
  margin: 2.8rem 6.8rem 0 0;

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1.2rem;
    color: var(--textDark);
  }

  .hoverText {
    color: var(--textLight);
  }
`;
