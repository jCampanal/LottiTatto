//#region Includes
import {TattooSectionPicture} from '../assets/Photos/Photos'
import {WorksPicture} from '../assets/Photos/Photos'
//#endregion


export function getCategoryWorksNames(){
    return WorksPicture.map(e=>e.Name)
}

export function getWorksByCategories(name){    
    return WorksPicture.filter(e=>(e.Name==name))?.map(e=>e.Elements)[0];
}