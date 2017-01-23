import React from 'react';

import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Main from '../Main';
import SignUpForm from '../components/children/signUpChildren/SignUpForm';


module.exports = (
	<Router history = {hashHistory}>

		<Route path = '/' component={Main}>
      <Route path='sign-up' component={SignUpForm}/>

		</Route>

	</Router>
);
