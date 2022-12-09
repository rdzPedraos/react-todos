import React from "react";
import { TodoContext } from "../../TodoContext";
import './form.css';

function TodoForm({closeModal}){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {addTodo} = React.useContext(TodoContext);

    const onSubmit = (ev) => {
        ev.preventDefault();
        addTodo(newTodoValue);
        closeModal();
    }

    return (
        <div className="form">
            <div className="form-icon"> <img src="icon.svg" alt="icon about create homework"/> </div>
            <form onSubmit={onSubmit}>
                <textarea 
                    value={newTodoValue}
                    onChange={ (ev)=>setNewTodoValue(ev.target.value) }
                    placeholder="I must to do the homework..."
                />
                
                <button type="submit">Guardar</button>
            </form>
        </ div>
    );
}

export { TodoForm }