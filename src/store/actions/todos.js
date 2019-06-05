import Api from './../../service/api/todo';

export const addTodo = async (todo) => {
    await Api.post('', { title: todo, done: false })
    return {
        type: 'ADD_TODO',
        payload: {
            text: todo
        }
    }
}

export const handleDone = async (id, title) => {
    await Api.put('/' + id, { title: title, done: true });
    return {
        type: 'DONE_TODO',
        payload: {
            id: id
        }
    }
}

export async function handleDelete(id) {
    await Api.delete('/' + id);
    return {
        type: 'DELETE_TODO',
        payload: {
            id: id
        }
    }
}

export const fetchData = async () => {   
    const { data } = await Api.get();
    return {
        type: 'FETCH_DATA',
        payload: {
            items: data
        }
    }
}