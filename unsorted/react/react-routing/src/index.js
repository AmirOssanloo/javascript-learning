import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import styles from './index.css';

// Simple routes
const Index = () => <div><h1>Index</h1></div>;
const About = () => <div><h1>About</h1></div>;

// A redirect will send you to a new path
const Portal = () => <div><Redirect to="/" /></div>;

// Nested routes
const User = (props) => (
  <div>
    <h1>User</h1>
    <span>{props.match.params.id}</span>
  </div>
);

const Users = (props) => {
  return (
    <div>
      <h1>Users</h1>
        <nav>
          <ul>
            <li><Link to={`${props.match.url}/larry-copperfield`}>Larry Copperfield</Link></li>
            <li><Link to={`${props.match.url}/dendy-sandbag`}>Dendy Sandbag</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path={`${props.match.url}/:id`} component={User} />
          <Route exact path={props.match.path} render={() => <h3>Select a user to see their profile.</h3>} />
        </Switch>
    </div>
  );
};

// We can use NavLink to add classes to active links. But there is a bug that
// makes NavLink match with several links. For example, '/' is always active here.
// We should instead compose <Route> and <Link> together to create the desired effect.
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><NavLink activeClassName={styles["active"]} to="/">Index</NavLink></li>
              <li><NavLink activeClassName={styles["active"]} to="/about">About</NavLink></li>
              <li><NavLink activeClassName={styles["active"]} to="/portal">Portal</NavLink></li>
              <li><NavLink activeClassName={styles["active"]} to="/users">Users</NavLink></li>
            </ul>
          </nav>
          
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/portal" component={Portal} />
            <Route path="/users" component={Users} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));