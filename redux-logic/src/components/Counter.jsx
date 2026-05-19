import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    const count = useSelector(state=>state.count)

    const dispatch = useDispatch();

  return (
    <div>
       <button onClick={() => dispatch({type:"INCREMENT"})}>+</button>
        <h3>{count}</h3>
        <button onClick={() => dispatch({type:"DECREMENT"})}>-</button>
    </div>
  )
}

export default Counter