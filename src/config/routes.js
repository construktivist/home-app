import React from 'react'
import { Route, Router, hashHistory, browserHistory } from 'react-router'
import Main from '../Main'
import SignIn from '../components/children/SignIn'
import SignOut from '../components/children/SignOut'
import SignUpForm from '../components/children/signUpChildren/SignUpForm'
import Search from '../components/children/Search'
import CreateService from '../components/children/CreateService'
import Profile from '../components/children/Profile'
import ResultProfile from '../components/children/searchPageChildren/ResultProfile'
import authentication from '../components/utils/authentication'
import Homepage from '../components/Homepage'

// protects the route. redirects user to login page if they are not authenticated
function requireAuth(nextState, replace) {
  if (!authentication.loggedIn()) {
    replace({
		pathname: '/login',
		state: { nextPathname: nextState.location.pathname }
    })
  }
}
// protects the route. redirects user to home page upon entering '/' route
function redirect() {
         browserHistory.push('/#/home')
}
// protects the route. redirects user to home page upon entering '/' route
function loginLockout(nextState, replace) {
  if (authentication.loggedIn()) {
    replace({
		pathname: '/home',
		state: { nextPathname: nextState.location.pathname }
    })
  }}

const routes = (
	<Router history = {hashHistory}>
		<Route path = '/' component={Main} onEnter={redirect}>
			<Route path='home' component={Homepage} />
			<Route path='sign-up' component={SignUpForm}/>
			<Route path='login' component={SignIn} onEnter={loginLockout}/>
	      	<Route path='find-service' component={Search} onEnter={requireAuth}/>
	      	<Route path='create-service' component={CreateService} onEnter={requireAuth}/>
	      	<Route path='profile' component={Profile} onEnter={requireAuth}/>
			<Route path='result-profile/:id' component={ResultProfile} onEnter={requireAuth}/>
	      	<Route path='logout' component={SignOut}/>
		</Route>
	</Router>
)

export default routes
