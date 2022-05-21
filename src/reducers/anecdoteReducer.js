import anecdoteService from '../services/anecdotes'


const reducer = (state = [], action) => {
  switch(action.type) {
  case 'NEW_ANECDOTE':
    return [...state, action.content]
  case 'VOTE':
    const anecdoteToChange = state.find(n => n.id === action.id) // eslint-disable-line no-case-declarations
    const changedAnecdote = {                                    // eslint-disable-line no-case-declarations
      ...anecdoteToChange
    }
    return state.map(anecdote =>
      anecdote.id !== action.id ? anecdote : changedAnecdote
    )
  case 'INIT':
    return action.content
  default:
    return state
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      content: newAnecdote
    })
  }
}

export const toggleVote = (anecdote) => {
  return async dispatch => {
    anecdote.votes = anecdote.votes+1
    const updatedAnecdote = await anecdoteService.update(anecdote)
    dispatch({
      type: 'VOTE',
      content: updatedAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      content: anecdotes
    })
  }
}

export default reducer