import React from 'react';
import Todo from './Todo';

function Todos({ todos, toggleCheck, deleteTodo }) {
    return (
        <div>
            {todos.length < 1 && <p>Nothing left to do!</p>}
            {todos.map(todo =>
            <Todo
                id={todo.id}
                title={todo.title}
                isChecked={todo.isChecked}
                toggleCheck={toggleCheck}
                deleteTodo={deleteTodo}
            />
            )}
        </div>
    );
}

export default Todos;