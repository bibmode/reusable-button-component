import Button from "../Button";
import {
  ButtonContainer,
  Buttons,
  ButtonsThreeCols,
  ButtonsFourCols,
  Wrapper,
  LinkContainer,
} from "./MainFrame.styles";

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

      <ButtonsThreeCols>
        <ButtonContainer>
          <h3>{"<Button size=”sm” />"}</h3>
          <Button variant="primary" size="sm" />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button size=”md” />"}</h3>
          <Button variant="primary" size="md" />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button size=”lg” />"}</h3>
          <Button variant="primary" size="lg" />
        </ButtonContainer>
      </ButtonsThreeCols>

      <ButtonsFourCols>
        <ButtonContainer>
          <h3>{"<Button color=”default” />"}</h3>
          <Button color="default" />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button color=”primary” />"}</h3>
          <Button color="primary" />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button color=”secondary” />"}</h3>
          <Button color="secondary" />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button color=”danger” />"}</h3>
          <Button color="danger" />
        </ButtonContainer>
      </ButtonsFourCols>

      <ButtonsFourCols>
        <ButtonContainer>
          <h3>{"<Button color=”default” />"}</h3>
          <Button color="default" focus={true} />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button color=”primary” />"}</h3>
          <Button color="primary" focus={true} />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button color=”secondary” />"}</h3>
          <Button color="secondary" focus={true} />
        </ButtonContainer>
        <ButtonContainer>
          <h3>{"<Button color=”danger” />"}</h3>
          <Button color="danger" focus={true} />
        </ButtonContainer>
      </ButtonsFourCols>

      {/* LINK */}
      <LinkContainer>
        <a
          href="https://material.io/resources/icons/?style=round"
          target="_blank"
          rel="noopener noreferrer"
        >
          Icons: https://material.io/resources/icons/?style=round
        </a>
      </LinkContainer>
      <h4>
        created by{" "}
        <a
          href="https://devchallenges.io/portfolio/bibmode"
          target="_blank"
          rel="noreferrer"
        >
          Genevieve Navales
        </a>{" "}
        - devChallenges.io
      </h4>
    </Wrapper>
  );
};

export default MainFrame;
