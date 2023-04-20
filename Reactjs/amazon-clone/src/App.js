
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <h1>Amazon clone project</h1>
          
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>

          <Route path="/login">
            <h1>Login page</h1>
          </Route>

          <Route path="/">
            <h1>Home page</h1>
          </Route>

          
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
