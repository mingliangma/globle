import React from 'react';

import TodayAboutSlide from './../slides/TodayAboutSlide';
import LightAboutSlide from './../slides/LightAboutSlide';
import SummaryAboutSlide from './../slides/SummaryAboutSlide';
import IntroducingAboutSlide from './../slides/IntroducingAboutSlide';
import ExecutionAboutSlide from './../slides/ExecutionAboutSlide';
import CollectiveAboutSlide from './../slides/CollectiveAboutSlide';
import InternationalAboutSlide from './../slides/InternationalAboutSlide';

const AboutPage = () => (
	<div>
		<TodayAboutSlide />
		<LightAboutSlide />
		<SummaryAboutSlide />
		<IntroducingAboutSlide />
		<ExecutionAboutSlide />
		<CollectiveAboutSlide />
		<InternationalAboutSlide />
	</div>
);

export default AboutPage;
