import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  //Style for notification
  let style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: 'block'
  }

  //If notification is not empty -> show notification. If empty -> show empty div
  return (
    <div>
      {props.state.notifications !== '' ?
        <div style={style}>
          {props.state.notifications}
        </div> :
        <div></div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification