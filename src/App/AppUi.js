import React from "react";
import "./App.css";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { Header } from "../layouts/Header";

function AppUI(){
    return (
        <div className="card">
            <Header />

            <TodoCounter/>

            {/*Body*/}
            <div style={{ marginTop: "2.5em" }}>
                <TodoSearch id="search"/>

                <div style={{ marginTop: "2em" }}>
                    <TodoContext.Consumer>
                        {({
                            changeShowedTodos,
                            showOnlyCompleted
                        }) => (
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
                        )}
                    </TodoContext.Consumer>
                    

                    <TodoContext.Consumer>
                        {({
                            error,
                            loading,
                            searchedTodos,
                            setStateTodo
                        }) => (
                            <section className="list-todos">
                                { error && <p>Ha ocurrido un error! {error}</p> }
                                { loading && <p>Cargando información...</p> }
                                { (!loading && !searchedTodos.length) && <p>No se encontraron coincidencias...</p> }
                                {
                                    !loading && !error &&
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
                                }
                            </section>
                        )}
                    </TodoContext.Consumer>
                </div>
                <CreateTodoButton />
            </div>
        </div>
    );
}

export { AppUI };