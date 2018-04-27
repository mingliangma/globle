import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import rootReducer from './rootReducer';
import { localeSet  } from './actions/locale';
import registerServiceWorker from './registerServiceWorker';

import ScrollToTop from './components/navigation/ScrollToTop';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.globleLang){
	store.dispatch(localeSet(localStorage.globleLang));
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ScrollToTop>
				<Route component={App} />
			</ScrollToTop>
		</Provider>
	</BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
