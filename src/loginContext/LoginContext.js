import React,{createContext,useState,useEffect} from 'react'


export const LogInContext=createContext("")


export const LogInContextProvider=(props)=>{


const [defaultLoginData,setdefaultLoginData]=useState({
  username:"user",
  password:"user123"
})


const [inputLogin,setInpuLogin]=useState({
  username:"",
  password:""
})

const logInChangeHendler=(e)=>{
  const name=e.target.name
  const value=e.target.value
setInpuLogin({...inputLogin,[name]:value})


}




  return(
    <LogInContext.Provider value={{
      logInChangeHendler:logInChangeHendler,
      inputLogin:inputLogin,
      defaultLoginData:defaultLoginData
    }}>
       {props.children}
  </LogInContext.Provider>
  )
}
