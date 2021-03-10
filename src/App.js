import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatched from './components/NoMatched/NoMatched';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/team/:idTeam'>
            <TeamDetail />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NoMatched />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
