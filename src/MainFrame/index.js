import Button from "../Button";
import { Buttons, Wrapper } from "./MainFrame.styles";

const MainFrame = () => {
  return (
    <Wrapper>
      <h1>Buttons</h1>
      <Buttons>
        <h3>{"<Button />"}</h3>
        <Button />
      </Buttons>
    </Wrapper>
  );
};

export default MainFrame;
