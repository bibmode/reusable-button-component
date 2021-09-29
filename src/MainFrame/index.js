import Button from "../Button";
import { ButtonContainer, Buttons, Wrapper } from "./MainFrame.styles";

const MainFrame = () => {
  return (
    <Wrapper>
      <h1>Buttons</h1>
      <Buttons>
        <ButtonContainer>
          <h3>{"<Button />"}</h3>
          <Button />
        </ButtonContainer>
        <ButtonContainer>
          <h3 className="hoverText">&:hover, &:focus</h3>
          <Button focus={true} />
        </ButtonContainer>

        <ButtonContainer>
          <h3>{"<Button variant='outline' />"}</h3>
          <Button variant="outline" disableShadow />
        </ButtonContainer>
        <ButtonContainer>
          <h3 className="hoverText">&:hover, &:focus</h3>
          <Button variant="outline" focus={true} disableShadow />
        </ButtonContainer>

        <ButtonContainer>
          <h3>{"<Button variant='text' />"}</h3>
          <Button variant="text" disableShadow />
        </ButtonContainer>
        <ButtonContainer>
          <h3 className="hoverText">&:hover, &:focus</h3>
          <Button variant="text" focus={true} disableShadow />
        </ButtonContainer>
      </Buttons>
    </Wrapper>
  );
};

export default MainFrame;
