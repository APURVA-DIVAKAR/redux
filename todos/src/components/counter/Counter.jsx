

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement,reset} from '../../redux/Counter/action'

const Counter = () => {
    const count = useSelector((state)=>state.count.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>dispatch(increment(3))} >INC BY 3</button>
        <button onClick={()=>dispatch(decrement(3))}>DEC by 2</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter