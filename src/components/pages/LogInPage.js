import React,{useContext,useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import logInStyle from '../../css/logInStyle.module.css'
import {Link} from 'react-router-dom'
import {LogInContext} from '../../loginContext/LoginContext'
import {useNavigate} from 'react-router-dom'
import Lottie from "lottie-react";
import animationDataLogin from '../../lottie/loginCorona.json'
import animationDataLoginLeft from '../../lottie/loginInformation.json'

const LoginPage = (props) => {
    useEffect(()=>{
      localStorage.setItem("allPatients", false);
    },[])
  const value=useContext(LogInContext)
  // console.log(value)
const [errUsername,setErrUsername]=useState()
const [errPassword,setErrPassword]=useState()

  const navigate = useNavigate();
  const logInBtn=(e)=>{
    e.preventDefault()

if(value.inputLogin.username!=value.defaultLoginData.username || value.inputLogin.username==""){
setErrUsername("* Insert valid Username")
}else{
setErrUsername("")
}

 if(value.inputLogin.password!=value.defaultLoginData.password || value.inputLogin.password==""){
setErrPassword("* Insert valid Password")

}else{
setErrPassword("")
}

if(value.inputLogin.username===value.defaultLoginData.username && value.inputLogin.password===value.defaultLoginData.password){
navigate('/allPatients');
value.inputLogin.username=""
value.inputLogin.password=""


  localStorage.setItem("allPatients", true);
}
  }

  return (
<>
<div className={logInStyle.container}>
<div id={logInStyle.formLogIn}>
  <div className={logInStyle.loginHeader}>
    <Link style={{textDecoration:"none"}} className="previousStepBtn" to="/"> <span><i className="fa-solid fa-arrow-left"></i></span> Back to Covid-19 Test</Link>
    <h1 className={logInStyle.loginHead}>See All Patients</h1>
  <div className={logInStyle.lottieLogin}>
        <Lottie animationData={animationDataLogin} loop={true} autoPlay={true}/>
  </div>
  </div>
  <form action="" className={logInStyle.loginForm}>
  <input type="text" placeholder="Username" value={value.inputLogin.name} name="username"className={logInStyle.input} onChange={value.logInChangeHendler}/>

{errUsername==undefined || errUsername==""?"":<p className={logInStyle.loginError}>*Insert valid Username</p>}



<input type="password" placeholder="Password" value={value.inputLogin.password} name="password" className={logInStyle.input} onChange={value.logInChangeHendler}/>
{errPassword==undefined || errPassword==""?"":<p className={logInStyle.loginError}>*Insert valid Password</p>}

<div className={logInStyle.btnWrap}>
<button onClick={logInBtn} className={logInStyle.logInBtn}>Log In</button>
</div>
</form>
</div>
<div className={logInStyle.loginInstruction}>
  <h1 className={logInStyle.instructionHead}>Covid-19 Log In Instructions</h1>
<p className={logInStyle.info}>This is just a test page to see how this app works.</p>
<p className={logInStyle.info}>To see all registered patients,type<br/> <b>Username:</b> user<br/>
<b>Password:</b> user123
</p>
<p className={logInStyle.info}>On the previous page, users can fill out the form and all data will be pulled into the JSON server. When you log in you can see all the patients.
</p>

<div className={logInStyle.covidLogoInfo}>
      <Lottie animationData={animationDataLoginLeft} loop={true} autoPlay={true}/>
</div>
</div>
</div>
</>
  )
}

export default LoginPage
