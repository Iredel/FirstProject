import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'


import 'bootstrap/dist/css/bootstrap.min.css'


export const Register = () =>{
  const auth = useContext(AuthContext)
  const user = useContext(AuthContext)

  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  console.log("dweqdfwqefwef" , user.userId)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber:'',
    email: '', 
    password: ''
  })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
      loginHandler()
    } catch (e) {}
  }

  const createUser = async () =>{
    try {
      const data = await request('/api/create/userCreate', 'POST', {...form})
    } catch (error) { }
  }

  

    return(
    <div className="container mt-5 bg-light w-50 h-50% rounded" >
        <h1>Реєстрація</h1>
        <form className='row g-3'>

          <div className='col-md-6'>
            <label htmlFor='firstName' className='form-label'>Ім'я</label>
            <input type="text" className="form-control" name="firstName" onChange={changeHandler} required></input>
          </div>
          <div className='col-md-6'>
          <label htmlFor='lastName' className='form-label'>Прізвище</label>
            <input type="text" className="form-control" name='lastName' onChange={changeHandler} required></input> 
          </div>
          <div className='col-md-8'>
            <label htmlfor="email" className='form-label'>Електронна пошта</label>
            <input type="text" className='form-control' name='email' value={form.email} onChange={changeHandler}></input>
          </div>
          <div className='col-md-4'>
          <label htmlfor="phoneNumber" className='form-label'>Номер телефону</label>
            <input type="text" className='form-control' name='phoneNumber' placeholder='+38(066)456-756-5' onChange={changeHandler} ></input>
          </div>
          <div className='col-md-6'>
            <label htmlfor="password" className='form-label'>Пароль</label>
            <input type="password" className='form-control' name="password" value={form.password} onChange={changeHandler}></input>
          </div>
          <div className='col-md-10'>
            <button 
            type="submit" 
            className='btn 
            btn-primary'
            onClick={()=>{
              registerHandler() 
              createUser()
            }}
            disabled={loading}>
                Зареєструватися 
            </button>
            <div className='col-md-10 mt-2'>
            <a href="/login">Увійти</a>
          </div>
          </div>
        </form> 
    </div>
    )
}