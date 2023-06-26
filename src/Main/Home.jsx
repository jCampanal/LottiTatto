//#region Include
import { useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import Section from "../Components/Section/Section"
import{ FirstPicture} from "../assets/Photos/Photos"
import {LottiTattoSVG, TattooMachineSVG} from "../assets/SVG/SVG"
import {FixedComponent} from "../Components/FixedComponent/FixedComponentStyled"
import { Logo, } from '../assets/Photos/Photos'
import { LogoPicture } from '../Components/Picture/Picture'
import BlurDiv from "../Components/BlurDiv/BlurDiv"
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


const ServiceInformationContent=styled.div`
display:flex;
width:100%;
background:#f18107;
align-items: center;
flex-wrap: wrap;
justify-content: center;
`;

const ServiceInformationText=styled.p`
width:90%;
text-align:center;
color:black;`;


const ElementServiceInformationContent=styled.div`
display:flex;
justifi-content:space-between;
width:95%;
flex-wrap: wrap;
max-width:750px;
margin:2.5%;
item-align:center;
text-align:center;
background:#000;`;

const SubElementServiceInformation=styled.div`
margin: 10px 2rem;
max-width:300px;
background: blue;
width:98%;
height:60px;
@media screen and (min-width:400px){
    max-width:0px; 
}
`



//#endregion

//#region Home
export function Home (props)
{
    const [Blur,setBlur]=useState(false)

    return(
        <FixedComponent 
            zIndex={"0"}
            top={"0px"}>
                    <Section             
                        zindex={'-1'}
                        Background='#000' >                         
                        <BlurDiv
                                MaxValue={5}
                                MinValue={0}
                                BlurSwitch={Blur}>
                            <LogoPicture src={Logo.Src}/>
                        </BlurDiv>
                    </Section>

                    <Section
                        Background={"#fff0"}            
                        zindex={'-1'} > 
                            <BlurDiv
                            MaxValue={3}
                            MinValue={0}
                            BlurSwitch={Blur}>
                                <MarkInformationContent>
                                    <HeadMarkInformationContent >
                                        <HeadMarkInformationText>
                                            No te hagas un tatuaje, hazte arte
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
                            </BlurDiv>
                    </Section>
                    
                    
                    <ServiceInformationContent>
                        <ElementServiceInformationContent>
                            <SubElementServiceInformation>

                            </SubElementServiceInformation>
                            <SubElementServiceInformation>

                            </SubElementServiceInformation>
                        </ElementServiceInformationContent>
                        <ElementServiceInformationContent>
                            <SubElementServiceInformation>
                                
                            </SubElementServiceInformation>
                            <SubElementServiceInformation>
                                
                            </SubElementServiceInformation>
                        </ElementServiceInformationContent>
                    </ServiceInformationContent>
                         
                    <Section 
                    src={ FirstPicture[0].src} 
                    srcSet={`${ FirstPicture[0].src} 450w,${ FirstPicture[1].src} 800w,${ FirstPicture[2].src} 1100w, ${ FirstPicture[3].src} 1800w`}
                    zindex={'-1'} />
        </FixedComponent >
    )
}
//#endregion



