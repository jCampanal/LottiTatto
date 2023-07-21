import React, {lazy,Suspense} from 'react'
import { Routes, Route, Link } from "react-router-dom";

const Home=lazy(()=>import("../Main/Home"))
const Works=lazy(()=>import("../Main/Works"))
const AppRoutes =()=>{

    /*
                    <Route path="/Tattoos" element={<Tattoos/>} />
                    <Route path="/Design" element={<Designs/>} />
                    <Route path="/Healts" element={<Healts/>}/>

                    
                    {MenuOtipons.map(element=>{
                        return(<Route key={element.key+'Route'} path={element.href} element={<EatCategory/>} />)
                    })}
                    <Suspense fallback={<Loading/>}>
    */

    return(
        <Suspense >
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/works" element={<Works/>} />
                </Routes>
        </Suspense>
  
    )
}

export default AppRoutes