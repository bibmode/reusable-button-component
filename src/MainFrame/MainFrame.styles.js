import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  width: 70rem;
  min-height: 100vh;
  padding: 5.3rem 3rem 2.4rem 8.3rem;
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

  @media only screen and (max-width: 34em) {
    padding-left: 3.5rem;
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);

  @media only screen and (max-width: 74em) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media only screen and (max-width: 34em) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  /* @media only screen and (max-width: ) */
`;

export const ButtonsThreeCols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);

  align-items: center;

  @media only screen and (max-width: 74em) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media only screen and (max-width: 34em) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const ButtonsFourCols = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);

  @media only screen and (max-width: 88em) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const ButtonContainer = styled.div`
  margin: 2.8rem 6.8rem 0 0;
  width: fit-content;
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

  @media only screen and (max-width: 34em) {
    margin: 2.8rem 3rem 0 0;
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
