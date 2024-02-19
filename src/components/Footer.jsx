import styled from "styled-components";
import colors from "../assets/styles/colors";


function Footer({ cards, answerQuestion, answered }) {
  const { red, yellow, green, gray } = colors
  return (
    <FooterCompleted>
      <ContainerButtons>
        <ChoiceButton color={red} onClick={() => answerQuestion("error")}>Nao lembrei!</ChoiceButton>
        <ChoiceButton color={yellow} onClick={() => answerQuestion("almost")}>Quase nao lembrei!</ChoiceButton>
        <ChoiceButton color={green} onClick={() => answerQuestion("right")}>Zap!</ChoiceButton>
      </ContainerButtons>
      <p>{answered.length}/{cards.length} CONCLUIDOS</p>
    </FooterCompleted>
  );
}

const FooterCompleted = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const ContainerButtons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;

const ChoiceButton = styled.button`
  width: 90px;
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background-color: ${(props) => props.color};
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
`

export default Footer;
