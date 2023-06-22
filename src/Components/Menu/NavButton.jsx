//#region Includes
import { useState,useEffect } from "react";
import Styled from "styled-components";
//#endregion

//#region CSS with styled
const CustomizedFont=Styled.p`
font-size:25xp;
`;

const SuperiorDiv=Styled.div`
opacity:${(props)=>(props.Show?'1':'0')};
scale:${(props)=>(props.Show?'1':'2')};
display:flex;
color:white;
transition: all 250ms;
width:100%;
height:30px;
justify-content: center;
align-items: center;
`;
//#endregion

//#region NavButton

const NavButton=(props)=>{

   const [CustomizedShow,SetCustomizedShow] = useState(false)   
   
   const [delayShowId,SetDelayShowId]=useState(0)

   const delayShowDisplay = props.Index*150;
   const delayHiddenDisplay= (props.Total-(props.Index-1))*100;

    useEffect(()=>{
        clearTimeout(delayShowId)

        if(props.Show){
            SetDelayShowId(
                setTimeout(()=>{
                    SetCustomizedShow(true)
                },delayShowDisplay)
            )
        }else{
            SetDelayShowId(
                setTimeout(()=>{
                    SetCustomizedShow(false)
                },delayHiddenDisplay) 
            )              
        }
    },[props.Show])


    return(
        <SuperiorDiv        
            Show={CustomizedShow}>
            <CustomizedFont 
                >
                {props.children}
            </CustomizedFont>
        </SuperiorDiv>
    )
}

//#endregion

export default NavButton