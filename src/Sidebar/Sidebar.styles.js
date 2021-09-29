import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafbfd;
  width: min(237px, 20%);
  padding: 4.7rem 5.6rem;
  text-align: left;

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    span {
      color: #f7542e;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: #9e9e9e;
  margin-top: 12.2rem;

  li {
    :not(:last-child) {
      margin-bottom: 2.5rem;
    }

    :nth-child(5) {
      font-weight: 700;
      color: #090f31;
    }
  }
`;
