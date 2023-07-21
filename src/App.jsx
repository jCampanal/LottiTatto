//#region Imports
import  Menu  from './Components/Menu/Menu'
import { Logo } from './assets/Photos/Photos'
import './App.css'
import AppRoutes from './routes/routes'
//#endregion

function App() {

  //const Root=document.getElementById('root')
  //Root.favicon.href=Logo.href


  return (
    <>
    <Menu>
    <AppRoutes />
    </Menu>
    </>

       
    
       
  )
}

export default App
