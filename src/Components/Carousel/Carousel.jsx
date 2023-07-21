//#region Imports
import {useState,useRef,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {motion} from 'framer-motion' 
import styled from 'styled-components'
import {MinimazedSVG,MaximazedSVG} from '../../assets/SVG/SVG'
import {setOpenImagen, setContentImagen} from '../../store/Imagen/Imagen'
import {selectOpen,selectContent} from '../../store/Imagen/Imagen'
//#endregion

//#region CaruselX

//#region  styled
export const DivX = styled.div`
height:${(props)=>(props.Height?props.Height:'auto')};
width:${(props)=>(props.Width?props.Width:'auto')};
Top:${(props)=>(props.Width?props.Top:'auto')};
display:flex;
align-items:center;
overflow:hidden;`;
//#endregion


const CaruselX=(props)=>{
    const [width,setWidth]=useState(0)
    const [Recalculetwidth,setRecalculetWidth]=useState(true)
    const Row=useRef();


    useEffect(()=>{
        setWidth(Row.current.scrollWidth-Row.current.offsetWidth)
    },[Recalculetwidth,props.Recalculate])

    return(<DivX {...props} ref={Row}>
                <motion.div drag='x'
                    dragConstraints={{right:0,left:-width}}                    
                    onDragStart={()=>{setRecalculetWidth(!Recalculetwidth)}}
                    style={{display:'flex',flexDirection:'row',cursor:'grab',height:'100%', alignItems:'center'}}>
                        {props.children}
                </motion.div>
        </DivX>
    )
}
//#endregion


//#region Carusel and Cards

//#region  styled Carousel
const ContentDiv=styled.div`
display:flex;
flex-direction:column;
justify-content:left;
width:100%;
height:calc(100% - 80px);
align-items:center;
`;

const ContentHead=styled.div`
display:flex;
margin:10px;
justify-content:left;
`
;

const CarouselName=styled.div`
margin:10px;
font-size:30px;
color:white;
`
//#endregion

 //#region Styled Cards

 const CardContent=styled.div`
 width:300px;
 margin: 10px 20px;
 position:relative;
 margin:${(props)=>(props.FullDetail?"0px":"10px")};
 border:3px solid white;
 border-radius:5px;
 display:flex;
 flex-align:column;
 justify-content:center;
 align-items:center;
 z-index:${(props)=>(props.FullDetail?"10":"0")};
 transition: all 400ms;
 `
 const ImgContent=styled.img`
 width:100%;
 border-radius:5px;`

 const Capa=styled.div`
 position:absolute;
 top:0;
 width:100%;
 height:100%;
 z-index:1;
 `

 const MinimazedMaximazedButton=styled.div`
 position:absolute;
 display:${(props)=>(props.Show?"flex":"none")};
 padding: 10px;
 width:30px;
 height:30px;
 right:0;
 top:0;
 cursor:pointer;
 `


 //#endregion

const WorkCard=(props)=>{
    const Card=useRef();   
    const [IsFullDetail,SetIsFullDetail]=useState(false)
    const dispatch=useDispatch()

   const HandlerFullDetailOpen=()=>
   {    
        dispatch(setOpenImagen(true))
        setTimeout(()=>dispatch(setContentImagen(props.Src)),100)
   }

    return(
            <CardContent FullDetail={IsFullDetail}>
                <ImgContent src={props.Src}/>
                <Capa>
                    <MinimazedMaximazedButton  
                        onClick={HandlerFullDetailOpen}
                        Show={true} >
                        <MaximazedSVG/>
                    </MinimazedMaximazedButton>
                </Capa>
            </CardContent>  
       
         )

}



export const WorksCardsCarousel=(props)=>{
 const [calculate,setCalculate]=useState(true)

     return(
        <>
        <ContentDiv>
            <CaruselX Width={'100%'} Height={'100%'}>
            {props.WorksCardsData.map((element,i)=>{
                    if(i==props.WorksCardsData.lenght-1)
                         setCalculate(calculate)
                    return(                    
                        <WorkCard
                            key={element.Src + i}
                            Src={element.Src}
                            />
                        )
                })}
            </CaruselX>
        </ContentDiv>
        </>
    )

}

//#endregion



