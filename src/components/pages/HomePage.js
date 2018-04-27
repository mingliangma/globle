import React from 'react';

import WelcomeHomeSlide from './../slides/WelcomeHomeSlide';
import IntroductionHomeSlide from './../slides/IntroductionHomeSlide';
import TechnologyHomeSlide from './../slides/TechnologyHomeSlide';
import SubscribeHomeSlide from './../slides/SubscribeHomeSlide';

const HomePage = () => (
	<div>
		<WelcomeHomeSlide />
		<IntroductionHomeSlide />
		<TechnologyHomeSlide />
		<SubscribeHomeSlide />
	</div>
);

export default HomePage;
