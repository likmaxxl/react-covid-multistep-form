import React from 'react'
import PropTypes from 'prop-types'

const FormStep4 = ({covidFormChangeHendler,covidFormValues}) => {
  return (
    <>
  <div className="formRow">
    <div className="formBox">
      <label htmlFor="step4.1">
      <input
        type="checkbox"
        value="Dry Cough"
        name="symptoms1"
        id="step4.1"
        checked={covidFormValues.symptoms1}
         onChange={covidFormChangeHendler}
      />
    <span>Dry Cough</span>
    <span className="checkmark"></span>
  </label>
    </div>
    <div className="formBox">
        <label htmlFor="step4.2">
      <input
        type="checkbox"
        name="symptoms2"
        value="Tiredness"
        checked={covidFormValues.symptoms2}
        id="step4.2"
         onChange={covidFormChangeHendler}
      />
    <span>Tiredness</span>
    <span className="checkmark"></span>
  </label>
    </div>
  </div>
  <div className="formBox">
      <label htmlFor="step4.3">
    <input
      type="checkbox"
       value="Shortness of breath or difficulty breathing"
       name="symptoms3"
       checked={covidFormValues.symptoms3}
       id="step4.3"
        onChange={covidFormChangeHendler}
    />
  <span>Shortness of breath or difficulty breathing</span>
  <span className="checkmark"></span>
</label>
  </div>
    <div className="formRow">
<div className="formBox">
  <label htmlFor="step4.4">
  <input
    type="checkbox"
    name="symptoms4"
    value="Headache"
    checked={covidFormValues.symptoms4}
    id="step4.4"
     onChange={covidFormChangeHendler}
  />
<span>Headache</span>
<span className="checkmark"></span>
</label>
</div>
<div className="formBox">
  <label htmlFor="step4.5">
  <input
    type="checkbox"
    name="symptoms5"
    value="Sore throat"
    id="step4.5"
    checked={covidFormValues.symptoms5}
     onChange={covidFormChangeHendler}
  />
<span>Sore throat</span>
<span className="checkmark"></span>
</label>
</div>
    </div>
    <div className="formRow">
      <div className="formBox">
          <label htmlFor="step4.6">
        <input
          type="checkbox"
          name="symptoms6"
          value="Runny nose"
          checked={covidFormValues.symptoms6}
          id="step4.6"
           onChange={covidFormChangeHendler}
        />
      <span>Runny nose</span>
      <span className="checkmark"></span>
    </label>
      </div>
      <div className="formBox">
        <label htmlFor="step4.7">
        <input
          type="checkbox"
          name="symptoms7"
          value="No, I don’t"
          checked={covidFormValues.symptoms7}
          id="step4.7"
           onChange={covidFormChangeHendler}
        />
      <span>No, I don’t</span>
      <span className="checkmark"></span>
      </label>
      </div>
    </div>
</>
  )
}

export default FormStep4
