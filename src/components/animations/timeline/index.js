import React from 'react';

class TimelineAnimation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			stars: [true, null, null, null, null, null]
		};
	};	

	handleClick = (i) => {
		let e = this.state.stars;
		e = Array(6).fill(null);
		e[i] = true;
		this.setState({ stars : e });
	};

	render(){

		const {stars} = this.state;

		return(
			<div className="desktop-timeline">
				<div className="stepwizard">
					<div className="stepwizard-row setup-panel">
						<div className="stepwizard-step" onClick={() => this.handleClick(0)}>
							<h6>Concept</h6>
							<span className={stars[0] ? ("circle-star active") : ("circle-star")}>
								<div className="circle-shadow">
									<div className="circle-dot"/>	
								</div>
							</span>
						</div>
						<div className="stepwizard-step" onClick={() => this.handleClick(1)}>
							<h6>Validation</h6>
							<span className={stars[1] ? ("circle-star active") : ("circle-star")}>
								<div className="circle-shadow">
									<div className="circle-dot"/>	
								</div>
							</span>
						</div>
						<div className="stepwizard-step" onClick={() => this.handleClick(2)}>
							<h6>Election</h6>
							<span className={stars[2] ? ("circle-star active") : ("circle-star")}>
								<div className="circle-shadow">
									<div className="circle-dot"/>	
								</div>
							</span>
						</div>
						<div className="stepwizard-step" onClick={() => this.handleClick(3)}>
							<h6>Planning</h6>
							<span className={stars[3] ? ("circle-star active") : ("circle-star")}>
								<div className="circle-shadow">
									<div className="circle-dot"/>	
								</div>
							</span>
						</div>
						<div className="stepwizard-step" onClick={() => this.handleClick(4)}>
							<h6>Funding</h6>
							<span className={stars[4] ? ("circle-star active") : ("circle-star")}>
								<div className="circle-shadow">
									<div className="circle-dot"/>	
								</div>
							</span>
						</div>
						<div className="stepwizard-step" onClick={() => this.handleClick(5)}>
							<h6>Realization</h6>
							<span className={stars[5] ? ("circle-star active") : ("circle-star")}>
								<div className="circle-shadow">
									<div className="circle-dot"/>	
								</div>
							</span>
						</div>
					</div>
				</div>
				<div>
					{stars[0] && (
						<div id="concept" className="row setup-content">
							<div className="col-md-12">
								<p>An idea is born and posted publicly on the Globle platform.</p>
							</div>
						</div>
					)}
					{stars[1] && (
						<div className="row setup-content" id="validation">
							<div className="col-md-12">
								<p>The Globle community reacts to each concept through upvoting or downvoting the idea, with community-approved concepts progressing to the next stage.</p>
							</div>
						</div>
					)}
					{stars[2] && (
						<div className="row setup-content" id="election">
							<div className="col-md-12">
								<p>A voting process takes place between the community members, and a project lead is democratically elected to oversee the management of the project.</p>
							</div>
						</div>
					)}
					{stars[3] && (
						<div className="row setup-content" id="planning">
							<div className="col-md-12">
								<p>The project lead outlines the developmental roadmap of the project, and appoints team members on Globle.</p>
							</div>
						</div>
					)}
					{stars[4] && (
						<div className="row setup-content" id="funding">
							<div className="col-md-12">
								<p>A crowdfunding campaign is launched to finance the development of the project, with raised funds stored in a project wallet, viewable by all team members and investors.</p>
							</div>
						</div>
					)}
					{stars[5] && (
						<div className="row setup-content" id="realization">
							<div className="col-md-12">
								<p>The concept is implemented by the project lead and team members. They must provide mandated updates to the community from time to time, and investors have the power to re-elect a new project lead if necessary.</p>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
};

export default TimelineAnimation;
