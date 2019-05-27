export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        payload: {
            text: todo
        }
    }
}

export function handleDone(id) {
    return {
        type: 'DONE_TODO',
        payload: {
            id: id
        }
    }
}

export function handleDelete(id) {
    return {
        type: 'DELETE_TODO',
        payload: {
            id: id
        }
    }
}