import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Container>
        <Button>Hello</Button>
        <Button danger>Hello</Button>
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

export default App;

/* 

#2

css file 대신 styled components를 import 

styled-components -> 리액트는 css가 내부에 있는 컴포넌트를 줌
-> 컴포넌트가 이미 스타일이 있다는 뜻

styled를 넣으려는 html 요소에 입력 (스타일링 하려는 html 요소)

styled가 해당 css를 갖고 있는 버튼을 생성 -> 버튼 사용

ex) 새로운 div에 스타일을 줘서 새로운 Container 생성


component는 props를 가지고 있음


*/
