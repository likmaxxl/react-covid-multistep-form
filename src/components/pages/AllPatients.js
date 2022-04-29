import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Faq from "react-faq-component";
import axios from 'axios'
import allUsersStyle from '../../css/allUsersPage.module.css'
import {Link} from 'react-router-dom'
import Loading from '../Loading'


const AllPatients = (props) => {

const [loading,setLoading]=useState(true)
const [allPatients,setAllPatients]=useState("")
const [patient,setPatient]=useState()
const [filteredPatients,setFilteredPatients]=useState()

const changeHendlerAllPatients=(e)=>{
const name=e.target.name
const value=e.target.value
setPatient(value.toLowerCase())

}

useEffect(()=>{
    setLoading(true)
  axios.get('https://patients-covid19.herokuapp.com/patients')
  .then((res)=>{
    setAllPatients(res.data)
    setFilteredPatients(res.data)
    setLoading(false)
  })


},[])

useEffect(()=>{

const allPatientsFiltered=allPatients&&allPatients.map((all)=>{
  return all
})


  const filterPatientName=allPatients&&allPatients.map((all)=>{
    return all.step8UserData[0]
  })

  const filterPatientEmail=allPatients&&allPatients.map((all)=>{
    return all.step8UserData[2]
  })


const filtered=allPatientsFiltered&&allPatientsFiltered.filter(all=>all.step8UserData[0].includes(patient)||all.step8UserData[2].includes(patient))
setFilteredPatients(filtered)
},[patient])

  const data = {
      // title: <span className={allUsersStyle.titleAllusers}>ALL PATIENTS DATA</span>,
      rows:filteredPatients&&filteredPatients.map((all)=>{
        return {title:<table key={all.id} className={[allUsersStyle.table,allUsersStyle.titleTable].join(' ')}>
        <tr>
        <td>{all.step8UserData[0]}</td>
      <td>{all.step8UserData[2]}</td>
        </tr>
        </table>,
        content:<><table className={[allUsersStyle.table, allUsersStyle.tableInfoBorder].join(' ')}>
          <tr>
            <td>Phone Number</td>
          <td>{all.step8UserData[1]}</td>
          </tr>
          <tr>
            <td>Age Range</td>
          <td>{all.step8UserData[3]}</td>
          </tr>
          <tr>
            <td>Full Address</td>
          <td>{all.step8UserData[4]}</td>
          </tr>
          <tr>
            <td>Gender</td>
          <td>{all.step8UserData[5]}</td>
          </tr>
          </table>
          <table className={allUsersStyle.table}>
            <tr>
              <th>Have you been in close contact with a confirmed case of Covid-19?</th>
              </tr>
              <tr>
                <td><span className={allUsersStyle.bullet}><i className="fa-solid fa-circle-dot"></i></span>{all.step1CloseContactWithConfirmedCase}</td>
              </tr>
          </table>
          <table className={allUsersStyle.table}>
            <tr>
              <th>Your last 14 days travel history</th>
              </tr>
              {all.step2Last14DayTravel.map((all)=>{
                return<tr key={all}> <td><span className={allUsersStyle.check}><i className="fa-solid fa-check"></i></span> {all}</td> </tr>
              })}
          </table>
          <table className={allUsersStyle.table}>
            <tr>
              <th>What’s your body temperature now?</th>
              </tr>
              <tr>
                <td><span className={allUsersStyle.bullet}><i className="fa-solid fa-circle-dot"></i></span> {all.step3BodyTemperature}</td>
              </tr>
          </table>
          <table className={allUsersStyle.table}>
            <tr>
                <th>Do you have this symptoms?</th>
              </tr>
              {
                all.step4Sypmtoms.map((all)=>{
                  return<tr key={all}>
                      <td><span className={allUsersStyle.check}><i className="fa-solid fa-check"></i></span>{all}</td>
                    </tr>
                })
              }
          </table>
          <table className={allUsersStyle.table}>
            <tr>
              <th>Have additional symptoms?</th>
              </tr>
              {
                all.step5AdditionalSymptons.map((all)=>{
                  return <tr key={all}>
                      <td><span className={allUsersStyle.check}><i className="fa-solid fa-check"></i></span> {all}</td>
                    </tr>
                })
              }
            </table>
            <table className={allUsersStyle.table}>
              <tr>
                <th>Symptom observation last 48 hours</th>
                </tr>
                <tr>
                  <td><span className={allUsersStyle.bullet}><i className="fa-solid fa-circle-dot"></i></span> {all.step6ObservationLast48h}</td>
                </tr>
            </table>

            <table className={allUsersStyle.table}>
              <tr>
                <th>Have this disease from before ?</th>
                </tr>
                {
                  all.step7.map((all)=>{
                    return <tr key={all}>
                      <td><span className={allUsersStyle.check}><i className="fa-solid fa-check"></i></span> {all}</td>
                    </tr>
                  })
                }

            </table>
          </>
      }
      })

  };

  return (
<>


<div className={allUsersStyle.allPatientsTitle}>
  <div className={allUsersStyle.backBtn}>
    <Link to="/logIn" className="previousStepBtn"><span><i className="fa-solid fa-arrow-left"></i></span> Back to Login</Link>
  </div>
<h2>All Patients</h2>
</div>
<div className={allUsersStyle.formRel}>
  <form className={allUsersStyle.form}>
    <span><i className="fa-solid fa-magnifying-glass"></i></span>
  <input type="text" placeholder="Enter the patient's name or email" name="patient" value={patient} onChange={changeHendlerAllPatients}/>
  </form>
</div>

{
  loading?<Loading/>:<div className={allUsersStyle.allPatientsData}>
    <Faq data={data}/>
  </div>
}
</>
  )
}

export default AllPatients
