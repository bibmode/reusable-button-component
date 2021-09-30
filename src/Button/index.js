import { useEffect, useState } from "react";
import { Wrapper } from "./Button.styles";

const Button = ({
  variant,
  focus,
  color,
  disableShadow,
  disabled,
  endIcon,
  startIcon,
  size,
}) => {
  const [type, setType] = useState("Default");
  const [disable, setDisable] = useState(null);
  const [sizeVariety, setSizeVariety] = useState("md");

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

    if (disabled) {
      setDisable("Disabled");
    }

    if (size) {
      setSizeVariety(size);
    }
  }, [variant, color, disabled, size]);

  return (
    <Wrapper
      focus={focus}
      variant={type}
      disableShadow={disableShadow}
      disabled={disable}
      endIcon={endIcon}
      startIcon={startIcon}
      size={sizeVariety}
    >
      <span className="material-icons">{startIcon}</span> Default{" "}
      <span className="material-icons">{endIcon}</span>
    </Wrapper>
  );
};

export default Button;
