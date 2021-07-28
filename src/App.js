import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Customers from './pages/Customers';
import Register from './pages/Register';
import store from './store';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
