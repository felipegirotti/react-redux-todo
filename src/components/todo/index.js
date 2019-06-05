import React, { Component } from 'react';
import './todo.css';
import TodoList from './../todolist'
import Api from './../../service/api/todo'
import { addTodo, fetchData } from '../../store/actions/todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Todo extends Component {
    state = { todo: '', disabled: false/*, items: [{ id: 1, title: 'alguma coisa', done: false }]*/ }

    componentDidMount() {
        this.props.fetchData();
        // Api.get()
        //     .then(response => (this.setState({ ...this.state, items: response.data })));
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({...this.state, loading: true});

        // const response = await Api.post('', {title: this.state.todo, done: false})        
        // const items = [...this.state.items];
        // items.unshift(response.data);
        // this.setState({ todo: '', items: items });
        this.props.addTodo(this.state.todo);
        this.setState({...this.state, loading: false, todo: ''});
    }
    // handleDone = (id) => {
        // this.setState({ ...this.state, loading: true });
        // const items = this.state.items
        //     .map((i) => {
        //         if (i.id === id) {
        //             Api.put('/' + id, {title: i.title, done: true})
        //                 .finally(() => this.setState({ ...this.state, loading: false }));
        //             i.done = true;
        //         }
        //         return i;
        //     });        
        // this.setState({ ...this.state, items: items });
    // }

    // handleDelete = async (id) => {
    //     this.setState({ ...this.state, loading: true });
    //     await Api.delete('/' + id);
    //     const items = this.state.items.filter(i => i.id !== id);
    //     this.setState({ ...this.state, loading: false, items: items });        
    // }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Todo App</h1>
                </header>
                <section>
                    <form className="form-control" onSubmit={this.handleSubmit} >
                        <div className="row">
                            <div className="form-control">
                                <label>Tarefa</label>
                                <input type="text" placeholder="EX: Estudar React" disabled={this.state.loading} onChange={(e) => this.setState({ ...this.state, todo: e.target.value })} value={this.state.todo}></input>
                                <button type="submit" disabled={this.state.loading}>OK</button>
                            </div>
                        </div>

                    </form>
                </section>
                <section>
                    <TodoList></TodoList>
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({addTodo, fetchData}, dispatch);

export default connect(null, mapDispatchToProps)(Todo);
