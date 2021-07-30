import Slides from './components/Introduction/Slides';
import Landing from './components/Landing/Landing'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transactions from './components/Transactions/Transactions';
import TransactionView from './components/Transactions/TransactionView';

function App() {
  return (

    <div className="App">
       <Router>
        <Switch>
          {/* Public Routes */}
          <Route path="/" exact component={Slides} />
          <Route path="/landing" exact component={Landing} />
          <Route path="/transactions" exact component={Transactions} />
          <Route path="/transaction/:id" exact component={TransactionView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
