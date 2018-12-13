import React from 'react';
import { render } from 'react-dom';
import { ServerRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Single from './components/Single';

const Root = function () {
	return (
		<ServerRouter>
			<div>
				<Route exact path="/" component={ Main } />
				<Route path="/:postId/:postSlug" component={ Single } />
			</div>
		</ServerRouter>
	);
};

render( <Root />, document.querySelector( '#root' ) );
