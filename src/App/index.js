import React from "react";
import { AppUi } from "./AppUi";

//Custom hook, here is logic for get and set data in localStorage.
function useLocalStorage(itemName, initialValue = []) {
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
			try{
				//Get content from local storage:
				const localStorageItem = localStorage.getItem(itemName);
	
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
				} else {
					setItem(JSON.parse(localStorageItem));
				}
				setLoading(false);
			} catch(e) {
				setError(e);
			}
        }, 1000);
    }, []);

    const saveItem = newItem => {
		try{
			localStorage.setItem(itemName, JSON.stringify(newItem));
			setItem(newItem);
		}
		catch(e){ setError(e); }
    };

    return {item, saveItem, loading, error};
}

function App() {
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
        <AppUi
			loading={loading}
			error={error}
            completedTodos={completedTodos}
            todosTotalSize={sizeTodos}
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
