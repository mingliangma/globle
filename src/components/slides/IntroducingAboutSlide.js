import React from 'react';
import TimelineAnimation from './../animations/timeline';

class IntroducingAboutSlide extends React.Component {

	render(){
		return(
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
		);
	}
};

export default IntroducingAboutSlide;
