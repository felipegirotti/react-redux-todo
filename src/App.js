import React, {Component, Fragment}from 'react';
import './todo.css';

class App extends Component {
  state = {todo: '', items: [{id: 1, title: 'alguma coisa', done: false}]}

   handleSubmit = (event) => {
     event.preventDefault();          
     const items = [...this.state.items, {id: Math.random(), title: this.state.todo, done: false}];
     this.setState({ todo: '', items: items});
  }
  handleDone = (id) => {
    const items = this.state.items
    .map(i => {
      if (i.id === id) {
        i.done = true;
      }      
       return i;
    });

    this.setState({...this.state, items: items});
  }

  handleDelete = (id) => {
      const items = this.state.items.filter(i => i.id !== id);
      this.setState({...this.state, items: items});
  }

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
                <input type="text" placeholder="EX: Estudar React" onChange={(e) => this.setState({...this.state, todo: e.target.value})} value={this.state.todo}></input>
                <button type="submit">OK</button>
              </div>
            </div>
            
          </form>
        </section>
        <section>
          <h2>Lista</h2>
          <ul>
            {this.state.items.map(todo => (
              <Fragment>
                <li key={todo.id} className={todo.done ? 'line-strike' : ''}>{todo.title}</li>
                <button onClick={() => this.handleDone(todo.id)}>Terminado</button>
                <button onClick={() => this.handleDelete(todo.id)}>Apagar</button>
              </Fragment>              
            ))} 
          </ul>
        </section>
      </div>
    )
  }
}

export default App;
