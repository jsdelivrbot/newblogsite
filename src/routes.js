import React from 'react';
import {Route, IndexRoute } from 'react-router';

import PostsIndex from './components/posts_index';
import App from './components/app';
import PostsNew from './components/posts_new';



export default (
		<Route path="/" component={App}>
			<IndexRoute  component={PostsIndex} />
			<Route path="posts/new" component={PostsNew} />
		</Route>
	);
