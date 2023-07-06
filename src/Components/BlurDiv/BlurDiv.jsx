import { useState,useEffect } from "react"
import Styled from "styled-components"

//#region Styled with Css
const DivS=Styled.div`
position: sticky;
top:0;
width:100vw;
height:100vh;
filter:${(props)=>(props.Blur?"blur("+props.Blur+"px)":"blur("+props.Blur+"px)")};
transition: all 300ms;
display: flex;
justify-content: center;
align-items: center;
`; 
//#endregion

//#region  BlurDiv
const BlurDiv=({MaxValue,MinValue,Value,children})=>{
    
    const [blur, setblur] =useState(0)
    const [timerid, setTimerId]=useState(0)

    useEffect(()=>{
        clearInterval(timerid)

        setTimerId(setTimeout(() => {            
        console.log(blur)
        setblur((((MaxValue-MinValue)*Value)+MinValue).toFixed(1))
        }, 1));
    }, [Value])

    return(
        <DivS 
            MaxValue={MaxValue}
            MinValue={MinValue}
            Blur={blur}>
                {children}
        </DivS>
    )
}
//#endregion

export default BlurDiv