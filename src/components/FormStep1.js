import React from 'react'
import PropTypes from 'prop-types'

const FormStep1 = ({covidFormChangeHendler,covidFormValues}) => {
  return (
<>

  <div className="formBox">
    <label htmlFor="small" className="check-container">
  <input
    checked={covidFormValues.close_With_Confirmed_Case==="Yes, I am"}
    type="radio"
    value="Yes, I am"
    name="close_With_Confirmed_Case"
    id="small"
    onChange={covidFormChangeHendler}/>
  <span>Yes, I am</span>

<span className="checkmarkRadio"></span>
  </label>
  </div>
    <div className="formBox">
        <label htmlFor="small1">
      <input
        checked={covidFormValues.close_With_Confirmed_Case==="No I don't"}
        type="radio"
        value="No I don't"
        name="close_With_Confirmed_Case"
        id="small1"
        onChange={covidFormChangeHendler}/>
    <span>No I don't</span>
<span className="checkmarkRadio"></span>
</label>
    </div>


</>
  )
}

export default FormStep1
