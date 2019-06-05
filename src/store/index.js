import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(promise)(createStore)(reducers, devTool);

export default store;