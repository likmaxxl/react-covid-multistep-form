import React,{useState} from 'react'
import PropTypes from 'prop-types'

const  FormStep8= ({covidFormChangeHendler,covidFormValues}) => {
  const classAlertBorder={
    background: "rgba(150, 150, 150, 0.1)",
    border:"2px solid #f5c6cb"
  }

  return (
<>
<div className="formRow">
  <div className="formBox">
    <input
      type="text"
      name="name"
      value={covidFormValues.name}
      placeholder="Name"
      onChange={covidFormChangeHendler}
    autoComplete="off"
    />
  </div>
  <div className="formBox">
    <input
      autoComplete="off"
      type="number"
      name="phone"
      value={covidFormValues.phone}
      placeholder="Phone Number"
      onChange={covidFormChangeHendler}
      autoComplete="off"
    />
  </div>
</div>
<div className="formRow">
  <div className="formBox">
    <input
      type="email"
      name="email"
      value={covidFormValues.email}
      placeholder="Email"
onChange={covidFormChangeHendler}
autoComplete="off"
    />
  </div>
  <div className="formBox">
    <select
      value={covidFormValues.ageRange}
       name="ageRange"
       onChange={covidFormChangeHendler}

         >

      <option className="decorated" value="">Age Range</option>
    <option className="decorated" value="0-10">0-10</option>
  <option className="decorated" value="11-20">11-20</option>
<option className="decorated" value="21-30">21-30</option>
             <option className="decorated" value="31-40">31-40</option>
           <option className="decorated" value="41-50">41-50</option>
         <option className="decorated" value="50-Above">50-Above</option>
           </select>
  </div>
</div>
<div className="formBox">
  <input
    type="text"
    name="fullAddress"
    value={covidFormValues.fullAddress}
    placeholder="Full Address"
    onChange={covidFormChangeHendler}
    autoComplete="off"
  />
</div>
<div className="formRow">
  <div className="formBox">
    <label htmlFor="step8.1">
    <input
      type="radio"
      name="gender"
      value="Male"
      id="step8.1"
      checked={covidFormValues.gender==="Male"}
      onChange={covidFormChangeHendler}
    />
  <span>Male</span>
  <span className="checkmarkRadio"></span>
  </label>
  </div>
  <div className="formBox">
      <label htmlFor="step8.2">
    <input
      type="radio"
      name="gender"
      value="Female"
      id="step8.2"
      checked={covidFormValues.gender==="Female"}
      onChange={covidFormChangeHendler}
    />
  <span>Female</span>
  <span className="checkmarkRadio"></span>
</label>
  </div>
</div>

</>
  )
}

export default FormStep8
