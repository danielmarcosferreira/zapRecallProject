import styled from "styled-components";
import colors from "../assets/styles/colors";
import turn from "../assets/images/seta_virar.png"
import Icon from "./Icon";


function FlashCard({ number, isOpened, openCard, question, answer, status, turnCard, turned }) {
    const { red, yellow, green, gray } = colors

    function open() {
        if (status === "no status") {
            openCard()
        }
    }

    function chooseColor() {
        switch (status) {
            case "error":
                return red
            case "almost":
                return yellow
            case "right":
                return green
            default:
                return gray
        }
    }

    return (
        <>
            {isOpened ? (
                <OpenCard>
                    <p>{turned ? answer : question}</p>
                    {!turned && < img src={turn} alt="vira carta"
                        onClick={turnCard} />}
                </OpenCard>
            ) : (
                <ClosedCard onClick={open}>
                    <CardTextClosed color={chooseColor()} status={status}>Pergunta {number}</CardTextClosed>
                    <Icon status={status} />
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
    text-decoration: ${props => props.status !== "no status" ? "line-through" : ""};
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