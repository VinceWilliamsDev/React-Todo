import React from 'react'

export default function TodoList(props) {
    // console.log(props)

    return (
        <div>
            {props.todo.map(item => {
                return(
                    <div key={item.id}>
                        <h3>{item.task}</h3>
                    </div>
                )
            })}
        </div>
    )
}



