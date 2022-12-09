import React from "react";
import './TodoButton.css';


function CreateTodoButton({openModal, setOpenModal}){
    return(
        <div className="todo-button">
            <button onClick={ () => setOpenModal(prev => !prev) }>
                <i 
                    className={
                        !!openModal 
                        ? 'fa-regular fa-circle-xmark'
                        : 'fa-solid fa-circle-plus'
                    }
                ></i>
            </button>
        </div>
    );
}

export {CreateTodoButton}
