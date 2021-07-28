import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Customers extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0,
      customerList: this.props.customers,
    };
  }

  handleClick() {
    const { customerList } = this.state;
    const sortedListByName = [...customerList];
    sortedListByName.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.setState({
      customerList: sortedListByName,
    });
    console.log(sortedListByName);
  }

  render() {
    const { customerList } = this.state;
    const { authenticated } = this.props;
    if (!authenticated) {
      return <span>Login não efetuado</span>;
    }
    return (
      <main>
        <h1>Clientes Cadastrados</h1>
        <div>
          {customerList.length === 0 ? (
            <span>Nenhum cliente cadastrado</span>
          ) : (
            <ul>
              {customerList.map((customer) => (
                <li>
                  {customer.name}
                  {customer.email}
                  {customer.age}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link to="/register">Fazer Cadastro </Link>
        <button onClick={this.handleClick} type="button">
          Ordenar
        </button>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.loginReducer.authenticated,
  customers: state.customersReducer.customers,
});

export default connect(mapStateToProps)(Customers);
