//#region Includes
import { useState, useEffect } from "react"
import Styled from "styled-components";
import {
    LottiTattoSVG,
    SvgS,
    MenuLogo
}from "../../assets/SVG/SVG"
import{
    logosLinks
}from "./IconLinks"

import {LocalNavItems} from "./NavItems"
import NavButton from "./NavButton"
import styled from "styled-components";
//#endregion

//#region CSS with Styled
export const DivS=Styled.div`
display:flex;
position:fixed;
background: #000;
align-content: center;
justify-content: space-between;
top:0;
left:0;
width:100vw;
height:50px;
z-index: 3;
}`;

export const ColumnDiv=Styled.div`
display:flex;
margin:10px 5px;
align-items: center;
`;

export const BackDrop=Styled.div`
width:100vw;
height:100vh;
background:#fffA;
z-index: 2;
position:fixed;
display:${(props)=>(props.Open?'flex':'none')};`;

export const NavigationMenu=Styled.div`
position:fixed;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width:55vw;
max-width:300px;
height:calc(100vh - 50px);
background: #000;
top:50px;
right:${(props)=>(props.Open?'0':'-300px')};
transition: all 500ms;
z-index:3;
`;

export const IconLink=Styled.a`
margin:0 5px;`;

const MenuIcon=Styled.div`
margin:0 5px;
cursor:pointer;`;

const Body=Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:absolute;
width:100%;
top:30px;
left:0;
min-height: calc(100% - 30px);
background: linear-gradient(black 10%, rgb(255, 165, 0));
scrollbar-width: none;
overflow: hidden;
}
`;

const InternLink=styled.a`
decoration:none;`
//#endregion

//#region IconLink
const IconLinks =(props)=>{
    return(
            <IconLink
                key={props.vector.key}
                href={props.vector.link}
                target="_blank">                
                <SvgS
                    fill="#fff"
                    Dimention="20"
                    viewBox={props.vector.viewBox}
                    d={props.vector.d}/>
            </IconLink>
        
    );
}
//#endregion

//#region Menu
const Menu=(props)=>{
   
    const [IsOpenMenu,SetOpenMenu]= useState(false);
    const [ElementAnimation,SetElementAnimation]=useState(false)


    const HandlerOpenMenu=()=>{
        if(IsOpenMenu){
            setTimeout(()=>{
                SetOpenMenu(false)
            },LocalNavItems.length*170)
            SetElementAnimation(false)
        }else{
            SetOpenMenu(true)
            SetElementAnimation(true)
        }
    }

    return(
        <>
            <DivS>
                <ColumnDiv>
                    <LottiTattoSVG
                        fill={"#fff"}
                        Dimention={"30"}/>
                </ColumnDiv>
                <ColumnDiv>
                    {logosLinks.map(v=><IconLinks key={v.key} vector={v}/>)}
                    <MenuIcon
                        onClick={() => HandlerOpenMenu()}>
                        <MenuLogo 
                            fill={"#fff"}
                            Dimention={"20"}/>
                    </MenuIcon>
                </ColumnDiv>                    
            </DivS>
            <BackDrop
                Open={IsOpenMenu}
                onClick={() => HandlerOpenMenu()}/>
            <NavigationMenu 
                onClick={() => HandlerOpenMenu()}
                Open={IsOpenMenu}>
                    {LocalNavItems.map((n,i)=>{                                            
                                            return(
                                                <NavButton 
                                                key={n.key}
                                                Show={ElementAnimation}
                                                Index={i+1}
                                                Link={n.link}
                                                Total={LocalNavItems.length}
                                                >
                                                    {n.caption}
                                                </NavButton>)
                                                }
                                        )}
            </NavigationMenu>   
            <Body>
                {props.children}
            </Body>
        </>
        );
}
//#endregion

export default Menu;