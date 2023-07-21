import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux'
import Store from './store/index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}> 
      <BrowserRouter basename='/'>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
