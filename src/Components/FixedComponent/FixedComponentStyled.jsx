import Styled from "styled-components";

export const FixedComponent=Styled.div`
position:fixed;
height:100vh;
overflow: hidden auto;
scrollbar-width: none;
top:${(props)=>(props.top??"0px")};
z-index:${(props)=>(props.zIndex??"0")};`;