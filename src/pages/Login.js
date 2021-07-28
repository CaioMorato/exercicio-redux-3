import React from 'react';
import { Link } from 'react-router-dom';

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

export default (Login);
