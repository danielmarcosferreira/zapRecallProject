import styled from "styled-components"
import logo from "./assets/images/logo.png"
import { Link } from "react-router-dom";

function FirstPage() {
    return (
        <ScreenContainer>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <Link to={"/deck"}>
                <ButtonRecall>Iniciar Recall!!!</ButtonRecall>
            </Link>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin: 30px 0px;
  }
`;

const ButtonRecall = styled.button`
    width: 250px;
    height: 60px;
    border-radius: 7px;
    font-size: 22px;
    font-family: recursive;
    color: #fb6b6b;
    box-shadow: 0px 4px 4px 0px #00000026;
    border: 1px solid #D70900;
    cursor: pointer;
`

export default FirstPage;