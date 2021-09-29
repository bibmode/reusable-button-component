import { useEffect, useState } from "react";
import { Wrapper } from "./Button.styles";

const Button = ({ variant, focus, disableShadow }) => {
  const [type, setType] = useState("Default");

  useEffect(() => {
    if (variant) {
      const str = variant.charAt(0).toUpperCase() + variant.slice(1);
      setType(str);
    }
  }, [variant]);

  return (
    <Wrapper focus={focus} variant={type} disableShadow={disableShadow}>
      Default
    </Wrapper>
  );
};

export default Button;
