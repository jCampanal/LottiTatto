//#region Includes
import {TattooSectionPicture} from '../assets/Photos/Photos'
//#endregion
const Category=[
    {
        Name:"Realismo",
        Elements:
        [
            {
                Src:TattooSectionPicture.src,
                Clasification:"Realismo",
                InitDate:"5 de julio 2023",
                FinishDate:"29 de julio 2023",
                sesiones: "3",
                colors: ["gray","yellow","red"]
            },
            {
                Src:TattooSectionPicture.src,
                Clasification:"Realismo",
                InitDate:"5 de julio 2023",
                FinishDate:"29 de julio 2023",
                sesiones: "3",
                colors: ["gray","yellow","red"]
            },
            {
                Src:TattooSectionPicture.src,
                Clasification:"Realismo",
                InitDate:"5 de julio 2023",
                FinishDate:"29 de julio 2023",
                sesiones: "3",
                colors: ["gray","yellow","red"]
            },
            {
                Src:TattooSectionPicture.src,
                Clasification:"Realismo",
                InitDate:"5 de julio 2023",
                FinishDate:"29 de julio 2023",
                sesiones: "3",
                colors: ["gray","yellow","red"]
            }
        ]        
    },
   {
        Name:"Subrealismo",
        Elements:
        [
            {
                Src:TattooSectionPicture.src,
                Clasification:"Realismo",
                InitDate:"5 de julio 2023",
                FinishDate:"29 de julio 2023",
                sesiones: "3",
                colors: ["gray","yellow","red"]
            },
            {
                Src:TattooSectionPicture.src,
                Clasification:"Realismo",
                InitDate:"5 de julio 2023",
                FinishDate:"29 de julio 2023",
                sesiones: "3",
                colors: ["gray","yellow","red"]
            },
            {
                Src:TattooSectionPicture.src,
                Clasification:"Realismo",
                InitDate:"5 de julio 2023",
                FinishDate:"29 de julio 2023",
                sesiones: "3",
                colors: ["gray","yellow","red"]
            },
            {
                Src:TattooSectionPicture.src,
                Clasification:"Realismo",
                InitDate:"5 de julio 2023",
                FinishDate:"29 de julio 2023",
                sesiones: "3",
                colors: ["gray","yellow","red"]
            }
        ]
    }
    
    
]

export function getCategoryWorksNames(){
    return Category.map(e=>e.Name)
}

export function getWorksByCategories(name){    
    return Category.filter(e=>(e.Name==name))?.map(e=>e.Elements)[0];
}