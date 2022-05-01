import React from 'react'
import { useSelector } from 'react-redux'
import InputTodo from '../../components/todo/InputTodo'
import Todo from '../../components/todo/Todo'
import { Redirect } from 'react-router-dom'

const Home = () => {
    const isAuth = useSelector(( state )=> state.auth.isAuth)
    if(!isAuth) {
        return <Redirect to='/login'/>;
    }
  return (
    <div>
        Welcome Home
        <InputTodo/>
        <Todo/>
    </div>
  )
}

export default Home