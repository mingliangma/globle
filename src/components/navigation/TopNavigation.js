import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopNavigation = ({ location }) => (
	<div>
		{( location.pathname === '/') ? (
			<nav className="navbar navbar-expand-lg navbar-light navbar-inverse navbar-no-bg">
				<div className="container-fluid">
					<Link className="navbar-brand wow fadeInDown" to="/">
						<img className="light" src="/assets/img/logo.png" alt="Globle logo"/>
					</Link>
					<button type="button" className="btn btn-menu wow fadeInDown" data-toggle="modal" data-target="#langModal">
						<span className="menu-globle light"/>
					</button>
				</div>
			</nav>
		) : (
			<nav className="navbar navbar-expand-lg navbar-light navbar-inverse navbar-no-bg">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img className="accent" src="/assets/img/logo-accent.png" alt="Globle logo"/>
					</Link>
					<button type="button" className="btn btn-menu" data-toggle="modal" data-target="#langModal">
						<span className="menu-globle accent"/>
					</button>
				</div>
				<Link className="back-link default" to="/">
					<span className="btn btn-chevron" data-toggle="modal" data-target="#langModal">
						<span className="chevron-globle"/>
					</span>
					<span className="inner">
						Back to Home
					</span>
				</Link>
			</nav>
		)}
	</div>
);

TopNavigation.propTypes = {
	location: PropTypes.shape({
		pathname : PropTypes.string.isRequired
	}).isRequired
};

export default TopNavigation;
