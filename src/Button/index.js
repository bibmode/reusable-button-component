import { useEffect, useState } from "react";
import { Wrapper } from "./Button.styles";

const Button = ({ variant, focus, color, disableShadow }) => {
  const [type, setType] = useState("Default");
  const [themeColor, setThemeColor] = useState("Default");

  useEffect(() => {
    if (variant) {
      const str = variant.charAt(0).toUpperCase() + variant.slice(1);
      setType(str);
    }

    if (color) {
      const str2 = color.charAt(0).toUpperCase() + color.slice(1);
      //console.log(str2);
      setType(str2);
    }
  }, [variant, color]);

  return (
    <Wrapper focus={focus} variant={type} disableShadow={disableShadow}>
      Default
    </Wrapper>
  );
};

export default Button;
