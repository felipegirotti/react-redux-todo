import React from 'react';
import Todo from './components/todo';
import { Provider } from 'react-redux';
import store from './store'

const App = () => (
    <Provider store={store}>
        <Todo></Todo>
    </Provider>
)

export default App;
