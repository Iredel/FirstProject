import React, {useContext, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {UserContext} from '../context/userContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import ArrayList from './DropDownMuneLIstItem'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const registeredUser = useContext(UserContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }
  
  const firstName = registeredUser.firstName
  const lastName = registeredUser.lastName
  const phoneNumbe = registeredUser.phoneNumber

  return (
    <nav className="navbar navbar-light bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand"><h1>File Quest</h1></a>
        <form className="d-flex">
          <div>{firstName} {lastName} </div>
          <ArrayList>
            
          </ArrayList>


          <button className="btn btn-primary ml-5" type="submit" formAction='/create'>Створення досьє</button>
          <p className='text-light'>...</p>
          <button className="btn btn-primary ml-5" type="submit" formAction='/doissier'>Досьє</button>
          <p className='text-light'>...</p>
          <button className="btn btn-primary" type="submit" onClick={logoutHandler}>Вийти</button>
        </form>
      </div>
    </nav>
  )
}
