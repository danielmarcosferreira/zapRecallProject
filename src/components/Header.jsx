import styled from "styled-components"
import logo from "../assets/images/logo.png";


function Header() {
    return (
        <LogoContainer>
            <img src={logo} alt="Logo de Raio" />
            <h1>ZapRecall</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;

export default Header;