import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../../TodoContext";

function TodoCounter(){
    const { completedTodos, sizeTodos } = React.useContext(TodoContext);

    const percentage = sizeTodos > 0
        ? Math.trunc(completedTodos.length/sizeTodos * 100) + '%'
        : '0%';

    return (
        <div className="header-progress-bar">
            <div className="progress-bar" style={{width:percentage}}>
                {percentage}
            </div>
        </div>
    );
}

export { TodoCounter };