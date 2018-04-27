import TimelineAnimation from './../animations/timeline';
import React from 'react';

const AboutPage = () => (
	<div>
		<div className="top-content innovation-container">
			<div className="inner-bg">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 section-description wow fadeInUp">
							<h2>
								Today's Innovation<br/>
								Model is Broken 
							</h2>
							<div className="divider-1">
								<span/>
							</div>
							<h4 className="quote wow fadeInRight">
								“<span>Ideas are cheap. Execution is everything.</span>”
							</h4>
							<p className="cite wow fadeInLeft">
								-<span> Chris Sacca, venture capitalist</span>
							</p>
							<p className="description wow fadeInRight m-t-30">
								In today’s world, ideas are hard to realize. For an idea to thrive and to be brought
								to fruition, many other factors that are entirely unrelated to the actual quality of
								the idea itself are necessary. These may include having extraordinary drive,
								determination, and perseverance; an innate ability to hire great teams and
								manage them; and access to capital or an ability to raise money.
							</p>
							<p className="description wow fadeInLeft m-t-35">
								<i>
									The overwhelming majority of great ideas are not being realized, not because
									they lack in quality, but because of other unrelated factors. Therefore, innovation
									is severely hampered.
								</i>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="section-container wow fadeIn">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<img src="/assets/img/core/light-bulbs.png" alt="Globle idea enlightenment" />
					</div>
				</div>
			</div>
		</div>
		<div className="summary-container wow fadeInRight">
			<div className="container">
				<div className="row">
					<div className="col-md-offset-2 col-md-8 col-sm-12 section-box summary">
						<div className="row">
							<div className="col-sm-12">
								<p className="description">
									The world needs a new model for innovation, in which as soon as a great idea is thought of, it gets paired automatically with the optimal team and funding resources, regardless of whom its originators are, and then immediately gets implemented and is on the path to fruition.
								</p>
								<img src="/assets/img/core/concept.png" alt="Globle cconception." />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="introducing-container section-container-gradiant">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 section-description wow fadeIn">
						<h2 className="m-t-30">Introducing Globle </h2>
						<div className="divider-1 wow fadeInUp">
							<span/>
						</div>
						<p className="medium-paragraph">
							Globle is a platform that fully democratizes the creation, development, funding,
							and management of new projects and ideas. As an idea grows on the Globle
							platform, it goes through six stages of development, with the final outcome being
							the optimal realization of the idea:
						</p>
					</div>
					<div className="col-sm-12 section-description wow fadeIn m-t-30">
						{/* Desktop timeline */}
						<TimelineAnimation />
						{/* }Desktop timeline */}

						{/* Mobile timeline */}
						<div className="container">
							<ul className="mobile-timeline">
								<li>
									<div className="mobile-timeline-badge">
										<span className="circle-star">
											<div className="circle-shadow">
												<div className="circle-dot"/>
											</div>
										</span>
									</div>
									<div className="mobile-timeline-panel">
										<div className="mobile-timeline-heading">
											<h3 className="mobile-timeline-title">
												Concept
											</h3>
										</div>
										<div className="mobile-timeline-body">
											<p>
												An idea is born and posted publicly on the Globle platform.
											</p>
										</div>
									</div>
								</li>
								<li>
									<div className="mobile-timeline-badge">
										<span className="circle-star">
											<div className="circle-shadow">
												<div className="circle-dot"/>
											</div>
										</span>
									</div>
									<div className="mobile-timeline-panel">
										<div className="mobile-timeline-heading">
											<h3 className="mobile-timeline-title">
												Validation
											</h3>
										</div>
										<div className="mobile-timeline-body">
											<p>
												The Globle community reacts to each concept through
												upvoting or downvoting the idea, with community-approved concepts
												progressing to the next stage.
											</p>
										</div>
									</div>
								</li>
								<li>
									<div className="mobile-timeline-badge">
										<span className="circle-star">
											<div className="circle-shadow">
												<div className="circle-dot"/>
											</div>
										</span>
									</div>
									<div className="mobile-timeline-panel">
										<div className="mobile-timeline-heading">
											<h3 className="mobile-timeline-title">
												Election
											</h3>
										</div>
										<div className="mobile-timeline-body">
											<p>
												A voting process takes place between the community members,
												and a project lead is democratically elected to oversee the management
												of the project.
											</p>
										</div>
									</div>
								</li>
								<li>
									<div className="mobile-timeline-badge">
										<span className="circle-star">
											<div className="circle-shadow">
												<div className="circle-dot"/>
											</div>
										</span>
									</div>
									<div className="mobile-timeline-panel">
										<div className="mobile-timeline-heading">
											<h3 className="mobile-timeline-title">
												Planning
											</h3>
										</div>
										<div className="mobile-timeline-body">
											<p>
												The project lead outlines the developmental roadmap of the
												project, and appoints team members on Globle.
											</p>
										</div>
									</div>
								</li>
								<li>
									<div className="mobile-timeline-badge">
										<span className="circle-star">
											<div className="circle-shadow">
												<div className="circle-dot"/>
											</div>
										</span>
									</div>
									<div className="mobile-timeline-panel">
										<div className="mobile-timeline-heading">
											<h3 className="mobile-timeline-title">
												Funding
											</h3>
										</div>
										<div className="mobile-timeline-body">
											<p>
												A crowdfunding campaign is launched to finance the
												development of the project, with raised funds stored in a project wallet,
												viewable by all team members and investors.
											</p>
										</div>
									</div>
								</li>
								<li>
									<div className="mobile-timeline-badge">
										<span className="circle-star">
											<div className="circle-shadow">
												<div className="circle-dot"/>
											</div>
										</span>
									</div>
									<div className="mobile-timeline-panel">
										<div className="mobile-timeline-heading">
											<h3 className="mobile-timeline-title">
												Realization
											</h3>
										</div>
										<div className="mobile-timeline-body">
											<p>
												The concept is implemented by the project lead and team
												members. They must provide mandated updates to the community from
												time to time, and investors have the power to re-elect a new project lead if
												necessary.
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
						{/* Mobile mobile-timeline */}
					</div>
				</div>
			</div>
		</div>
		<div className="section-container section-comma wow fadeIn">
			<div className="container">
				<div className="row">
					<div className="col-sm-offset-2 col-sm-8 section-box section-quote text-center">
						<h2 className="m-t-25">
							Execution is a Given. <br/>
							Everything is in the Idea
						</h2>
						<p className="m-t-30">
							The entire process through which ideas go from concept to reality is fully
							democratized. Ideas are submitted by the public, funded by the public, run by the
							public, and owned by the public.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className="section-container wow fadeIn">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<img src="assets/img/core/collective.png" alt="Globle collective community." />
					</div>
				</div>
			</div>
		</div>
		<div className="international-container wow fadeIn">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 section-description wow fadeIn">
						<h2 className="title">
							A Real Shared Economy, <br/>
							Owned by the World
						</h2>
						<div className="divider-1 wow fadeInUp">
							<span/>
						</div>
						<p className="description wow fadeInLeft m-t-60">
							Globle will be a real shared economy, owned equally by all its users. Anyone can
							create a account and become a Globle user, entirely free of charge.
						</p>
						<p className="description wow fadeInRight m-t-60">
							Contributors to projects, such as project creators, leads and team members will
							be fairly rewarded with the funds raised through crowdsales, as well as royalties
							on projects when they start to generate profits. Investors receive project tokens,
							which give them voting rights and a share of profits as well.
						</p>
						<p className="description wow fadeInLeft m-t-60">
							The rest of the profits will be funneled back to the platform. All such profits
							generated by Globle will then be redistributed equally to all its users, in the form
							of a basic income .
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default AboutPage;
