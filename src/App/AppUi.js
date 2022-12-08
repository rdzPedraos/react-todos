import React from "react";
import "./App.css";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { Header } from "../layouts/Header";

function AppUi({
    completedTodos,
    todosTotalSize,
    searchValue,
    setSearchValue,
    searchedTodos,
    setStateTodo,
    showOnlyCompleted,
    changeShowedTodos
}){
    return (
        <div className="card">
            <Header />

            <TodoCounter
                completedTodos={completedTodos.length}
                totalTodos={todosTotalSize}
            />

            {/*Body*/}
            <div style={{ marginTop: "2.5em" }}>
                <TodoSearch
                    id="search"
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <div style={{ marginTop: "2em" }}>
                    <p
                        style={{
                            textAlign: "right",
                            color: "var(--active-color)",
                            cursor: "pointer",
                        }}
                        onClick={changeShowedTodos}
                    >
                        <span style={{ marginRight: ".5em" }}>
                            { showOnlyCompleted ? 'Show all tasks' : 'Show completed tasks'}
                        </span>

                        <i className={showOnlyCompleted ? 'fa-regular fa-eye-slash' : "fa-regular fa-eye"}></i>
                    </p>

                    <section className="list-todos">
                        <ul>
                            {searchedTodos.map(todo => (
                                <li key={todo.text}>
                                    <TodoItem
                                        text={todo.text}
                                        completed={todo.completed}
                                        onChangeState={() => setStateTodo(todo.text)}
                                        onDelete={() => setStateTodo(todo.text, true)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <CreateTodoButton />
            </div>
        </div>
    );
}

export { AppUi };