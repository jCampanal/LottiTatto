import { useState,useEffect } from "react"
import Styled from "styled-components"

//#region Styled with Css
const DivS=Styled.div`
position: sticky;
top:0;
width:100vw;
height:100vh;
filter:${(props)=>(props.Blur?"blur("+props.MaxValue+"px)":"blur("+props.MinValue+"px)")};
transition: all 300ms;
display: flex;
justify-content: center;
align-items: center;
`; 
//#endregion

//#region  BlurDiv
const BlurDiv=({MaxValue,MinValue,BlurSwitch,children})=>{
    
    

    return(
        <DivS 
            MaxValue={MaxValue}
            MinValue={MinValue}
            Blur={BlurSwitch}>
                {children}
        </DivS>
    )
}
//#endregion

export default BlurDiv