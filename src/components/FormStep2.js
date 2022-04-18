import React from 'react'
import PropTypes from 'prop-types'

const FormStep2 = ({covidFormChangeHendler,covidFormValues}) => {
  return (
<>
  <div className="formBox">
       <label htmlFor="topping">
    <input
         type="checkbox"
         id="topping"
         value="Europe/USA/China (Corona affected area)"
        onChange={covidFormChangeHendler}
        name="travelHIstory"
        checked={covidFormValues.travelHIstory}
       />
  <span>Europe/USA/China (Corona affected area)</span>
<span className="checkmark"></span>
  </label>
  </div>
    <div className="formBox">
       <label htmlFor="topping1">
      <input
           type="checkbox"
           id="topping1"
           name="travelHIstory1"
           value="Close contact with foreign people"
           checked={covidFormValues.travelHIstory1}
           onChange={covidFormChangeHendler}
         />
       <span> Close contact with foreign people</span>
<span className="checkmark"></span>
       </label>
    </div>
    <div className="formBox">
       <label htmlFor="travelHIstory2">
      <input
           type="checkbox"
           id="travelHIstory2"
           name="travelHIstory2"
           value="Close contact with corona symptoms man"
           checked={covidFormValues.travelHIstory2}
           onChange={covidFormChangeHendler}
         />
       <span> Close contact with corona symptoms man</span>
<span className="checkmark"></span>
   </label>
    </div>
    <div className="formBox">
       <label htmlFor="travelHIstory3">
      <input
           type="checkbox"
           id="travelHIstory3"
           name="travelHIstory3"
           value="No, I do not"
           checked={covidFormValues.travelHIstory3}
           onChange={covidFormChangeHendler}
         />
       <span> No, I do not </span>
<span className="checkmark"></span>
   </label>
    </div>

</>
  )
}

export default FormStep2
