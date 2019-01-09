import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button>Hello</Button>
        <Button danger>Hello</Button>
        <Anchor href="http://google.com">Go to google</Anchor>
        <GlobalStyle />
      </Container>
    );
  }
}

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none; /* 디바이스 기반 스타일 제거 */
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }

  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
