import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import LoginForm from './LoginForm';
import Success from './Success';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Link to="/login" class="button">Show Form</Link>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
