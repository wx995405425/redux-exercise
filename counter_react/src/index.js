import React from 'react';
import ReactDOM from 'react-dom';
import {
	createStore
} from 'redux';
import App from './App';
import './index.css';

const counter = function(state, action) {
	if (typeof state === 'undefined') { //设置默认state
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
		case 'ACTION_Decrement':
			return Object.assign({}, state, {
				value: state.value - 1
			});
		case 'Action_Viewchange':
			return Object.assign({}, state, {
				showFlag: !state.showFlag
			});
		default:
			return state;
	}
};

const rootEl = document.getElementById('root');
const store = createStore(counter);

const render = function() {
	ReactDOM.render( < App value = {
			store.getState().value
		}
		showFlag = {
			store.getState().showFlag
		}
		onIn = {
			() => store.dispatch({
				type: 'ACTION_Increment'
			})
		}
		onDe = {
			() => store.dispatch({
				type: 'ACTION_Decrement'
			})
		}
		onViewChange = {
			() => store.dispatch({
				type: 'Action_Viewchange'
			})
		}
		/>,
		rootEl
	);
};

render()
store.subscribe(render)