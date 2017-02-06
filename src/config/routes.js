import React from 'react';

import { Route, Router, browserHistory } from 'react-router';

import Main from '../Main';

import SignIn from '../components/children/SignIn';
import SignUpForm from '../components/children/signUpChildren/SignUpForm';
import Search from '../components/children/Search';
import CreateService from '../components/children/CreateService';
import Profile from '../components/children/Profile';

function requireAuth(nextState, replace) {
	console.log(nextState)
  if (true) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}


const routes = (
	<Router history = {browserHistory}>
		<Route path = '/' component={Main}>
			<Route path='sign-up' component={SignUpForm}/>
			<Route path='login' component={SignIn}/>
	      	<Route path='find-service' component={Search} onEnter={requireAuth}/>
	      	<Route path='create-service' component={CreateService} onEnter={requireAuth}/>
	      	<Route path='profile' component={Profile} onEnter={requireAuth}/>
		</Route>
	</Router>
)

module.exports = routes
