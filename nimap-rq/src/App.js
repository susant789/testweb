import './App.css';
import { BrowserRouter as Router , Route,Switch} from "react-router-dom";
// import { render } from "react-dom";
import Navbar from './Components/Navbar';
import Task from './Components/Task';
import Userpage from './Components/Userpage';
import Home from './Components/Home';
import Changepwd from './Components/Changepwd';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PrivateRoute from './Components/Priviteroutes';
import {selectUser} from "./Reducers/userSlice";
import {useSelector} from "react-redux"

function App() {

  const user = useSelector(selectUser)

  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute path="/task" component={Task}/>
        <PrivateRoute path="/userpage" component={Userpage} />
        <PrivateRoute path="/changepsw" component={Changepwd}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
