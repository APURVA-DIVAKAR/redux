import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import TodoItem from './TodoItem'
import {getTodoIsLoading,getTodoIsError,getTodoIsSuccess, getTodosData} from '../../redux/Todo/action'

const Todo = () => {
    // const  {todos}  =useSelector((state) => state.todo )
    const { loding,error,todos } = useSelector((state)=>state.todo)
    const dispatch=useDispatch()
      console.log(todos)
  React.useEffect(()=>{ 
      //  getTodosData(dispatch)
      dispatch(getTodosData())
      },[dispatch])
  return loding ? <h1>.........LODING</h1> : error ? <h1>errorrr</h1>: (
    <div>
        {todos.map((el)=>
        <TodoItem key={el.id} {...el}/>)}
    </div>
  )
}

export default Todo