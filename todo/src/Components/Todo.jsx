import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // npm i @fortawesome/react-fontawesome
import { faCircle, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'; // npm i @fortawesome/free-solid-svg-icons

function Todo({ id, title, isChecked, toggleCheck, deleteTodo }) {
    return (
        <div className="todo">
            <button onClick={() => toggleCheck(id)}>
                <FontAwesomeIcon icon={isChecked ? faCheckCircle : faCircle} />                
            </button>
            {title}
            <button className="delete" onClick={() => deleteTodo(id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default Todo;

