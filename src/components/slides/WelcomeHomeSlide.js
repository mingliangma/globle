import React from 'react';
import EarthAnimation from './../animations/earth';

const WelcomeHomeSlide = () => (
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
);

export default WelcomeHomeSlide;
