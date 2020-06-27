import React from 'react';
import './App.css';
import TodoList from './Components/Todo_list/Todo_list'
import FormRegister from './Components/Form_register/Form_Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo_list">Todo_List</Link>
          </li>
          <li>
            <Link to="/form_register">Form_Register</Link>
          </li>
        </ul>
        <hr/>
        <div className='center'>
        <Switch>
          <Route path="/todo_list">
            <TodoList />
          </Route>
          <Route path="/form_register">
            <FormRegister />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

