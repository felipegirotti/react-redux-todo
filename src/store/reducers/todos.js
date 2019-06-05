

const INITIAL_STATE = {
    items: [{id: Math.random(), title: 'Estudar React', done: false}],
};

export default function todos(state = INITIAL_STATE, action) {
    const items = [...state.items];
    switch (action.type) {
        case 'FETCH_DATA':             
            
            return {...state, items: action.payload.items };   

        case 'ADD_TODO':             
            items.unshift({ id: Math.random(), title: action.payload.text, done: false });
            return {...state, items: items};

        case 'DONE_TODO': 
            const todoItems = items
                .map((i) => {
                    if (i.id === action.payload.id) {                        
                        i.done = true;
                    }

                    return i;
                });            
            return { ...state, items: todoItems};

        case 'DELETE_TODO': 
                        
            return { ...state, items: items.filter(i => i.id !== action.payload.id) };
            
        default:
            return state;
    }
}