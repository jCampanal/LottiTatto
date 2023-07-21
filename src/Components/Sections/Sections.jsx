import styled from "styled-components"

//#region Sections General
export const Header= styled.p`
width:100%;
padding:20px;
text-align:${(props)=>(props.Align??"center")};
font-size:27px;
color:white;
margin:0;
`

export const BodyFullScreen=styled.div`
width:100%;
height:calc(100% - 80px);
`
//#endregion

