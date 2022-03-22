import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";


class InputField extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => this.setState({todo: e.target.value});
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({todo: ""});
  };
  render() { 
    return(
      <form
      onSubmit={this.handleSubmit}
      className="input-todo-form"
      >
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          className="form__field"
          placeholder="Enter your Todo..."
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(InputField);