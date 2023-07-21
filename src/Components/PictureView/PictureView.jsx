//#region Imports
import { useState, useEffect } from "react"
import { useDispatch,useSelector } from 'react-redux'
import styled from "styled-components"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import {getCategoryWorksNames,getWorksByCategories} from '../../Services/Works'
import {XCloseSVG} from '../../assets/SVG/SVG'

import {setOpenImagen, setContentImagen} from '../../store/Imagen/Imagen'
import {selectOpen,selectContent} from '../../store/Imagen/Imagen'
//#endregion

//#region Styled
const GlobalContent=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#000;
z-index:100;
display:${(props)=>(props.Mount?'flex':'none')};
flex-direction:column;
justify-content:center;
align-items:center;
opacity:${(props)=>(props.Show?'1':'0')};
transition:all 300ms;`

const Picture=styled.img`
width: 100%;
max-width: 400px;
height: auto;
opacity:${(props)=>(props.Show?'1':'0')};
scale:${(props)=>(props.Show?'1':'1.4')};
transition:all 300ms;`

const CloseDiv=styled.div`
position:absolute;
display:flex;
justify-content:center;
width:40px;
height:40px;
top:10px;
right:10px;
cursor:pointer;
z-index:2;
`
//#endregion

//#region PictureView
const PictureView=(props)=>{
    const dispatch=useDispatch()
    const OpenModal=useSelector(selectOpen)
    const Src=useSelector(selectContent)

    const [ShowContent, SetShowContent]=useState(false)
    const [MountContent, SetMountContent] =useState(false)
    const [ShowPicture,SetShowPicture] =useState(false)

   

    const CloseModal=()=>{
        dispatch(setOpenImagen(false))
    }

    useEffect(()=>{
        if(OpenModal){
            SetMountContent(true)
            setTimeout(()=>{SetShowContent(true)},100)
            setTimeout(()=>{SetShowPicture(true)},300)
        }else{
            SetShowPicture(false)
            setTimeout(()=>{SetShowContent(false)},100)
            setTimeout(()=>{SetMountContent(false)},300)
        }
    },[OpenModal])

    return(
        <GlobalContent
        Mount={MountContent}
        Show={ShowContent}>
            <CloseDiv onClick={CloseModal}>
                <XCloseSVG/>
            </CloseDiv>
            <TransformWrapper 
                width={"95%"}
                defaultScale={1}
                defaultPositionX={100}
                defaultPositionY={200}>
                <TransformComponent>
                    <Picture 
                        src={Src}
                        Show={ShowPicture}/>
                </TransformComponent>
            </TransformWrapper>
        </GlobalContent>
    )
}
//#endregion

export default PictureView