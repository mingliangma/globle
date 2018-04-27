import React from 'react';

const TechnologyPage = () => (
	<div>
		<div className="top-content ethereum-container">
			<div className="inner-bg">
				<div className="container">
					<div className="row">
						<div className="col-sm-5 cx-section-box eth-00 wow fadeInUp">
							<img className="ethereum-logo" src="/assets/img/core/ethereum.png" alt="" />
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
		<div className="wallet-container wow fadeIn">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 cx-section-box wow fadeInLeft">
						<div className="wallet-box-text cx-section-box-text-left">
							<h2 className="m-t-0">Project Wallets</h2>
							<div className="divider-1 wow fadeInUp">
								<span className="m-t-25"/>
							</div>
							<p className="medium-paragraph">
								All funds raised through crowdfunding campaigns on Globle will be transferred to
								their respective Project Wallets, which will keep track of how funds are being
								disbursed by their teams, and will be fully transparent to investors. This makes it
								easy for investors to monitor projects that they have invested in and minimizes
								the risk of funds being used fraudulently or for other unrelated purposes.
							</p>
						</div>
					</div>
					<div className="col-sm-5 cx-section-box wow fadeInUp">
						<img className="wallet-img" src="assets/img/core/wallet.png" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div className="currency-container wow fadeIn">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 section-description wow fadeIn">
						<h2>
							Globle Coin, the Platform's<br/>
							Native Currency 
						</h2>
						<div className="divider-1 wow fadeInUp">
							<span />
						</div>
						<p className="description wow fadeInLeft">
							Globle Coin (GBC) is Globle’s own digital currency, which will be the store of
							value for all funds and transactions that move through the platform. An asset with
							a unique structure, it is a hybrid between fiat and cryptocurrency, incorporating
							only the positive aspects of each.
						</p>
						<p className="description wow fadeInLeft">
							Globle Coin will be the first digital currency to have a dynamic and varying supply
							of coins that is self-issued by a fully automated smart contract. This will keep its
							value extremely stable, like most fiat currencies we have today (e.g. dollars,
							euros, pounds), and prevent large price fluctuations which are common with
							other cryptocurrencies (e.g. Bitcoin, Ethereum, Ripple), mostly due to having
							limited and fixed supplies of coins.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default TechnologyPage;
