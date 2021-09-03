import './App.css';
import { BrowserRouter as Router , Route,Switch, } from "react-router-dom";
import Navbar from './Components/Navbar';
import Task from './Components/Task';
import Userpage from './Components/Userpage';
import Home from './Components/Home';
import Changepwd from './Components/Changepwd';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/task">
          <Task />
        </Route>
        <Route exact path="/userpage">
          <Userpage />
        </Route>
        <Route exact path="/changepsw">
          <Changepwd />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
