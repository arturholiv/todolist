import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo"

const TodosList = ({todos}) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <Todo todo={todo} id={i}/>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});
export default connect(mapStateToProps)(TodosList);