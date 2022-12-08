import React from "react";
import './TodoButton.css';


function CreateTodoButton(){
    return(
        <div className="todo-button">
            <button>
                <i className="fa-solid fa-circle-plus"></i>
            </button>
        </div>
    );
}

export {CreateTodoButton}
