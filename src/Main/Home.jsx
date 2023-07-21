//#region Include
import { useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import Section from "../Components/Section/Section"
import { TattooMachineSVG} from "../assets/SVG/SVG"
import {FixedComponent} from "../Components/FixedComponent/FixedComponentStyled"
import { Logo, TattooSectionPicture, DesignSectionPicture} from '../assets/Photos/Photos'
import { LogoPicture } from '../Components/Picture/Picture'
import BlurDiv from "../Components/BlurDiv/BlurDiv"
import {useIntersection} from 'react-use'
import {getPhrases} from '../Services/Phrases'
import {scale} from '../helper/helper'
import {Header,BodyFullScreen} from '../Components/Sections/Sections'
//#endregion 

//#region Styled



const MarkInformationContent=styled.div`
padding:0.5rem 1rem;
display:flex;
flex-direction:column;
max-width:1000px;
width:100%;
align-items: center;
`

const HeadMarkInformationContent= styled.div`
display:flex;
padding: 0vh 0 10vh 0`;

const HeadMarkInformationText=styled.p`
margin: 2rem;
text-align: center;
font-size: 1.5rem;
width: 100%;
color: gray;
margin: 0px;
`

const BodyMarkInformationContent=styled.div`
display: flex;
text-align:center;`;

const TransparentDiv=styled.div`
display:flex;
width:100%;
padding:20vh 0;
justify-content: center;
`
//#endregion


//#region PHRASES

//#region Phrases Styled
const PhraseSectionContet=styled.div`
width:100%;
height:calc(100% - 50px);
background:linear-gradient(to bottom, black 10%, #ffa500);
`

const PhraseRelativeDiv=styled.div`
position:relative;
width:100%;
height:75%;
`

const PhraseAbsoluteDiv=styled.div`
position:absolute;
display:flex;
justify-content: center;
align-items: center;
width:100%;
height:100%;
top:0;
left:0;
`

const PhraseDiv=styled.div`
width:80%;
height:50%;
max-width:600px;
display:flex;
left:${(props)=>(props.Selected?"0":props.GoToLeft?"25%":"-25%")};
opacity:${(props)=>(props.Selected?"1":"0")};
flex-direction:column;
position:relative;
align-items:center;
transition:all 300ms;
`

const PhraseBody=styled.p`;
top:25%;
text-align:center;
font-size:1.5rem;
margin:10px 0;
width:100%;
transition: all 300ms;
color:red;
font-size:1.5rem;
`

const Author=styled.p`
text-align:right;
margin: 20px 0 0 0;
width:70%;
font-size:1.5rem;
opacity:${(props)=>(props.Selected?"1":"0")};
transition: all 300ms;
color:red;
`


const PhrasesButtonsContent=styled.div`
display:flex;
width:100%;
justify-content:center;
`

const PhrasesButtons=styled.div`
display:flex;
width:80%;
border-radius:20px;
background:#0005;
max-width:400px;
justify-content:space-between;
`

const PhraseButtonS=styled.div`
background:${(props)=>(props.Selected?"orange":"white")};
border: 2px solid white;
border-radius: 300px;
margin: 5px 5%;
width: 15px;
height: 15px;
transition:all 500ms;
cursor:pointer;
`
//#endregion

function Phrase (props){
    const [IsSelected,SetIsSeleted]=useState()
    const [saveIndex,SetSaveIndex]=useState()
    const [goToLeft, setGoToLeft]=useState() // right: true  left: false

    useEffect(()=>{

        if(props.Index==props.IndexSelected)
        {
            //Mangers positions
            if(saveIndex<props.Index )
            {
                setGoToLeft(false)
            }else if(saveIndex>props.Index ){
                setGoToLeft(true)
            }

            SetSaveIndex(props.IndexSelected)
            setTimeout(()=>{
                SetIsSeleted(true)
            },[400])
            
        }else{

            if(props.index<props.IndexSelected){
                setGoToLeft(true)
            }else if(props.index>props.IndexSelected){
                setGoToLeft(false)
            }

            setTimeout(()=>{

                SetSaveIndex(props.IndexSelected)
                SetIsSeleted(false)
            },[400])
            
        }   
    },[props.IndexSelected])

    return(
        <PhraseAbsoluteDiv>
            <PhraseDiv                 
                Selected={IsSelected}
                GoToLeft={goToLeft}>
                    <PhraseBody >
                        {props.Body}
                    </PhraseBody>            
                        <Author Selected={IsSelected}>
                            {props.Author}
                        </Author>                    
            </PhraseDiv>

        </PhraseAbsoluteDiv>
        

    )

}

function ButtonPhrase(props){
    const [IsSelected, SetSelected]=useState(false)


    useEffect(()=>{
        if(props.Index==props.ItemSelected)
        {
            SetSelected(true)
        }else{
            SetSelected(false)
        }   
    },[props.ItemSelected])

    const ClickHandler=()=>{
        props.UpdateIndex(props.Index)
    }

    return(
        <PhraseButtonS  
            Selected={IsSelected}
            onClick={()=>ClickHandler()}/>
    )

}

function PhraseSection ()
{
    const [currentIndex,SetCurrentIndex]=useState(0)
    const [phrases, setPhrases]=useState([])

    useEffect(()=>{
        setPhrases(getPhrases())
    },[])

    return(
        <PhraseSectionContet>
            <Header Align={"left"}>
                Comentarios
            </Header>
            <BodyFullScreen>
                <PhraseRelativeDiv>
                    {phrases.map((e,i)=>(<Phrase 
                                                Body={e.body} 
                                                Author={e.author} 
                                                Index={i} 
                                                IndexSelected={currentIndex}/>))}
                </PhraseRelativeDiv>   
                <PhrasesButtonsContent>
                    <PhrasesButtons>
                        {phrases.map((e,i)=>(<ButtonPhrase  
                                                    Index={i} 
                                                    ItemSelected={currentIndex}
                                                    UpdateIndex={SetCurrentIndex}/>))}
                    </PhrasesButtons>
                </PhrasesButtonsContent>           
            </BodyFullScreen>            
        </PhraseSectionContet>
    )

}
//#endregion


//#region SERVICE INFORMATION

//#region Service Styled


const ServicePicture=styled.img`
position: relative;
width:100%;
top:${(props)=>(props.Top??"-30px")};
left:${(props)=>(props.Left??"-30px")};
border-radius:20px;
`

const ServiceText=styled.p`
color:white;
width:100%;
margin:-20px 0 10px 0;
padding:0;
font-size:15px;
text-align:center;
`;

const ServiceInformationContent=styled.div`
display:flex;
width:100%;
background:linear-gradient(to top, black 10%,  #f18107 80%, black);
align-items: center;
flex-wrap: wrap;
justify-content: center;
position:relative;
`;


const ServiceInformation=styled.div`
display:flex;
flex-direction:column;
margin:80px 50px;
width:60%;
min-width:250px;
max-width:400px;
border-radius: 10px;
border: 3px solid white;
cursor:pointer;`
;



//#endregion

function ServiceElement (props)
{
    const [moveX, setMoveX]= useState(0)
    const [moveY, setMoveY]= useState(0)
    const elementRef=useRef(null)

    
    const intersectionForMove=useIntersection(elementRef,{
        root:null,
        rootMargin:'0px',
        threshold:[0, 0.25, 0.5, 0.75, 1]
    })

    useEffect(() => { 
        if(intersectionForMove)
        {
        setMoveX(scale(-40,0,intersectionForMove.intersectionRatio)+"px");
        setMoveY(scale(-40,0,intersectionForMove.intersectionRatio)+"px");
        }
    }, [intersectionForMove])

    return(
                        <ServiceInformation ref={elementRef}>              
                                    <ServicePicture
                                        src={ props.Src} 
                                        srcSet={props.SrcSet}
                                        Top={moveY}
                                        Left={moveX}/>
                                    <ServiceText>
                                        {props.Body}
                                    </ServiceText>                          
                        </ServiceInformation>
    )
}

function ServiceInformationSection(){
    
    return(
        <ServiceInformationContent>
            <Header Align={"right"}>
                trabajos
            </Header>
            <ServiceElement
                Src={ TattooSectionPicture.src}                 
                Title="Trabajo"
                Body="Bla bla bla"/>
            <ServiceElement
                Src={ DesignSectionPicture.src} 
                Title="Diseños"
                Body="Bla bla bla"/>  
        </ServiceInformationContent>
    )
}

//#endregion


//#region COMENT
//#region styled
    const ComentContent=styled.div`
    width:100%;
    display:flex;
    height:100%;
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:column;
    `
//#endregion

function ComentSection()
{

    return(   
            <ComentContent>
                <MarkInformationContent>
                    <HeadMarkInformationContent >
                        <HeadMarkInformationText>
                            No es un tatuaje, es arte
                        </HeadMarkInformationText>
                    </HeadMarkInformationContent>
                    <HeadMarkInformationContent >
                        <TattooMachineSVG
                            fill={"#000000"}
                            Dimention ={"5rem"}/>
                    </HeadMarkInformationContent>
                    <BodyMarkInformationContent>
                            <p>
                            bksjdsdk askdnosnd  sdo dsanond dsoasnds  oidjef sds asidn sdsaoi dsdn d0 dksd sapdm saodm 
                                sdand iodsns dod sd dods sods d jw jdd fowiq s da d qwiodas d osd fei sdi ffme 
                            </p>
                    </BodyMarkInformationContent>  
                </MarkInformationContent>
            </ComentContent>)
}


//#endregion

//#region Home
export function Home (props)
{
    const [Blur,setBlur]=useState(0)
    const [NewBackground,setNewBackground]=useState(false)
    
    const sectionRef=useRef(null)

    //#region Intersection
    const intersectionForBluLow=useIntersection(sectionRef,{
        root:null,
        rootMargin:'0px',
        threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
    })

    const intersectionForBackground = useIntersection(sectionRef,{
        root:null,
        rootMargin:"0px",
        threshold:0.01,
    })

    useEffect(() => {       
        if(intersectionForBluLow)
                setBlur(intersectionForBluLow.intersectionRatio);
        
    }, [intersectionForBluLow])

    useEffect(() => {       
        if(intersectionForBackground)
                setNewBackground(intersectionForBackground.intersectionRatio>0.05);
        
    }, [intersectionForBackground])
    //#endregion

    return(
        <FixedComponent 
            zIndex={"0"}
            top={"0px"}>
                
                    <Section  
                        Background='#000' >                         
                        <BlurDiv
                                MaxValue={7}
                                MinValue={0}
                                Value={Blur}>
                            <LogoPicture src={Logo.Src}/>
                        </BlurDiv>
                    </Section>


                    <ComentSection/>
                    
                    <ServiceInformationSection ref={sectionRef}/>
                         
                    <TransparentDiv>
                        <p> Aqui vendria el icono</p>
                    </TransparentDiv>

                    <PhraseSection/>           
                   
        </FixedComponent >
    )
}
//#endregion
export default Home


