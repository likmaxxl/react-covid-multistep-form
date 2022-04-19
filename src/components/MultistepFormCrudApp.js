import React,{useState} from 'react'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import axios from 'axios'
import leftAnimLottie from '../lottie/47383-doctor-welcoming-pacient.json'
import Lottie from "lottie-react";
import {Link,useNavigate } from 'react-router-dom'
import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'
import FormStep3 from './FormStep3'
import FormStep4 from './FormStep4'
import FormStep5 from './FormStep5'
import FormStep6 from './FormStep6'
import FormStep7 from './FormStep7'
import FormStep8 from './FormStep8'
import SubmitedPage from './SubmitedPage'
const MultistepFormCrudApp = (props) => {


/****INPUT FIELDS VALUES IN THE FORM****/
const [covidFormValues, setCovidFormValues] = useState({
  id: "",
  steps:1,
  //Step1
  close_With_Confirmed_Case: "", //radio

  //step2
  travelHIstory: false, //checkbox
  travelHIstory1: false,
  travelHIstory2: false,
  travelHIstory3: false,

  //step3
  bodyTemperature: "", //radio

  //step4
  symptoms1: "", //checkbox
  symptoms2: "",
  symptoms3: "",
  symptoms4: "",
  symptoms5: "",
  symptoms6: "",
  symptoms7: "",

  //step5
  step5Symptoms1: "", //checkbox
  step5Symptoms2: "",
  step5Symptoms3: "",
  step5Symptoms4: "",
  step5Symptoms5: "",
  step5Symptoms6: "",

  //step6
  last48hSymptom: "", //radio

  //step7
  previousDisease1: "", //checkbox
  previousDisease2: "",
  previousDisease3: "",
  previousDisease4: "",
  previousDisease5: "",
  previousDisease6: "",
  previousDisease7: "",

  //step8
  name: "",
  phone: "",
  email: "",
  ageRange:"",
  fullAddress: "",
  gender: "",
});
const [dataForJson,setDataForJson]=useState("")
const [errorMsg,setErrorMsg]=useState("") //error message on step 8



/***********STEPS QUESTIONS***********/
const [stepsQuestions,setStepsQuestions]=useState([
  "Have you been in close contact with a confirmed case of Covid-19?",
  "Your last 14 days travel history",
  "What’s your body temperature now?",
  "Do you have this symptoms?",
  "Have additional symptoms?",
  "Symptom observation last 48 hours",
  "Have this disease from before ?",
  "Fillup the form below, Your nearest sample collector team contact immediately"
])
const [quesExplanation,setQuesExplanation]=useState([
  "You can select multiple options or no",
  "Make sure it in fahrenheit scale",
  "Mention your feeling from last 48 hours"
])

/************LINK TO SUBMIT PAGE*********/
const [linkToSubmit,setLinkToSubmit]=useState("")


/****ON CHANGE VALUES****/
const covidFormChangeHendler=(e)=>{
  const name=e.target.name
  const value=e.target.value
  var isChecked = e.target.checked;

  setCovidFormValues({...covidFormValues,[name]:value})//radio,text

  if(e.target.type==="checkbox"){//check
  setCovidFormValues({...covidFormValues,[name]:isChecked})
  if(e.target.checked===true){
      setCovidFormValues({...covidFormValues,[name]:value})
  }

  }

}

//PREVIOUS BUTTON
const backToPreviousStep=(e)=>{
  e.preventDefault()
  if(covidFormValues.steps>1){
    setCovidFormValues({...covidFormValues,steps:covidFormValues.steps-1})
  }

}

//STEP CLICK NEXT
const navigate = useNavigate();
const step1Click=(e)=>{
  e.preventDefault()

const alertBackgroundClassCheck=document.getElementsByClassName('formBox')//IF NOTHING SELECT ADD BACKGROUND ON LABEL FIELDS

for (var i = 0; i < alertBackgroundClassCheck.length; i++) {
  const all=alertBackgroundClassCheck[i].getElementsByTagName('label')[0]

all&&all.classList.add("alertBackground");
setTimeout(() => {
all&&all.classList.remove("alertBackground");

}, 200);

}

  if(covidFormValues.steps===1){
  if(covidFormValues.close_With_Confirmed_Case){//step2
setCovidFormValues({...covidFormValues,steps:2})
  }
  }
  if(covidFormValues.steps===2){
    if(covidFormValues.travelHIstory || covidFormValues.travelHIstory1 || covidFormValues.travelHIstory2 || covidFormValues.travelHIstory3){
      setCovidFormValues({...covidFormValues,steps:3})
    }
  }

  if(covidFormValues.steps===3&&covidFormValues.bodyTemperature){
      setCovidFormValues({...covidFormValues,steps:4})
  }

if(covidFormValues.steps===4){
  if(covidFormValues.symptoms1 ||
    covidFormValues.symptoms2 ||
    covidFormValues.symptoms3 ||
    covidFormValues.symptoms4 ||
    covidFormValues.symptoms5 ||
    covidFormValues.symptoms6 ||
    covidFormValues.symptoms7)
setCovidFormValues({...covidFormValues,steps:5})

}
if(covidFormValues.steps===5){
  if(covidFormValues.step5Symptoms1 ||
    covidFormValues.step5Symptoms2 ||
    covidFormValues.step5Symptoms3 ||
    covidFormValues.step5Symptoms4 ||
    covidFormValues.step5Symptoms5 ||
    covidFormValues.step5Symptoms6 ||
    covidFormValues.step5Symptoms7){
        setCovidFormValues({...covidFormValues,steps:6})
    }
}
if(covidFormValues.steps===6){
  if(covidFormValues.last48hSymptom){
      setCovidFormValues({...covidFormValues,steps:7})
  }
}
if(covidFormValues.steps===7){
  if(covidFormValues.previousDisease1 ||
    covidFormValues.previousDisease2 ||
    covidFormValues.previousDisease3 ||
    covidFormValues.previousDisease4 ||
    covidFormValues.previousDisease5 ||
    covidFormValues.previousDisease6 ||
    covidFormValues.previousDisease7){
        setCovidFormValues({...covidFormValues,steps:8})
    }
}
if(covidFormValues.steps===8){

  const  alertInputText = document.querySelectorAll('input[type="text"]');
  const  alertInputEmail = document.querySelector('input[type="email"]');
  const  alertInputNumber = document.querySelector('input[type="number"]');
  const  alertSelectOption = document.querySelector('select');
  alertInputText[0].classList.add("alertBackground")
  alertInputText[1].classList.add("alertBackground")
   alertInputEmail.classList.add("alertBackground")
   alertInputNumber.classList.add("alertBackground")
   alertSelectOption.classList.add("alertBackground")
   setTimeout(() => {

  alertInputText[0].classList.remove("alertBackground")
   alertInputText[1].classList.remove("alertBackground")
   alertInputEmail.classList.remove("alertBackground")
  alertInputNumber.classList.remove("alertBackground")
 alertSelectOption.classList.remove("alertBackground")
   }, 200);




  if(covidFormValues.name&&
    covidFormValues.phone&&
    covidFormValues.email&&
    covidFormValues.ageRange&&
    covidFormValues.fullAddress&&
    covidFormValues.gender){
        setCovidFormValues({...covidFormValues,steps:8})
      const allValuesForDb = {//setValue for Data Base All are filterd so there are no empty strings in array
      id:uuid(),
      step1CloseContactWithConfirmedCase: covidFormValues.close_With_Confirmed_Case,
      step2Last14DayTravel: [
        covidFormValues.travelHIstory && covidFormValues.travelHIstory,
        covidFormValues.travelHIstory1 && covidFormValues.travelHIstory1,
        covidFormValues.travelHIstory2 && covidFormValues.travelHIstory2,
        covidFormValues.travelHIstory3 && covidFormValues.travelHIstory3,
      ].filter(Boolean),
      step3BodyTemperature: covidFormValues.bodyTemperature,
      step4Sypmtoms: [
        covidFormValues.symptoms1 && covidFormValues.symptoms1,
        covidFormValues.symptoms2 && covidFormValues.symptoms2,
        covidFormValues.symptoms3 && covidFormValues.symptoms3,
        covidFormValues.symptoms4 && covidFormValues.symptoms4,
        covidFormValues.symptoms5 && covidFormValues.symptoms5,
        covidFormValues.symptoms4 && covidFormValues.symptoms6,
        covidFormValues.symptoms7 && covidFormValues.symptoms7,
      ].filter(Boolean),
      step5AdditionalSymptons: [
        covidFormValues.step5Symptoms1 && covidFormValues.step5Symptoms1,
        covidFormValues.step5Symptoms2 && covidFormValues.step5Symptoms2,
        covidFormValues.step5Symptoms3 && covidFormValues.step5Symptoms3,
        covidFormValues.step5Symptoms4 && covidFormValues.step5Symptoms4,
        covidFormValues.step5Symptoms5 && covidFormValues.step5Symptoms5,
        covidFormValues.step5Symptoms6 && covidFormValues.step5Symptoms6,
      ].filter(Boolean),
      step6ObservationLast48h: covidFormValues.last48hSymptom,
      step7: [
        covidFormValues.previousDisease1 && covidFormValues.previousDisease1,
        covidFormValues.previousDisease2 && covidFormValues.previousDisease2,
        covidFormValues.previousDisease3 && covidFormValues.previousDisease3,
        covidFormValues.previousDisease4 && covidFormValues.previousDisease4,
        covidFormValues.previousDisease5 && covidFormValues.previousDisease5,
        covidFormValues.previousDisease6 && covidFormValues.previousDisease6,
        covidFormValues.previousDisease7 && covidFormValues.previousDisease7,
      ].filter(Boolean),
      step8UserData: [
        covidFormValues.name && covidFormValues.name.toLowerCase(),
        covidFormValues.phone && covidFormValues.phone,
        covidFormValues.email && covidFormValues.email.toLowerCase(),
        covidFormValues.ageRange && covidFormValues.ageRange,
        covidFormValues.fullAddress && covidFormValues.fullAddress,
        covidFormValues.gender && covidFormValues.gender,
      ]
      }
      setDataForJson(allValuesForDb)

axios.post('https://react-covid-multistep-form.herokuapp.com/patients',allValuesForDb)//add users data to dataBase
.then((resp)=>{console.log(resp)})
     navigate('/submitSuccess');

    setErrorMsg("")
  }else{

  setErrorMsg("All fields must be filed")

  }

}

}
// console.log(dataForJson)
  return (
  <>




  <div className="linkToLoginPage">
    <span><i class="fa-solid fa-hand-pointer"></i></span>
    <Link className="adminPageLinkBtn" to="/logIn">
    Admin Page
  </Link>
  <p>Click the button above to see all registered patients.</p>
  </div>
<div className="homeFormAndLottie">
  <div className="lotteHomepageAnim">
    <div className="lottieHomeAn">
        <Lottie  style={{
             width: 1000,
             height: 1000,
         }}
         animationData={leftAnimLottie} loop={true} autoPlay={true}/>
    </div>

  </div>
  <h1 className="titleCovid">Covid-19 Risk Test</h1>
  <div className="multiStepCovidForm">

    <div className="prevBtnAndStatus">
      {
        covidFormValues.steps>1&&covidFormValues.steps < 9&& <button className="previousStepBtn" onClick={backToPreviousStep}><span><i className="fa-solid fa-arrow-left"></i></span>Previous</button>
      }
      <div className="currentstatus">
      {covidFormValues.steps < 9&&covidFormValues.steps+"/8"}
      </div>
    </div>


        <div className="multiStepCovidFormQuestion">
  <p className={covidFormValues.steps==8?"fontSizeStep8":""}> {stepsQuestions[covidFormValues.steps-1]} </p>
<p>
  {covidFormValues.steps==2&&quesExplanation[0]||
     covidFormValues.steps==4&&quesExplanation[0] ||
     covidFormValues.steps==5&&quesExplanation[0] ||
     covidFormValues.steps==7&&quesExplanation[0]||
 covidFormValues.steps==3&&quesExplanation[1]||
  covidFormValues.steps==6&&quesExplanation[2]||
    covidFormValues.steps==8&&quesExplanation[3]
   }</p>
 <p className={covidFormValues.steps==8&&errorMsg?"alertMessageStep8":""}>{covidFormValues.steps==8&&errorMsg&&<span><i className="fa-solid fa-triangle-exclamation"></i>{errorMsg}</span> }</p>
    </div>


    <form action="">
  {
    covidFormValues.steps===1&&<FormStep1
        covidFormChangeHendler={covidFormChangeHendler}
        covidFormValues={covidFormValues}
      />
  }

  {
    covidFormValues.steps===2&&<FormStep2
    covidFormChangeHendler={covidFormChangeHendler}
    covidFormValues={covidFormValues}
    />
  }

  {
    covidFormValues.steps===3&&<FormStep3
    covidFormChangeHendler={covidFormChangeHendler}
    bodyTemperature={covidFormValues.bodyTemperature}
    />
  }
  {
    covidFormValues.steps===4&&<FormStep4
    covidFormChangeHendler={covidFormChangeHendler}
    covidFormValues={covidFormValues}
    />
  }

  {
    covidFormValues.steps===5&&<FormStep5
    covidFormChangeHendler={covidFormChangeHendler}
    covidFormValues={covidFormValues}
    />
  }
  {
    covidFormValues.steps===6&&<FormStep6
    covidFormChangeHendler={covidFormChangeHendler}
    last48hSymptom={covidFormValues.last48hSymptom}
    />
  }
  {
    covidFormValues.steps===7&&<FormStep7
    covidFormChangeHendler={covidFormChangeHendler}
    covidFormValues={covidFormValues}
    />
  }
  {
    covidFormValues.steps===8&&<FormStep8
    covidFormChangeHendler={covidFormChangeHendler}
    covidFormValues={covidFormValues}

    />
  }
<div className="nextBtn">
  <button onClick={step1Click} className="nextSubmitBtn" style={{bottom:errorMsg&&"8px"}}>Next</button>
</div>
    </form>
    </div>
    </div>
  </>
  )
}

export default MultistepFormCrudApp
