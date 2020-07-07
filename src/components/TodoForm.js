import React from 'react'

export default class TodoForm extends React.Component {

    constructor() {
        super()
        this.state = {
            formValue: ''
        }
    }

    onChange = event => {

        console.log(event.target.value)
        // console.log(this.state.formValue)
        this.setState({formValue: event.target.value})
    }

    onSubmit = event => {
        this.preventDefault()

        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>New Task:&nbsp;</label>
                    <input type='text' value={this.state.formvalue} onChange={this.onChange} />
                    <button>Add to List</button>
                </form>
            </div>
        )
    }
}