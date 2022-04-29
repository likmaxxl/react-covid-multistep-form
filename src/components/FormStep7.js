import React from 'react'
import PropTypes from 'prop-types'

const FormStep7 = ({covidFormChangeHendler,covidFormValues}) => {
  return (
  <>
  <div className="formRow">
    <div className="formBox">
      <label htmlFor="step7.1">
      <input type="checkbox"
              value="Asthma"
              name="previousDisease1"
              checked={covidFormValues.previousDisease1}
              id="step7.1"
               onChange={covidFormChangeHendler}
      />
    <span>Asthma</span>
    <span className="checkmark"></span>
    </label>
    </div>
    <div className="formBox">
      <label htmlFor="step7.2">
      <input
        type="checkbox"
        name="previousDisease2"
        value="Diabetes"
        checked={covidFormValues.previousDisease2}
        id="step7.2"
         onChange={covidFormChangeHendler}
      />
    <span>Diabetes</span>
    <span className="checkmark"></span>
    </label>
    </div>
  </div>
  <div className="formRow">
    <div className="formBox">
      <label htmlFor="step7.3">
      <input type="checkbox"
              value="High Pressure"
              name="previousDisease3"
              checked={covidFormValues.previousDisease3}
              id="step7.3"
               onChange={covidFormChangeHendler}
      />
    <span>High Pressure</span>
    <span className="checkmark"></span>
    </label>
    </div>
    <div className="formBox">
      <label htmlFor="step7.4">
      <input
        type="checkbox"
        name="previousDisease4"
        value="Heart disease"
        checked={covidFormValues.previousDisease4}
        id="step7.4"
         onChange={covidFormChangeHendler}
      />
    <span>Heart disease</span>
    <span className="checkmark"></span>
    </label>
    </div>
  </div>
  <div className="formRow">
    <div className="formBox">
      <label htmlFor="step7.5">
      <input type="checkbox"
              value="Kidney disease"
              name="previousDisease5"
              checked={covidFormValues.previousDisease5}
              id="step7.5"
               onChange={covidFormChangeHendler}
      />
    <span>Kidney disease</span>
    <span className="checkmark"></span>
    </label>
    </div>
    <div className="formBox">
      <label htmlFor="step7.6">
      <input
        type="checkbox"
        name="previousDisease6"
        value="Cancer"
        checked={covidFormValues.previousDisease6}
        id="step7.6"
         onChange={covidFormChangeHendler}
      />
    <span>Cancer</span>
    <span className="checkmark"></span>
    </label>
    </div>
  </div>
  <div className="formBox" onChange={covidFormChangeHendler}>
    <label htmlFor="step7.7">
    <input
      type="checkbox"
      name="previousDisease7"
      value="No, I don’t have"
      checked={covidFormValues.previousDisease7}
      id="step7.7"
       onChange={covidFormChangeHendler}
    />
  <span>No, I don’t have</span>
  <span className="checkmark"></span>
  </label>
  </div>
  </>
  )
}

export default FormStep7
