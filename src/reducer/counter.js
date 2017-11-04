export const intialState = {
	counter: 0
};

export const counter = (state = intialState, action) => {

	switch( action.type ) {
		case "INCREMENT": 
			return {
				...state,
				counter: state.counter + 1
			}
			break;
		case "DECREMENT": 
			return {
				...state,
				counter: state.counter - 1
			}
			break;
		default: return { ...state }
	}
	return state;
}

export default counter;