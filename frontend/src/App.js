import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Route,Switch} from 'react-router-dom'
import Fav from './components/Fav';


function App() {
  return (
    <Switch>
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path="/myfavs" component={Fav}/>
      </div>
    </Switch>
  );
}

export default App;
