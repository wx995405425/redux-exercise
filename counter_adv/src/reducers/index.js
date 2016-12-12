import {
	combineReducers
} from 'redux';

const Increment = (state, action) => {
	if (typeof state === 'undefined') {
		return {
			value: 0,
			showFlag: false
		};
	}

	switch (action.type) {
		case 'ACTION_Increment':
			return Object.assign({}, state, {
				value: state.value + 1
			});
		default:
			return state;
	}
}

const Decrement = (state, action) => {
	if (typeof state === 'undefined') {
		return {
			value: 0,
			showFlag: false
		};
	}
	switch (action.type) {
		case 'ACTION_Decrement':
			return Object.assign({}, state, {
				value: state.value - 1
			});
		default:
			return state;
	}
}


const reducer = combineReducers({
	Increment,
	Decrement
})
export default reducer;