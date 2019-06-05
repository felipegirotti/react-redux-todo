import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleDone, handleDelete } from './../../store/actions/todos';
import { bindActionCreators } from 'redux';


const TodoList = ({items, handleDone, handleDelete}) => (
    <Fragment>
        <h2>Lista</h2>
        <ul>
            {items.map(todo => (
                <Fragment key={todo.id}>
                    <li className={todo.done ? 'line-strike' : ''}>{todo.title}</li>
                    <button onClick={() => handleDone(todo.id, todo.title)}>Terminado</button>
                    <button onClick={() => handleDelete(todo.id)}>Apagar</button>
                </Fragment>
            ))}
        </ul>
    </Fragment>
); 

TodoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    })),
    handleDelete: PropTypes.func.isRequired,
    handleDone: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({items: state.todos.items});
const mapDispatchToProps = dispatch => bindActionCreators({ handleDone: handleDone, handleDelete: handleDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);