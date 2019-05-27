import { createStore } from 'redux';
import reducers from './reducers';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, devTool);

export default store;