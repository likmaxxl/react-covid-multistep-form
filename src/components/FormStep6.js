import React from 'react'
import PropTypes from 'prop-types'

const FormStep6 = ({covidFormChangeHendler,last48hSymptom}) => {
  return (
    <>
      <div className="formBox">
        <label htmlFor="step6.1">
        <input type="radio"
              name="last48hSymptom"
              value="Better from before"
              checked={last48hSymptom==="Better from before"}
              id="step6.1"
              onChange={covidFormChangeHendler}
        />
      <span>Better from before</span>
      <span className="checkmarkRadio"></span>
      </label>
      </div>
      <div className="formBox">
        <label htmlFor="step6.2">
        <input type="radio"
              name="last48hSymptom"
              value="No change"
              checked={last48hSymptom==="No change"}
              id="step6.2"
              onChange={covidFormChangeHendler}
        />
      <span>No change</span>
      <span className="checkmarkRadio"></span>
      </label>
      </div>
      <div className="formBox">
        <label htmlFor="step6.3">
        <input type="radio"
              name="last48hSymptom"
              value="Bad from before"
              checked={last48hSymptom==="Bad from before"}
              id="step6.3"
              onChange={covidFormChangeHendler}
        />
      <span>Bad from before</span>
      <span className="checkmarkRadio"></span>
      </label>
      </div>
      <div className="formBox">
        <label htmlFor="step6.4">
        <input type="radio"
              name="last48hSymptom"
              value="I can’t feel"
              checked={last48hSymptom==="I can’t feel"}
              id="step6.4"
              onChange={covidFormChangeHendler}
        />
      <span>I can’t feel</span>
      <span className="checkmarkRadio"></span>
      </label>
      </div>
    </>
  )
}

export default FormStep6
