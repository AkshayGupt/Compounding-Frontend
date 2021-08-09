import LandingScreen from "./components/Landing/LandingScreen";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transactions from "./components/Transactions/Transactions";
import TransactionView from "./components/Transactions/TransactionView";
import QuestionsBot from "./components/Details/QuestionsBot";
import QuestDetails from "./components/Quests/GroupQuests/QuestDetails";
import OffersComponent from "./components/club/Offers";
import RewardsTabs from "./components/club/rewards";
import Dashboard from "./components/club/dashboard";
import SelectQuest from "./components/Quests/SelectQuest/SelectQuest";
import FixedDeposit from "./components/Details/FixedDepositBot";
import Stocks from "./components/Details/StocksBot";
import MutualFund from "./components/Details/MutualFundBot";
import Youtube from "./components/Main/VideoTutorial/Youtube";
import AvatarCreator from "./components/AvatarCreator/AvatarCreator";
import FooterTabs from "./components/club/footer-tabs";

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
          <Route path="/detail-quest" exact component={QuestDetails} />
          <Route path="/rewards" exact component={OffersComponent} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/select-quest" exact component={SelectQuest} />
          <Route path="/fixed-deposit" exact component={FixedDeposit} />
          <Route path="/stocks" exact component={Stocks} />
          <Route path="/mutual-fund" exact component={MutualFund} />
          <Route path="/youtube" exact component={Youtube} />
          <Route path="/avatar" exact component={AvatarCreator} />
        </Switch>
        <FooterTabs />
      </Router>
    </div>
  );
}

export default App;
