import LandingScreen from "./components/Landing/LandingScreen";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transactions from "./components/Transactions/Transactions";
import TransactionView from "./components/Transactions/TransactionView";
import QuestionsBot from "./components/Details/QuestionsBot";
import QuestDetails from "./components/Quests/GroupQuests/QuestDetails";
import RewardsTabs from "./components/club/rewards";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingScreen} />
          <Route path="/home" exact component={Home} />
          <Route path="/transactions" exact component={Transactions} />
          <Route path="/transaction/:id" exact component={TransactionView} />
          <Route path="/details" exact component={QuestionsBot} />
          <Route path="/groupQuest" exact component={QuestDetails} />
          <Route path="/rewards" exact component={RewardsTabs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
