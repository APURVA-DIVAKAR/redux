import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
import {getTodoIsLoading,getTodoIsError,getTodoIsSuccess, getTodosData} from '../../redux/Todo/action'
import { useDispatch,useSelector } from 'react-redux'
// const InputTodo = () => {
//     const[title,setTitle]=useState("");
//     const dispatch=useDispatch()
//     const handleAdd=()=>{
//         const payload={
//             title ,
//             status:false,
//             id:uuid()
//         }
//       dispatch(addTodo(payload))
//       setTitle("")
//     }
const InputTodo = () => {
  const[title,setTitle]=useState("");
  // const { loding,error,todos } = useSelector((state)=>state.todos)
  const dispatch=useDispatch()
  const handleAdd=()=>{
      const payload={
          title ,
          status:false,
          id:uuid()
      }
     fetch("http://localhost:8080/todos", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(payload)
     }).then(()=>{
      //getTodosData(dispatch)
      dispatch(getTodosData())
     })
    setTitle("")
  }
  return (
    <div>
        <input 
        placeholder='Enter A Todo'
        value={title}
        onChange={(e)=>setTitle(e.target.value)} />
        
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default InputTodo