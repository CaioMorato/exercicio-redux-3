import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authentication from '../actions/authentication';

class Login extends React.Component {
  render() {
    const { authentication } = this.props;
    return (
      <main>
        <h1>Login</h1>
        <form action="">
          <label htmlFor="">
            E-mail:
            <input type="email" />
          </label>
          <label htmlFor="">
            Senha:
            <input type="password" />
          </label>
          <Link to="/customers">
            <button type="Submit" onClick={() => authentication(true)}>
              Entrar
            </button>
          </Link>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authentication: (parametro) => dispatch(authentication(parametro)),
});

export default connect(null, mapDispatchToProps)(Login);
