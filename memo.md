#3 injectGlobal and Extend

@ styled components에서 body를 바꾸려면?

(inject global)
-> createGlobalStyle 로 바뀜
참고 : https://www.styled-components.com/docs/api#createglobalstyle

@ button을 anchor, link로 사용하고 싶다면?
(컴포넌트를 재활용하고 싶을때)

-> extentsions 사용해서 버튼을 연장

내가 다른 prop을 보내고 싶을 때 아무것도 안해도 됨
-> styledcomponent가 anchor에 href가 있는 것을 알기 때문

새로만든 버튼에 밑줄이 있음
(-> extend로 수정)
Button.withComponent("a").extend`-> styled(Button.withComponent('a'))` 로 바뀜

#4 Animations

[v4 대응]
import styled, { createGlobalStyle, css, keyframes } from "styled-components";
// import에 css 추가.

\${props => {
if(props.danger){
return css`animation: ${rotation} 2s linear infinite;`;
}
}}
// return 시 css 추가

props로 스타일을 변경할 수 있음
props가 클래스명 없이 스타일로 직접 가고 있음

css를 쓴다면 컴포넌트에서 애니매이션 스피드를 변경할 수 없음
