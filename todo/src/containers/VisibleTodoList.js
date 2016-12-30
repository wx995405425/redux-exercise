import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList.js';
/*
	filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。
	语法：var new_arrary = arr.filter(callback[, thisArg])
	参数:
	callback
		用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。
		返回true表示保留该元素（通过测试），false则不保留。
	thisArg
		可选。执行 callback 时的用于 this 的值。
	t => t.completed 等价于：
	function(t){
		return t.completed;
	}
*/
const getVisibleTodos = (todos, filter) => {
	switch (filter) {		
	    case 'SHOW_ALL':
	      return todos
	    case 'SHOW_COMPLETED':
	      return todos.filter(t => t.completed)
	    case 'SHOW_ACTIVE':
	      return todos.filter(t => !t.completed)
	    default:
	      throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps =  ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList