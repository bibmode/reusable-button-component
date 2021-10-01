import { useEffect, useState } from "react";
import { List, Wrapper } from "./Sidebar.styles";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const [display, setDisplay] = useState("none");

  const switchToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (!toggle) setDisplay("block");
    else setDisplay("none");
  }, [toggle]);

  return (
    <Wrapper>
      <h2>
        <span>Dev</span>challenges.io
      </h2>
      <button onClick={switchToggle}>
        <span className="material-icons">menu</span>
      </button>

      <List display={display}>
        <li>Colors</li>
        <li>Typography</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li>Inputs</li>
        <li>Grid</li>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
