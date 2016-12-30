import React, {PropTypes} from 'react';

const Todo = ({status, text})=>(
	<li style={{textDecoration: status ? 'line-through' : 'none' }}>
		{text}
	</li>
)

Todo.propTypes = {
	text: PropTypes.string.isRequired,
	//onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired
}
export default Todo