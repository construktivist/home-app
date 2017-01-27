import React from 'react';

import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Main from '../Main';
import SignUp from '../components/children/SignUp';
import SignIn from '../components/children/SignIn';
import SearchPage from '../components/children/SearchPage';
import CreateService from '../components/children/CreateService';

module.exports = (
	<Router history = {hashHistory}>

		<Route path = '/' component={Main}>
      	<Route path='sign-up' component={SignUp}/>
      	<Route path='sign-in' component={SignIn}/>
      	<Route path='find-service' component={SearchPage}/>
      	<Route path='create-service' component={CreateService}/>

		</Route>

	</Router>
);
