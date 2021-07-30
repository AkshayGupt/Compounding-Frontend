import Slides from './components/Introduction/Slides';
import Landing from './components/Landing/Landing'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
       <Router>
        <Switch>
          {/* Public Routes */}
          <Route path="/" exact component={Slides} />
          <Route path="/landing" exact component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
