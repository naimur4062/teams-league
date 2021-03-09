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

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
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
