import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  height: 100%;
  padding: 5.3rem 0 2.4rem 8.3rem;
  text-align: left;
  flex: 1;
  color: #4f4f4f;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #a9a9a9;

    a {
      font-weight: 700;
      color: inherit;
    }
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
`;

export const ButtonsThreeCols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  align-items: center;
`;

export const ButtonsFourCols = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
`;

export const ButtonContainer = styled.div`
  margin: 2.8rem 6.8rem 0 0;
  color: var(--text);

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

export const LinkContainer = styled.div`
  margin-top: 5.2rem;
  margin-bottom: 3.4rem;

  a {
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    color: var(--textLight);
  }
`;
