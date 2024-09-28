import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/CounterSlice'

const App = () => {
  
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>(dispatch(increment()))}>+</button>
      <button onClick={()=>(dispatch(decrement()))}>-</button>
      </div>
  )
}

export default App