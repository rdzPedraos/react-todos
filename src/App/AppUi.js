import React from "react";
import "./App.css";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoForm } from "../components/TodoForm";
import { Header } from "../layouts/Header";
import { CheckboxList } from "../layouts/Skeleton";
import { Modal } from "../Modal";

function AppUI(){
    const {
        changeShowedTodos,
        showOnlyCompleted,

        error,
        loading,
        searchedTodos,
        setStateTodo
    } = React.useContext(TodoContext);

    const [openModal, setOpenModal] = React.useState(false);

    return (
        <div className="card">
            <Header />

            <TodoCounter/>

            {/*Body*/}
            <div style={{ marginTop: "2.5em" }}>
                <TodoSearch id="search"/>

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
                        { error && <p>Ha ocurrido un error! {error}</p> }
                        { loading && <CheckboxList /> }
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
                </div>
                <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>
            </div>

            {
                !!openModal &&
                <Modal>
                    <TodoForm closeModal={ () => setOpenModal(false)}/>
                </Modal>
            }
        </div>
    );
}

export { AppUI };