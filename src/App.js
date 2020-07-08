import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'


const initialState = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todo: initialState
    }
  }

  updateTodo = taskName => {
    const timeStamp = Date.now()

    const newTask = {
        task: `${taskName}`,
        id: `${timeStamp}`,
        completed: false
    }

    this.setState({
        todo: [...this.state.todo, newTask ]
    })
  }

  toggleCompleted = event => {
    event.persist()

    console.log(event.target.id)

    this.setState({
        todo: this.state.todo.map( item => {
            if (item.id == event.target.id) {
                return {
                    ...item,
                    completed: !item.completed
                } 
            } else {
                return item
            }
        })
    })
  }

  clearCompleted = () => {
    //function to clear completed tasks
    this.setState({
        todo: this.state.todo.filter(item => !item.completed)
    })
  }

  // you will need a place to store your state in this component.
  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} />
        <TodoForm updateTodo={this.updateTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
