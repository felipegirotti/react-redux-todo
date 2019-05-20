import React, {Fragment} from 'react';

const TodoList = ({items, handleDone, handleDelete}) => (
    <Fragment>
        <h2>Lista</h2>
        <ul>
            {items.map(todo => (
                <Fragment>
                    <li key={todo.id} className={todo.done ? 'line-strike' : ''}>{todo.title}</li>
                    <button onClick={() => handleDone(todo.id)}>Terminado</button>
                    <button onClick={() => handleDelete(todo.id)}>Apagar</button>
                </Fragment>
            ))}
        </ul>
    </Fragment>
); 

export default TodoList;