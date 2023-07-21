import {getCategoryWorksNames,getWorksByCategories} from '../Services/Works'
import {WorksCardsCarousel} from "../Components/Carousel/Carousel"
import styled from 'styled-components'
import {Header,BodyFullScreen} from '../Components/Sections/Sections'


//#region Styled
const WorksBody=styled.div`
width:100%;
height:100%;
background:linear-gradient(to bottom, black 10%, #ffa500);
height:calc (100vh - 50px);`;
//#endregion

//#region Works
const Works=()=>{
    

    return(  
        <WorksBody>
            {getCategoryWorksNames().map(n=> {
                                    return( <div key={n}>
                                                <Header
                                                    Align="left">
                                                    {n}
                                                </Header>
                                                <WorksCardsCarousel
                                                    Name={n}
                                                    WorksCardsData={getWorksByCategories(n)}/>
                                            </div>
                                            )
                                     } )
                                    }
        </WorksBody>         
        )
}

export default Works