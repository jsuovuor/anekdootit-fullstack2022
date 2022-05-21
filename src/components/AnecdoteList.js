import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleVote } from '../reducers/anecdoteReducer'
import { toggleNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  //Helper function for state sorting
  const sortByProperty = (property) => {
    return function(a,b){
      if(a[property] < b[property])
        return 1
      else if(a[property] > b[property])
        return -1
      return 0
    }
  }

  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const anecdotesSorted = [...anecdotes]
  anecdotesSorted.sort(sortByProperty('votes'))

  const vote = (anecdote) => {
    dispatch(toggleVote(anecdote))
    dispatch(toggleNotification(`you voted '${anecdote.content}'`, 5))
  }

  //Anecdotes are filtered in the return section. If filter matches with anecdote -> show anecdote. Else show empty div
  return (
    <div>
      {anecdotesSorted.map(anecdote =>
        <div key={anecdote.id}>
          {anecdote.content.toLowerCase().includes(filter.toLowerCase()) ?
            <div>
              {anecdote.content}
              <div>
              has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>:
            <div></div>
          }



        </div>
      )}
    </div>
  )
}

export default AnecdoteList