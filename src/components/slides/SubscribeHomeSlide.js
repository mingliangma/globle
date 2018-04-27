import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SubscribeForm from './../forms/SubscribeForm';
import { subscribe } from './../../actions/user';

class SubscribeSlide extends React.Component {

	submit = (data) => this.props.subscribe(data)

	render(){
		return(
			<div id="subscribe" className="subscribe-section">
				<div id="fp-nav" className="left primary">
					<ul>
						<li>
							<a href="#welcome">
								<span/>
							</a>
							<div className="fp-tooltip left">Welcome</div>
						</li>
						<li>
							<a href="#introduction">
								<span/>
							</a>
							<div className="fp-tooltip left">Introduction</div>
						</li>
						<li>
							<a href="#technology">
								<span/>
							</a>
							<div className="fp-tooltip left">Technology</div>
						</li>
						<li>
							<a href="#subscribe" className="active">
								<span/>
							</a>
							<div className="fp-tooltip left">Subscribe</div>
						</li>
					</ul>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-12 more-features section-description wow fadeIn">
							<h2 className="title">
								Be Part of the Upcoming<br/>
								Intellectual Revolution
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6 wow fadeInRight">
							<div className="more-features-box-text">
								<h3 className="title">
									Subscribe to our newsletter
								</h3>
								<p className="m-t--25">
									Stay tuned to our updates.
								</p>
								<SubscribeForm submit={this.submit}/>
							</div>
						</div>
						<div className="col-sm-6 wow fadeInLeft">
							<div className="more-features-box-text">
								<h3 className="title think">
									Think you can help us ?
								</h3>
								<p className="mx-40">
									Submit your application to be part of the founding team!
								</p>
								<a className="btn btn-outline" href="https://docs.google.com/forms/d/e/1FAIpQLSenE4q7f3B2mch1SBaK1uvq-G1ch7YyC6adXV42YS6fseAIiA/viewform?entry.2005620554&entry.1045781291&entry.1065046570&entry.1166974658&entry.839337160">Apply to help</a>
							</div>
						</div>
					</div>
				</div>
				<a className="anchor-link primary" href="#welcome" style={{marginTop : '100px'}}>
					<div className="inner">Back to Top</div>
				</a>
			</div>

		);
	}
};

SubscribeSlide.propTypes = {
	subscribe : PropTypes.func.isRequired
};

export default connect(null, { subscribe })(SubscribeSlide);
