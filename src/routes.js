import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Components/Home/Home'
import Explore from './Components/Explore/Explore'
import YourTrails from './Components/YourTrails/YourTrails'
import Account from './Components/Account/Account'

const routes = (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/Explore' component={Explore} />
    <Route exact path='/YourTrails' component={YourTrails} />
    <Route path='/Account' component={Account} />
  </Switch>
)

export default routes