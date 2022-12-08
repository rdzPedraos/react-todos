import React from "react";
import { AppUi } from "./AppUi";

function App() {
    //Get content from local storage:
    const keyLocalStorage = 'TODOS_V1';
    const localStorageTodos = localStorage.getItem(keyLocalStorage);
    let parsedTodos;

    //set data in parsedTodos
    if(!localStorageTodos) {
        localStorage.setItem(keyLocalStorage, '[]');
        parsedTodos = [];
    }
    else parsedTodos = JSON.parse(localStorageTodos);

    //useHooks:
    const [todos, setTodos] = React.useState(parsedTodos);
    const [searchValue, setSearchValue] = React.useState("");
    const [showOnlyCompleted, setShowOnlyCompleted] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed);
    
    const searchText = searchValue.toLowerCase();
    const searchedTodos =
        searchValue.length === 0
            ? todos
            : todos.filter(todo => {
                return todo.text.toLowerCase().includes(searchText)
            });
    
    const setStateTodo = (text, eraser=false) => {
        const todoIndex = todos.findIndex( todo => todo.text === text );
        const newTodos = [...todos];

        if( eraser ) newTodos.splice(todoIndex, 1);
        else newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

        setTodos(newTodos);
        localStorage.setItem(keyLocalStorage, JSON.stringify(newTodos))
    }

    const changeShowedTodos = () => {
        setShowOnlyCompleted( !showOnlyCompleted );
    }

    return (
        <AppUi 
            completedTodos={completedTodos}
            todosTotalSize={todos.length}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={
                !showOnlyCompleted 
                ? searchedTodos
                : searchedTodos.filter(todos => todos.completed)
            }
            setStateTodo={setStateTodo}
            showOnlyCompleted={showOnlyCompleted}
            changeShowedTodos={changeShowedTodos}
        />
    );
}

export default App;
