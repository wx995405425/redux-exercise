import React from 'react'
import Filter from './Filter'
import AddTodo from '../containers/AddTodo'
import VTodoList from '../containers/VTodoList'

const App = ()=>(
      <div>
        <AddTodo/>
        <VTodoList/>
        <Filter/>
      </div>
  )
export default App
