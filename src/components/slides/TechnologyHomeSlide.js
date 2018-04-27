import React from 'react';
import { Link } from 'react-router-dom';

const TechnologySlide = () => (
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
);

export default TechnologySlide;
