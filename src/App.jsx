import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Deck from "./components/Deck";

function App() {
  return (
    <ScreenContainer>
      <Deck cards={cardsReact} />
      <GlobalStyle />
    </ScreenContainer>
  );
}

const cardsReact = [
  { question: "O que é JSX ?", answer: "Uma extensão de linguagem do JavaScript" },
  { question: "O React é __ ", answer: " uma biblioteca JavaScript para construção de interfaces" },
  { question: "Componentes devem iniciar com __ ", answer: " letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: " expressões" },
  { question: "O ReactDOM nos ajuda __ ", answer: " interagindo com a DOM para colocar componentes React na mesma" },
  { question: "Usamos o npm para __ ", answer: " gerenciar os pacotes necessários e suas dependências" },
  { question: "Usamos props para __ ", answer: " passar diferentes informações para componentes" },
  { question: "Usamos estado(state) para __ ", answer: " dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }];

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

export default App;
