import React from 'react'
import PropTypes from 'prop-types'

const FormStep3 = ({bodyTemperature,covidFormChangeHendler}) => {
  return (
<>
  <div className="formBox">
      <label htmlFor="step3.1">
    <input
      id="step3.1"
      type="radio"
      value="Normal temperature ( 96°F - 98.6°F )"
      name='bodyTemperature'
      onChange={covidFormChangeHendler}
     checked={bodyTemperature==="Normal temperature ( 96°F - 98.6°F )"}
    />
  <span>Normal temperature ( 96°F - 98.6°F )</span>
<span className="checkmarkRadio"></span>
</label>
  </div>
  <div className="formBox">
      <label htmlFor="step3.2">
    <input
      type="radio"
      value="Feverish ( 98.6°F - 102°F )"
      name="bodyTemperature"
      id="step3.2"
        onChange={covidFormChangeHendler}
        checked={bodyTemperature==="Feverish ( 98.6°F - 102°F )"}
    />
  <span>Feverish ( 98.6°F - 102°F )</span>
  <span className="checkmarkRadio"></span>
</label>
  </div>
  <div className="formBox">
      <label htmlFor="step3.3">
    <input
      type="radio"
      value="High temperature ( 102°F + )"
      name="bodyTemperature"
      checked={bodyTemperature==="High temperature ( 102°F + )"}
      id="step3.3"
      onChange={covidFormChangeHendler}

        />
      <span>High temperature ( 102°F + )</span>
      <span className="checkmarkRadio"></span>
    </label>
  </div>
  <div className="formBox">
    <label htmlFor="step3.4">
    <input
      type="radio"
      value="I don’t know"
      name="bodyTemperature"
      checked={bodyTemperature==="I don’t know"}
      id="step3.4"
      onChange={covidFormChangeHendler}
      />
    <span>I don’t know</span>
    <span className="checkmarkRadio"></span>
</label>
  </div>
</>
  )
}

export default FormStep3
