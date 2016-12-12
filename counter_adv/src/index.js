import React from 'react';
import ReactDOM from 'react-dom';
import {
	createStore
} from 'redux';
import reducer from './reducers';
import Counter from './components/counter.js';

const store = createStore(reducer);

const render = () => {
	ReactDOM.render(
		<Counter 
			value = { store.getState().value }
			onIn = { () => store.dispatch({type: 'ACTION_Increment'}) }
			onDe = { () => store.dispatch({type: 'ACTION_Decrement'}) }
		/>,
		document.getElementById('root')
	);
};

render();
store.subscribe(render);