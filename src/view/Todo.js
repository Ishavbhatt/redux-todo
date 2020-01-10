import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  checkedTodo,
  deleteTodo,
  allTodo,
  activeTodo,
  completedTodo
} from "../actions";

class Todo extends React.Component {
  handleChange = event => {
    if (event.keyCode === 13) {
      this.props.dispatch(addTodo(event.target.value));
      event.target.value = "";
    }
  };

  render() {
    let { todo, dispatch } = this.props;
    return (
      <div>
        <center>
          <h1 className="todo-heading">Todos</h1>
          <input
            className="todo-input"
            type="text"
            placeholder="Enter your todo"
            onKeyDown={this.handleChange}
          />
          {/* <button
            className="add-button"
            onClick={() => dispatch(addTodo(this.state.todotext))}
          >
            Add Todo
          </button> */}
        </center>
        <ul>
          {todo.map((onetodo, index) => (
            <li className="todolist">
              <div className="list-div">
                <div className="checkbox-text">
                  <input
                    type="checkbox"
                    checked={onetodo.completed ? true : ""}
                    onClick={() => dispatch(checkedTodo(onetodo.id))}
                  />
                  <h4 className="todo-text">{onetodo.todotext}</h4>
                </div>
                <div>
                  <button
                    className="cut-button"
                    onClick={() => dispatch(deleteTodo(onetodo.id))}
                  >
                    x
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="footer">
          <button className="add-button" onClick={() => dispatch(allTodo())}>
            All
          </button>
          <button className="add-button" onClick={() => dispatch(activeTodo())}>
            Active
          </button>

          <button
            className="add-button"
            onClick={() => dispatch(completedTodo())}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, todo) {
  console.log(state, todo);
  return { todo: state };
}

export default connect(mapStateToProps)(Todo);
