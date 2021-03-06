import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import SubscribeForm from './../forms/SubscribeForm';
import EarthAnimation from './../animations/earth';
import { subscribe } from './../../actions/user';

class HomePage extends React.Component {

	submit = (data) => this.props.subscribe(data)

	render(){
		return(
			<div>
				<section id="welcome" className="section globle-bg">
					<div id="fp-nav" className="left wow fadeInDown">
						<ul>
							<li>
								<a href="#welcome" className="active">
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
								<a href="#subscribe">
									<span/>
								</a>
								<div className="fp-tooltip left">Subscribe</div>
							</li>
						</ul>
					</div>
					<header className="i-header">
						<div className="fullscreen-img-wrap">
							<EarthAnimation />
						</div>
						<div className="header-planets-overlay"/>
						<div className="header-content mx-auto">
							<div className="container">
								<div className="row">
									<div className="col-md-12 mx-auto">
										<div className="brand text-center wow fadeIn">
											<img src="/assets/img/logo@2x.png" alt="Globle logo"/>
											<h6 style={{ marginTop: '5px'}}>
												A platform that democratizes innovation.
											</h6>
											<h6>A global network owned by everyone.</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</header>
					<a className="anchor-link default" href="#introduction">
						<div className="inner">
							Scroll
						</div>
					</a>
				</section>
				<div id="introduction" className="section introduction-container">
					<div id="fp-nav" className="left wow fadeInDown primary">
						<ul>
							<li>
								<a href="#welcome">
									<span/>
								</a>
								<div className="fp-tooltip left">Welcome</div>
							</li>
							<li>
								<a href="#introduction" className="active">
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
								<a href="#subscribe">
									<span/>
								</a>
								<div className="fp-tooltip left">Subscribe</div>
							</li>
						</ul>
					</div>
					<div className="container">
						<img className="concept-mobile-img" src="/assets/img/core/concept.png" alt="Concept"/>
						<div className="row">
							<div className="col-sm-12">
								<div className="concept-img"/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 call-to-action section-description wow fadeInLeftBig">
								<h2 className="title">Introducing Globle</h2>
								<p>
									Globle is a platform that fully democratizes the creation, development, funding, and
									management of new projects and ideas. It is a decentralized means of building and
									running new companies, a platform which is managed and owned equally by all its
									users. All profits generated by Globle projects are distributed between project
									contributors and the rest of Globle users, providing a potential universal basic income
									(UBI) to everyone.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 section-bottom-button wow fadeInUp">
								{/* <a className="block-link" href="#">Watch video</a> <br/> <br/> */}
								<Link className="btn btn-primary" to="about">
									Read more
								</Link>
							</div>
						</div>
					</div>
					<a className="anchor-link primary" href="#technology">
						<div className="inner">Scroll</div>
					</a>
				</div>
				<div id="technology" className="section technology-container section-container section-container-gradiant">
					<div id="fp-nav" className="left wow fadeInDown" style={{marginTop: '22vh'}}>
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
								<a href="#technology" className="active">
									<span/>
								</a>
								<div className="fp-tooltip left">Technology</div>
							</li>
							<li>
								<a href="#subscribe">
									<span/>
								</a>
								<div className="fp-tooltip left">Subscribe</div>
							</li>
						</ul>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-sm-5 wow fadeIn">
								<img src="/assets/img/core/spotlight.png" alt="" />
							</div>
							<div className="col-sm-1"/>
							<div className="col-sm-5 wow" style={{paddingTop : '50px'}}>
								<div className="text-left">
									<h2 className="title">The Technology</h2>
									<p className="description">
										Globle is built on the Ethereum blockchain, and all democratic processes on Globle will
										be performed on smart contracts. Globle Coin (GBC), the platform’s native digital
										currency, will be the world’s first cryptocurrency to have a dynamic and varying supply of
										coins that is issued by a fully automated and incorruptible smart contract, self-stabilizing
										the currency and eliminating high volatility as seen in other cryptocurrencies. This makes
										Globle Coin the first and only contender to become a true world currency that can be
										widely traded and adopted on a global scale.
									</p>
									{/* <a className="block-link" href="#">Watch video</a> */}
									<div className="btn-wrapper m-t-30">
										<Link className="btn btn-default" to="technology">
											Read more
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<a className="anchor-link default" href="#subscribe">
						<div className="inner">Scroll</div>
					</a>
				</div>
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
										Think you can help us?
									</h3>
									<p className="mx-40">
										Submit your application to be part of the team!
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
			</div>

		);
	}
};

HomePage.propTypes = {
	subscribe : PropTypes.func.isRequired
};

export default connect(null, { subscribe })(HomePage);

