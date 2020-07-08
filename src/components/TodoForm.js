import React from 'react'

const initialFormValue = ''

export default class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            formValue: initialFormValue
        }
    }

    onChange = event => {
        console.log(event.target.name)
        // console.log(event.target.value)
        console.log(this.state.formValue)
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = event => {
        event.preventDefault()

        const taskName = this.state.formValue
        console.log(taskName)
        this.props.updateTodo(taskName)

        this.setState({formValue: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>New Task:&nbsp;</label>
                    <input name='newTask' type='text' value={this.state.formvalue} onChange={this.onChange} />
                    <button>Add to List</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}