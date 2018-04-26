import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncIncrement, asyncDecrement, increment, decrement } from '../actions';

export class Counter extends Component {
  render() {
    const {
      asyncIncrement,
      asyncDecrement,
      increment,
      decrement,
      counter,
    } = this.props;

    return (
      <div>
        <button onClick={asyncIncrement}>
          Increment after 1 second
        </button>{' '}
        <button onClick={asyncDecrement}>
          Decrement after 2 second
        </button>{' '}
        <button onClick={increment}>Increment</button>{' '}
        <button onClick={decrement}>Decrement</button>
        <hr />
        <div>Clicked: {counter} times</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    asyncIncrement,
    asyncDecrement,
    increment,
    decrement,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
