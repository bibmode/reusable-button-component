import { useEffect, useState } from "react";
import { Wrapper } from "./Button.styles";

const Button = ({ variant, focus, color: colorTheme, disableShadow }) => {
  const [type, setType] = useState("Default");
  const [themeColor, setThemeColor] = useState("Default");

  useEffect(() => {
    if (variant) {
      const str = variant.charAt(0).toUpperCase() + variant.slice(1);
      setType(str);
    }

    if (colorTheme) {
      const str2 = colorTheme.charAt(0).toUpperCase() + colorTheme.slice(1);
      setThemeColor(str2);
    }
  }, [variant, colorTheme]);

  return (
    <Wrapper
      focus={focus}
      variant={type}
      color={themeColor}
      disableShadow={disableShadow}
    >
      Default
    </Wrapper>
  );
};

export default Button;
