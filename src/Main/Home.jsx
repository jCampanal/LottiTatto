//#region Include
import { useState,useEffect,useRef } from 'react'
import Styled from 'styled-components'
import Section from "../Components/Section/Section"
import{ FirstPicture} from "../assets/Photos/Photos"
import {LottiTattoSVG} from "../assets/SVG/SVG"
import {FixedComponent} from "../Components/FixedComponent/FixedComponentStyled"
import {RelativeComponent} from "../Components/RelativeComponent/RelativeComponent"
import BlurDiv from "../Components/BlurDiv/BlurDiv"
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
                        Background='orange' >                         
                        <BlurDiv
                                MaxValue={5}
                                MinValue={0}
                                BlurSwitch={Blur}>
                            <LottiTattoSVG                    
                                fill={"#ffff"}
                                Dimention={"250"}/>
                        </BlurDiv>
                    </Section>

                    <Section
                        Background={"#fff0"}            
                        zindex={'-1'} > 
                            <BlurDiv
                            MaxValue={3}
                            MinValue={0}
                            BlurSwitch={Blur}>
                                <p>
                                bksjdsdk askdnosnd  sdo dsanond dsoasnds  oidjef sds asidn sdsaoi dsdn d0 dksd sapdm saodm 
                                    sdand iodsns dod sd dods sods d jw jdd fowiq s da d qwiodas d osd fei sdi ffme 
                                </p>
                            </BlurDiv>
                    </Section>
                    
                    
                    <Section
                    src={ FirstPicture[0].src} 
                    srcSet={`${ FirstPicture[0].src} 450w,${ FirstPicture[1].src} 800w,${ FirstPicture[2].src} 1100w, ${ FirstPicture[3].src} 1800w`}
                    zindex={'-1'} 
                    setShow={setBlur}/>
                    <Section 
                    src={ FirstPicture[0].src} 
                    srcSet={`${ FirstPicture[0].src} 450w,${ FirstPicture[1].src} 800w,${ FirstPicture[2].src} 1100w, ${ FirstPicture[3].src} 1800w`}
                    zindex={'-1'} />
        </FixedComponent >
    )
}
//#endregion



