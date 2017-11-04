import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import Counter from './containers/Counter';
import configureStore from './store/main';

const store = configureStore();

render(
	<Provider store={ store }>
		<Counter />
	</Provider>,
	document.getElementById('app')
)

