import React, { PropTypes } from 'react';
import Todo from './Todo.js';
//任务列表
const TodoList = ({ todos, onTodoClick }) => (
	<ul>
	    {todos.map(todo =>
	      <Todo
	        key={todo.id}
	        {...todo}
	        onClick={() => onTodoClick(todo.id)}
	      />
	    )}
  	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,//PropTypes.shape校验一个复杂对象，PropTypes.arrayOf校验数组
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList