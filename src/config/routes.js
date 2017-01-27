import React from 'react';

import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Main from '../Main';

import SignIn from '../components/children/SignIn';
import SignUpForm from '../components/children/signUpChildren/SignUpForm';
import SearchPage from '../components/children/SearchPage';
import CreateService from '../components/children/CreateService';

module.exports = (
	<Router history = {hashHistory}>

		<Route path = '/' component={Main}>
				<Route path='sign-up' component={SignUpForm} />
				<Route path='login' component={SignIn} />
      	<Route path='find-service' component={SearchPage}/>
      	<Route path='create-service' component={CreateService}/>


		</Route>

	</Router>
);
