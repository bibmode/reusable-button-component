import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafbfd;
  width: 23.7rem;
  padding: 4.7rem 5.6rem;
  text-align: left;
  flex: 0 0 200px;

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    float: left;
    margin-top: 0.5rem;
    span {
      color: #f7542e;
    }
  }

  button {
    display: none;
  }

  @media only screen and (max-width: 34em) {
    width: 100%;
    padding: 3rem 3.5rem;
    flex: 0 0 auto;

    h2 {
      font-size: 1.8rem;
    }

    button {
      float: right;
      display: inline-block;
      background-color: transparent;
      outline: none;
      border: none;
      span {
        font-size: 3.5rem;
      }
    }
  }
`;

export const List = styled.ul`
  margin-top: 7rem;
  display: ${(props) => `${props.display}`};
  height: fit-content;

  list-style: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: #9e9e9e;

  @media only screen and (min-width: 34em) {
    display: block;
  }

  li {
    :not(:last-child) {
      margin-bottom: 2.5rem;
      flex: 1 0 auto;
    }

    :nth-child(5) {
      font-weight: 700;
      color: #090f31;
    }
  }
`;
