import * as types from './types';

export const increment = () => ({
	type: types.INCREMENT
})

export const decrement = () => ({
	type: types.DECREMENT
})

export const asyncIncrement = () => ({
	type: types.INCREMENT_ASYNC
})

export const asyncDecrement = () => ({
	type: types.DECREMENT_ASYNC
})