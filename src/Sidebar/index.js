import { List, Wrapper } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <Wrapper>
      <h2>
        <span>Dev</span>challenges.io
      </h2>
      <List>
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
