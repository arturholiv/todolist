import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginEmail from '../actions';
import Footer from '../components/Footer';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInputText: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  render() {
    const { password, emailInputText } = this.state;
    const { dispatchUserEmail } = this.props;
    const minPasswordLength = 6;
    return (
      <div className="login-form-page">
        <div>
          <h1>
            To Do List
          </h1>
          <p>
            Sign in to use the App
          </p>
        </div>
        <form className="form__group field">
          <label
            htmlFor="email-input"
            className="form__label"
          >
            <input
              type="email"
              name="emailInputText"
              placeholder="Email"
              data-testid="email-input"
              required
              className="form__field"
              onChange={ this.handleChange }
            />
          </label>

          <label
            htmlFor="password-input"
            className="form__label"
          >
            <input
              type="password"
              name="password"
              minLength="6"
              placeholder="Password"
              data-testid="password-input"
              required
              className="form__field"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/list">
            <button
              type="submit"
              className="btn-submit"
              disabled={ !(this.validateEmail(emailInputText)
              && password.length >= minPasswordLength) }
              onClick={ () => dispatchUserEmail(emailInputText) }
            >
              Enter
            </button>
          </Link>
        </form>
        <Footer />
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserEmail: (email) => dispatch(loginEmail(email)),
});

Login.propTypes = {
  dispatchUserEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
