import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { toggleNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const NewAnecdote = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    props.createAnecdote(content)
    props.toggleNotification(`you added '${content}'`, 5)
  }

  return (
    <form onSubmit={addAnecdote}>
      <h2>create new</h2>
      <input name="newAnecdote" />
      <button type="submit">create</button>
    </form>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  toggleNotification
}

const ConnectedNewAnecdote = connect(null, mapDispatchToProps)(NewAnecdote)
export default ConnectedNewAnecdote