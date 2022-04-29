import React from 'react'
import PropTypes from 'prop-types'

const FormStep5 = ({covidFormChangeHendler,covidFormValues}) => {
  return (
<>
<div className="formBox">
  <label htmlFor="step5.1">
  <input
    type="checkbox"
    name="step5Symptoms1"
    value="Loss of taste or smell"
    checked={covidFormValues.step5Symptoms1}
    id="step5.1"
    onChange={covidFormChangeHendler}
  />
<span>Loss of taste or smell</span>
<span className="checkmark"></span>
</label>
</div>

<div className="formRow">
  <div className="formBox">
    <label htmlFor="step5.2">
    <input type="checkbox"
            value="Diarrhoea"
            name="step5Symptoms2"
            checked={covidFormValues.step5Symptoms2}
            id="step5.2"
             onChange={covidFormChangeHendler}
    />
  <span>Diarrhoea</span>
  <span className="checkmark"></span>
  </label>
  </div>
  <div className="formBox">
    <label htmlFor="step5.3">
    <input
      type="checkbox"
      name="step5Symptoms3"
      value="Rash on skin"
      checked={covidFormValues.step5Symptoms3}
      id="step5.3"
       onChange={covidFormChangeHendler}
    />
  <span>Rash on skin</span>
  <span className="checkmark"></span>
  </label>
  </div>
</div>
<div className="formRow">
  <div className="formBox">
    <label htmlFor="step5.4">
    <input
      type="checkbox"
      name="step5Symptoms4"
      value="Vomiting"
      checked={covidFormValues.step5Symptoms4}
      id="step5.4"
       onChange={covidFormChangeHendler}
    />
  <span>Vomiting</span>
  <span className="checkmark"></span>
  </label>
  </div>
  <div className="formBox">
    <label htmlFor="step5.5">
    <input
      type="checkbox"
      name="step5Symptoms5"
      value="Body aches"
      checked={covidFormValues.step5Symptoms5}
      id="step5.5"
       onChange={covidFormChangeHendler}
    />
  <span>Body aches</span>
  <span className="checkmark"></span>
  </label>
  </div>
</div>
<div className="formBox">
  <label htmlFor="step5.6">
  <input
    type="checkbox"
    name="step5Symptoms6"
    value="No, I don’t have"
    checked={covidFormValues.step5Symptoms6}
    id="step5.6"
     onChange={covidFormChangeHendler}
  />
<span>No, I don’t have</span>
<span className="checkmark"></span>
</label>
</div>

</>
  )
}

export default FormStep5
