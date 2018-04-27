import React from 'react';


const WalletTechnologySlide = () => (
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
);

export default WalletTechnologySlide;
