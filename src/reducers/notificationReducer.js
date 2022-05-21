const initialState = ''
let timer

const reducer = (state = initialState, action) => {

  switch(action.type) {
  case 'SET_NOTIFICATION':
    return action.data.content
  case 'CLEAR_NOTIFICATION':
    return ''
  default:
    return state
  }
}

export const toggleNotification = (content, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        content: content
      }
    })
    let oldTimer = timer
    timer = setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, time*1000)
    if(timer > oldTimer) {
      clearTimeout(oldTimer)
    }
  }
}

export const toggleClearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

export default reducer