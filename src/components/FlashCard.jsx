import styled from "styled-components";
import { useState } from "react";
import turn from "../assets/images/seta_virar.png"
import seta from "../assets/images/seta_play.png"
import colors from "../assets/styles/colors";

function FlashCard({ number, isOpened, openCard, question, answer, status }) {
    const { red, yellow, green, gray } = colors
    const [turned, setTurned] = useState(false)

    function open() {
        if (status === "no status") {
            openCard()
        }
    }

    function chooseColor () {
        switch(status) {
            case "error" :
                return red
            case "almost" :
                return "yellow"
            case "right" :
                return "green"
        }
    }

    return (
        <>
            {/* <OpenCard onClick={() => turnCard(turned)}>
                Pergunta {number}
                <img src={seta} />
            </OpenCard> */}

            {isOpened ? (
                <OpenCard>

                    <p>{turned ? answer : question}</p>
                    {!turned && < img src={turn} alt="vira carta"
                        onClick={() => setTurned(!turned)} />}

                </OpenCard>
            ) : (
                <ClosedCard onClick={open}>
                        <CardTextClosed color={chooseColor()}>Pergunta {number}</CardTextClosed>
                    <img src={seta} />
                </ClosedCard>
            )}

        </>
    )
}

const ClosedCard = styled.div`
  width: 300px;
  height: 65px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const CardTextClosed = styled.p`
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color};
`

const OpenCard = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

export default FlashCard;