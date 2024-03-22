import logo from "../logo.svg";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const Logo = styled.img`
  height: 40vh;
  animation: ${rotate} 9s infinite linear;
`;

const Sentence = styled.p`
  font-size: larger;
`;

const Link = styled.a`
  color: skyblue;
  font-size: x-large;
`;
function FirstPage() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <Sentence>Edit src/App.js and save to reload</Sentence>
        <Link href="https://reactjs.org">Learn React</Link>
      </Header>
    </Container>
  );
}

export default FirstPage;
