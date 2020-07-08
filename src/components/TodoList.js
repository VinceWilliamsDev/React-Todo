import React from 'react'
import Todo from'./Todo'

export default function TodoList(props) {
    // console.log(props)

    return (
        <div>
            {props.todo.map(item => {
                return(
                    <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted} />
                )
            })}
        </div>
    )
}



