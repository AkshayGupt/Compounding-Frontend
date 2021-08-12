import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import RedeemIcon from "@material-ui/icons/Redeem";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { useHistory } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import "./footer-tab.css";

const FooterTabs = () => {
  const history = useHistory();
  const handleTabChange = (e, path) => {
    setValue(path);
    history.push(path);
  };

  const [value, setValue] = React.useState("/home");

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => handleTabChange(e, newValue)}
      className="navigation-tab"
    >
      <BottomNavigationAction label="Home" value="/home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Dashboard"
        value="/dashboard"
        icon={<DashboardIcon />}
      />
      <BottomNavigationAction
        label="Rewards"
        value="/rewards"
        icon={<RedeemIcon />}
      />
      <BottomNavigationAction
        label="Quest"
        value="/select-quest"
        icon={<QuestionAnswerIcon />}
      />
    </BottomNavigation>
  );
};

export default FooterTabs;
