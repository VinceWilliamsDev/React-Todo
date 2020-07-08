import React from 'react'
// import styled from 'styled-components'

// const Styledh3 = styled.h3`
//     .completed {
//         background-color: red;
//         text-decoration: line-through;
//     }
// `

export default function Todo(props) {

    return (
        <div onClick={props.toggleCompleted} >
            <h3 
                id={props.item.id}  
                className={props.item.completed ? 'completed' : 'incomplete'} 
            >
                {props.item.task}
            </h3>
        </div>
    )
}