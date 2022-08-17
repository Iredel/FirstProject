import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'



export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])



  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }



  return (
    <div className="container-md mt-5 bg-light w-50 h-50% rounded">
      <h1>Авторизація</h1>
      <div className="form-floating mb-3">
            <input 
            type="text" 
            className="form-control" 
            id="email" 
            placeholder="Введите email"
            name='email'
            value={form.email}
            onChange={changeHandler} 
            />
            <label htmlfor="email">Пошта</label>
        </div>

          <div className="form-floating">
            <input 
            type="password" 
            className="form-control" 
            id="password" 
            name='password'
            placeholder="Password"
            value={form.password}
            onChange={changeHandler}
            />
            <label htmlfor="password">Пароль</label>
          </div>

          <button 
              className="btn btn-primary mt-3 mb-3" 
              style={{marginRight: 10}}
              disabled={loading}
              onClick={()=>{
                loginHandler()
              }}
              >Увiйти
            </button>
            <a href='/register'>Зареєструватися</a>
    </div>
  )
}
