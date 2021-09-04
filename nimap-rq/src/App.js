import './App.css';
import { BrowserRouter as Router , Route,Switch,Redirect } from "react-router-dom";
// import { render } from "react-dom";
import Navbar from './Components/Navbar';
import Task from './Components/Task';
import Userpage from './Components/Userpage';
import Home from './Components/Home';
import Changepwd from './Components/Changepwd';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {selectUser} from "./Reducers/userSlice";
import {useSelector} from "react-redux"

function App() {

  const user = useSelector(selectUser)

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"
          render={() => {
            return (
              user ?
              (<Redirect to="/home" /> || <Redirect to="/task" /> || <Redirect to="/userpage" /> || <Redirect to="/changepsw" />) :
                (<Redirect to="/login" />)
            )
            }}
        />
        <Route exact path="/home" component={Home}/>
        <Route exact path="/task" component={Task}/>
        <Route exact path="/userpage" component={Userpage} />
        <Route exact path="/changepsw" component={Changepwd}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
