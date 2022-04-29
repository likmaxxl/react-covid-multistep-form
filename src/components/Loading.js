import React from 'react'
import PropTypes from 'prop-types'
import allUsersStyle from '../css/allUsersPage.module.css'

const Loading = (props) => {
  return (
<>
<div className={allUsersStyle.showbox}>
  <div className={allUsersStyle.loader}>
    <svg className={allUsersStyle.circular} viewBox="25 25 50 50">
      <circle className={allUsersStyle.path} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
    </svg>

  </div>
</div>

</>
  )
}

export default Loading
