import React from "react";
import { TodoContext } from "../../TodoContext";
import './form.css';

function TodoForm({closeModal}){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [error, setError] = React.useState('');
    const {addTodo} = React.useContext(TodoContext);

    const onSubmit = (ev) => {
        ev.preventDefault();
        if( newTodoValue ){
            addTodo(newTodoValue);
            closeModal();
        }
        else setError('Debe existir al menos un caracter en la tarea.');
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
                <p class="error">{error}</p>
                
                <button type="submit">Guardar</button>
            </form>
        </ div>
    );
}

export { TodoForm }