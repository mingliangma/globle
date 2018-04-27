import React from 'react';

const TechnologySlide = () => (
	<div className="top-content ethereum-container">
		<div className="inner-bg">
			<div className="container">
				<div className="row">
					<div className="col-sm-5 cx-section-box eth-00 wow fadeInUp">
						<img className="ethereum-logo" src="/assets/img/core/ethereum.png" alt=""/>
					</div>
					<div className="col-sm-7 cx-section-box eth-01 wow fadeInRight">
						<div className="cx-section-box-text cx-section-box-text-left">
							<h2 className="m-t-0">
								The Technology<br/>
								Behind Globle
							</h2>
							<div className="divider-1 wow fadeInUp">
								<span className="m-t-25"/>
							</div>
							<p className="medium-paragraph">
								Globle will be a fully decentralized platform built on the Ethereum blockchain, and
								all democratic processes on Globle will be automatically performed by smart
								contracts. These include, but are not limited to, the validation of new project
								ideas by Globle users, the election and employment of project leads and team
								members, the issuance of virtual tokens for project crowdsales, the supervision
								and governance of projects by their investors; and the redistribution of profits to
								project contributors and the Globle community as a whole.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default TechnologySlide;
