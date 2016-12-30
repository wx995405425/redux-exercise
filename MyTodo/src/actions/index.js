//action creaters 生成action
let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
export const setListFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const preState = {
	todo:{id:1, text:'eeee', status:false},
	todoList:[
		{id:0, text:'xxxx', status:false},
		{id:1, text:'eeee', status:false},
	]
}