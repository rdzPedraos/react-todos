import React from "react";
import "./TodoSearch.css";

function TodoSearch({id, searchValue, setSearchValue}) {
    const onSearchValueChange = event => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="task-search">
            <input
                id={id}
                placeholder="Search task.."
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <label htmlFor={id}>
                <i className="fa-solid fa-magnifying-glass icon"></i>
            </label>
        </div>
    );
}

export { TodoSearch };
