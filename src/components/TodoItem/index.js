import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return (
        <div className={'todo-item '+(props.completed?'checked':'')}>
            <div className="todo-item-check" onClick={props.onChangeState}>
                {props.completed ? <i className="fa-solid fa-check"></i> : ''}
            </div>

            <div className="todo-item-content">
                <span>{props.text}</span>
                <i className="fa-regular fa-trash-can" onClick={props.onDelete}></i>
            </div>
        </div>
    )
}

export {TodoItem};