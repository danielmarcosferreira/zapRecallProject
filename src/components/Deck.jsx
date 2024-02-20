import styled from "styled-components"
import FlashCard from "./FlashCard";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react"
import colors from "../assets/styles/colors";

function Deck() {
  const [opened, setOpened] = useState(null)
  const [answered, setAnswered] = useState([])
  const [turned, setTurned] = useState(false)

  function answerQuestion(status) {
    if (opened !== null && opened === turned) {
      const newArray = [...answered, { index: opened, status: status }]
      setAnswered(newArray)
      setOpened(null)
    }
  }

  function getCardStatus(i) {
    const card = answered.find((a) => a.index === i)
    if (card !== null && card !== undefined) {
      return card.status
    } else {
      return "no status"
    }
  }

  return (
    <ScreenContainer>
      <Header />
      {cardsReact.map((item, i) => (
        <FlashCard
          key={i}
          openCard={() => setOpened(i)}
          number={i + 1}
          isOpened={i === opened}
          question={item.question}
          answer={item.answer}
          status={getCardStatus(i)}
          turnCard={() => setTurned(i)}
          turned={i === turned}
        />
      ))}

      <Footer
        cards={cardsReact}
        answerQuestion={answerQuestion}
        colors={colors}
        answered={answered} />
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

export default Deck;
