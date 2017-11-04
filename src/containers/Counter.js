import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActionCreators from '../actions'; 

@connect(
	state => ({
		counter: state.counter.counter
	}),
	dispatch => ({
		appActions: bindActionCreators( appActionCreators, dispatch )
	})
)
export default class Counter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			appActions,
			counter
		} = this.props;

		return (
			<div>
				<button onClick={ appActions.asyncIncrement }>
					Increment after 1 second
				</button>{" "}
				<button onClick={ appActions.asyncDecrement }>
					Decrement after 2 second
				</button>{" "}
				<button onClick={ appActions.increment }>Increment</button>{" "}
				<button onClick={ appActions.decrement }>Decrement</button>
				<hr />
				<div>Clicked: {counter} times</div>
			</div>
		);
	}
}
