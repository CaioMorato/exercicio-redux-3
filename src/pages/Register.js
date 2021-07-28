import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import registerCustomer from '../actions/registerCustomer';

class Register extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      id: 0,
      name: '',
      email: '',
      age: 0,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState( {
      [name]: value,
    });
  }

  render() {
    const { name, email, age } = this.state;
    const { authenticated, customers } = this.props;
    if (!authenticated) {
      return <span>Login não efetuado</span>;
    }
    return (
      <div>
        <h1>Realizar Cadastro</h1>
        <div>
          <form action="">
            <label htmlFor="">
              Nome:
              <input name="name" type="text" value={name} onChange={this.handleChange} />
            </label>
            <label htmlFor="">
              E-mail:
              <input name="email" type="email" value={email} onChange={this.handleChange} />
            </label>
            <label htmlFor="">
              Idade:
              <input name="age" type="number" value={age} onChange={this.handleChange} />
            </label>
            <Link to="/customers">
              <button type="Submit" onClick={() => customers(this.state)}>
                Ver Cadastros
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.loginReducer.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  customers: (parametro) => dispatch(registerCustomer(parametro)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
