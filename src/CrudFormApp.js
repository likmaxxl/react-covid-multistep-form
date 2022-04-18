import React,{useContext,useEffect,useState} from 'react'
import MultistepFormCrudApp from './components/MultistepFormCrudApp'
import SubmitedPage from './components/SubmitedPage'
import AllPatients from './components/pages/AllPatients'
import LoginPage from './components/pages/LogInPage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {LogInContext} from './loginContext/LoginContext'
import { useLocation } from 'react-router-dom';


//https://uigaint.com/demo/html/anfra_2/version1/covid-1.html
function CrudFormApp() {
const value=useContext(LogInContext)
const [allUsersLs,setAllUsersLs]=useState(false)

const pathname = window.location.pathname
const [currentUrl,setCurrentUrl]=useState(pathname)

const location = useLocation();

useEffect(() => {
 const item = localStorage.getItem('allPatients')
 setAllUsersLs(item)
},[location])

  return (

    <div className="CrudFormApp">

        <Routes>
          <Route path="/" element={<MultistepFormCrudApp/>}/>
          <Route path="/submitSuccess" element={<SubmitedPage/>}/>
        {
          allUsersLs==="true"&&
             <Route path="/allPatients" element={<AllPatients/>}/>
        }

        <Route path="/logIn" element={<LoginPage/>}/>
       </Routes>
      </div>

  )
}


export default CrudFormApp;
