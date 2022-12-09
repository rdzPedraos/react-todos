import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    //useHooks:
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1");
    const [searchValue, setSearchValue] = React.useState("");
    const [showOnlyCompleted, setShowOnlyCompleted] = React.useState(false);

    const sizeTodos = todos.length;
    const completedTodos = todos.filter(todo => !!todo.completed);

    const searchText = searchValue.toLowerCase();
    const searchedTodos =
        searchValue.length === 0
            ? todos
            : todos.filter(todo => {
                return todo.text.toLowerCase().includes(searchText);
            });

    const setStateTodo = (text, eraser = false) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];

        if (eraser) newTodos.splice(todoIndex, 1);
        else newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

        saveTodos(newTodos);
    };

    const changeShowedTodos = () => setShowOnlyCompleted(!showOnlyCompleted);

    return (
        <TodoContext.Provider value={{
            loading,
			error,
            completedTodos,
            sizeTodos,
            searchValue,
            setSearchValue,
            searchedTodos: 
                !showOnlyCompleted
                    ? searchedTodos
                    : searchedTodos.filter(todos => todos.completed),
            setStateTodo,
            showOnlyCompleted,
            changeShowedTodos,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }