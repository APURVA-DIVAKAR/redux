import React from 'react'
import { Link,Switch,Route,Routes } from 'react-router-dom'
import Home from './Home'
import LoginPage from './LoginPage'

const Routess = () => {
  return (
   <div>
        <div>
        <Link to='/' >Home</Link>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <Routes>
           <Route exact path='/' element={<Home/>}></Route>
           <Route  path='/login' element={<LoginPage/>}></Route>
        </Routes>
      </div>
   </div>
  )
}

export default Routess