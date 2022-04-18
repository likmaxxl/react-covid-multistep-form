import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Lottie from "lottie-react";
import {Link} from 'react-router-dom'

import submitLottie from "../lottie/correctSubmit.json"


const SubmitedPage = (props) => {
  const [animationData, setAnimationData] = useState();
  useEffect(() => {
    import('../lottie/correctSubmit.json').then(setAnimationData);
  }, []);
  return (
    <>
<div id="submitedPage">
  <div className="lottieCheck">
    <Lottie animationData={animationData} loop={false} autoPlay={false}/>
  </div>
<div className="submitcontent">
<h3>Thank you! Your submission was received.</h3>
<p>We will be in touch really soon!</p>
<Link to="/" className="nextSubmitBtn">Back to Home</Link>
</div>
</div>
    </>
  )
}

export default SubmitedPage
