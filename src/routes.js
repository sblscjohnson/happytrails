import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Components/Home/Home'
import Account from './Components/Account/Account'

const routes = (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/Account' component={Account} />
  </Switch>
)

export default routes