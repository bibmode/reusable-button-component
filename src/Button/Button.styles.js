import styled from "styled-components";

export const Wrapper = styled.button`
  padding: ${(props) => `var(--${props.size}Padding)`};
  display: ${(props) => (props.startIcon || props.endIcon ? "grid" : "flex")};
  grid-template-columns: repeat(2, min-content);
  grid-template-rows: 1fr;
  grid-column-gap: ${(props) => {
    let gap;
    if (props.startIcon || props.endIcon) {
      if (props.startIcon) gap = "1rem";
      if (props.endIcon) gap = "0.5rem";
    } else gap = "0";
    return gap;
  }};

  align-items: center;

  background: ${(props) =>
    props.focus
      ? `var(--bg${props.variant}Focus)`
      : `var(--bg${props.variant})`};

  box-shadow: ${(props) =>
    props.focus && props.variant && !props.disableShadow
      ? "0px 2px 3px rgba(51, 51, 51, 0.2)"
      : "none"};

  border: ${(props) =>
    props.variant === "Outline" ? "1px solid #3D5AFE" : "none"};

  outline: none;
  width: min-content;
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: inherit;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};

  color: ${(props) =>
    props.variant || props.disabled
      ? `var(--text${props.disabled || props.variant})`
      : `var(--text)`};

  :hover,
  :focus {
    background-color: ${(props) =>
      props.disabled
        ? `var(--bg${props.variant})`
        : `var(--bg${props.variant}Focus)`};

    box-shadow: ${(props) =>
      props.variant && !props.disableShadow && !props.disabled
        ? `var(--shadow${props.variant})`
        : "none"};
  }

  span {
    font-size: inherit;
    /* margin-right: ${(props) => (props.startIcon ? "1rem" : "0")};
    margin-left: ${(props) => (props.endIcon ? "1rem" : "0")}; */
    grid-column: ${(props) => (props.startIcon ? "1" : "-1")};
  }
`;
