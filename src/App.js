import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="button">
          <Link to="/login" class="button">Show Form</Link>
          <Link to="/" class="button">Hide Form</Link>
        </div>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
