import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from './features/counter/CounterSlice'

const App = () => {
  
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div>
      <p>{count}</p>
     
      <button onClick={()=>(dispatch(increment()))}>+</button>
      <button onClick={()=>(dispatch(decrement()))}>-</button>
      <button onClick={()=>(dispatch(incrementByAmount(100)))}>by amount</button>
      <button onClick={()=>(dispatch(decrementByAmount(100)))}>dec by amount</button>
      </div>
  )
}

export default App