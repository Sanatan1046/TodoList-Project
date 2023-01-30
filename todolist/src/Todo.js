import React from "react";
import "./Todo.css";
function Todo({ todoName, id, deleteTodo, completed, toggleCompleted }) {
    return (
        <div className="todo">
            <h3 className={`todoName ${completed ? "completed" : ""}`}>
                {todoName}
            </h3>
                <button
                    onClick={() => {
                        deleteTodo(id);
                    }}
                >
                    Delete
                </button>
        </div>
    );
}

export default Todo;