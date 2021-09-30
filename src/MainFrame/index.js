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
          <h3>{"<Button variant=”outline” />"}</h3>
          <Button variant="outline" disableShadow />
        </ButtonContainer>
        <ButtonContainer>
          <h3 className="hoverText">&:hover, &:focus</h3>
          <Button variant="outline" focus={true} disableShadow />
        </ButtonContainer>

        <ButtonContainer>
          <h3>{"<Button variant=”text” />"}</h3>
          <Button variant="text" disableShadow />
        </ButtonContainer>
        <ButtonContainer>
          <h3 className="hoverText">&:hover, &:focus</h3>
          <Button variant="text" focus={true} disableShadow />
        </ButtonContainer>
      </Buttons>
      <ButtonContainer>
        <h3>{"<Button disableShadow />"}</h3>
        <Button color="primary" disableShadow />
      </ButtonContainer>
      <Buttons>
        <ButtonContainer>
          <h3>{"<Button disabled />"}</h3>
          <Button disabled />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button disabled />"}</h3>
          <Button variant="text" disabled />
        </ButtonContainer>
      </Buttons>
      <Buttons>
        <ButtonContainer>
          <h3>{"<Button startIcon=”local_grocery_store” />"}</h3>
          <Button color="primary" startIcon="local_grocery_store" />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button endIcon=”local_grocery_store” />"}</h3>
          <Button color="primary" endIcon="local_grocery_store" />
        </ButtonContainer>
      </Buttons>
    </Wrapper>
  );
};

export default MainFrame;
