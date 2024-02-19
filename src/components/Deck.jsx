import styled from "styled-components";
import FlashCard from "./FlashCard";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react"
import colors from "../assets/styles/colors";

function Deck({ cards }) {
  const [ opened, setOpened ] = useState(null)
  const [ answered, setAnswered ] = useState([])

  function answerQuestion (status) {
    if (opened !== null) {
      const newArray = [...answered, {index: opened, status: status}]
      setAnswered(newArray)
      setOpened(null)
    }
  }

  function getCardStatus (i) {
    const card = answered.find((a) => a.index === i)
    if (card !== null && card !== undefined) {
      return card.status
    } else {
      return "no status"
    }
  }

  return (
    <>
      <Header />

      {cards.map((item, i) => (
        <FlashCard
          key={i}
          openCard={() => setOpened(i)}
          number={i+1}
          isOpened={i === opened}
          question={item.question}
          answer={item.answer}
          status={getCardStatus(i)}
        />
      ))}

      <Footer 
      cards={cards} 
      answerQuestion={answerQuestion}
      colors={colors}
      answered={answered}/>
    </>
  );
}


export default Deck;
