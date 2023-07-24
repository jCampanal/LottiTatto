//#region Imports
import  Menu  from './Components/Menu/Menu'
import { Logo } from './assets/Photos/Photos'
import './App.css'
import AppRoutes from './routes/Routes'
import PictureView from './Components/PictureView/PictureView'
//#endregion

function App() {

  //const Root=document.getElementById('root')
  //Root.favicon.href=Logo.href


  return (
    <>
    <PictureView/>
    <Menu>
    <AppRoutes />
    </Menu>
    </>

       
    
       
  )
}

export default App
