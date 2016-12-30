import React, { PropTypes } from 'react';
//任务项
const Todo = ({ onClick, completed, text})=>(
	<li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    	{text}
  	</li>
)

Todo.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired
}

export default Todo