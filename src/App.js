import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import TechnologyPage from './components/pages/TechnologyPage';

import TopNavigation from './components/navigation/TopNavigation';
import FooterNavigation from './components/navigation/FooterNavigation';

const App = ({ location }) => (
	<main>
		<TopNavigation location={location}/>
		<Route
			path="/"
			exact
			component={HomePage}
		/>
		<Route
			path="/technology"
			exact
			component={TechnologyPage}
		/>
		<Route
			path="/about"
			exact
			component={AboutPage}
		/>
		<FooterNavigation />
	</main>
);

App.propTypes = {
	location : PropTypes.shape({
		pathname : PropTypes.string.isRequired
	}).isRequired
};

export default App;
