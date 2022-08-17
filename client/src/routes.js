import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {CreatePage} from './pages/CreatePage'
import {AuthPage} from './pages/AuthPage'
import { Register } from './pages/RegisterPage'
import { Doissier } from './pages/DoissierPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/doissier" >
          <Doissier />
        </Route>
        <Redirect to="/create" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/login" exact>
        <AuthPage />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Redirect to="/login" />
    </Switch>
  )
}
