import React from "react";
import './TodoCounter.css';

function TodoCounter({completedTodos, totalTodos}){
    const percentage = totalTodos > 0
        ? Math.trunc(completedTodos/totalTodos * 100) + '%'
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