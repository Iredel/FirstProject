import React, {Component, useContext, useEffect, useRef, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css'

export const CreatePage = () => {
  const user = useContext(AuthContext)
  const [form, setForm] = useState({
    firstName: '', 
    lastName: '', 
    age: '', 
    phoneNumber: '',
    birthDay: '',
    workPlace: '',
    owner: user.userId
  })

  const {loading, error, request} = useHttp()

  const changeHandler = event => {
    setForm({...form, [event.target.name]:event.target.value})
  }

  const createDoissierHandler = async () =>{
    try {
      const data = await request('/api/doissier/doissierCreate', 'POST', {...form})
    } catch (error) {
      
    }
  }

  return (
    <div className='container-md mt-5 bg-light w-50 h-50% rounded'>
      <h1>Створення досьє</h1>
      <form className='row g-3'>

          <div className='col-md-6'>
            <label htmlFor='firstName' className='form-label'>Ім'я</label>
            <input type="text" className="form-control" name="firstName" id="firstName" onChange={changeHandler} required></input>
          </div>
          <div className='col-md-6'>
          <label htmlFor='lastName' className='form-label'>Прізвище</label>
            <input type="text" className="form-control" name='lastName' id='lastName' onChange={changeHandler} required></input> 
          </div>
          <div className='col-md-8'>
            <label htmlfor="age" className='form-label'>Вік</label>
            <input type="text" className='form-control' name='age' id='age' onChange={changeHandler} required></input>
          </div>
          <div className='col-md-4'>
          <label htmlfor="phoneNumber" className='form-label'>Номер телефону</label>
            <input type="text" className='form-control' name='phoneNumber' id='phoneNumber' onChange={changeHandler} placeholder='+38(066)456-756-5' required ></input>
          </div>
          <div className='col-md-6'>
            <label htmlfor="birthDay" className='form-label'>День народження</label>
            <input type="text" className='form-control' name="birthDay" id="birthDay" onChange={changeHandler} required></input>
          </div>
          <div className='col-md-6'>
            <label htmlfor="workPlace" className='form-label'>Місце роботи</label>
            <input type="text" className='form-control' name="workPlace" id="workPlace" onChange={changeHandler} required></input>
          </div>

          <div className='col-md-12'>
            <button 
            type="submit" 
            className='btn btn-primary mb-3'
            onClick={()=>{
              createDoissierHandler()
              window.location.reload()
            }}
            disabled={loading}>
                Створити 
            </button>
          </div>
        </form> 
    </div>
  )
}
