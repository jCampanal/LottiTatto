//#region Import
import { useState,useEffect,useRef } from 'react'
import {useIntersection} from 'react-use'
import Styled from 'styled-components'
//#endregion

//#region Styled with css
export const Picture=Styled.img`
width:100vw;
height:calc(100vh - 50px);
`;
export const FakeContained=Styled.div`
width:100vw;
height:100vh;
background:${(props)=>(props.Background??'#000')};`
;


export const Conteind=Styled.div`
width:100%;
top:50px;
position: -webkit-sticky; 
position: sticky;
justify-content: center;
align-items:center;
z-index:-2;
`;

export const AbsoluteDivConteind=Styled.div`
position:absolute;
display:flex;
top:0;
left:0;
flex-direction:column;
justify-content: center;
align-items:center;
width:100%;
height:100%;
`
export const PictureH1=Styled.h1`
color:red;
margin: 2vw 0 2vw 0;
font-size: 8vw;
width:80%;
text-align:center;
@media screen and (min-width:700px){
    font-size: 5vw;
}`;

export const PictureH3=Styled.h3`
color:#fff;
margin: 2vw 0 2vw 0;
font-size: 3.5vw;
width:80%;
text-align:center;
@media screen and (min-width:700px){
    font-size: 2vw;
}`;

export const RelativeDivFill=Styled.div`
position:relative;
width:100vw;
height:100vh;`
//#endregion


//#region PictureComponent
const Section=(props)=>{
    const sectionRef=useRef(null)

    //#region Intersection
    const intersectionLow=useIntersection(sectionRef,{
        root:null,
        rootMargin:'0px',
        threshold:0.05
    })

  
    useEffect(() => {       
        if(intersectionLow)
            if(props.setShow){
              props.setShow(intersectionLow.intersectionRatio>0.05);
        }
    }, [intersectionLow])

    return(
        <Conteind {...props} ref={sectionRef}>

            {props.src&&
            <Picture 
                src={props.src} 
                srcSet={props.srcSet}/>
            }

            {!props.src&&
            <FakeContained 
                Background={props.Background}
                fill="#5f7"
                fillOpacity="#f"/>
            }

            <AbsoluteDivConteind>
                {props.children}
            </AbsoluteDivConteind>
        </Conteind>
    )
}
//#endregion

export default Section