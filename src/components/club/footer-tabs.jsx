import React, { useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./footer-tab.css";

import { useHistory, useLocation } from "react-router-dom";

const FooterTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    let idx = 0;
    const path = location.pathname;
    switch (path) {
      case "/home":
        idx = 0;
        break;
      case "/dashboard":
        idx = 1;
        break;
      case "/rewards":
        idx = 2;
        break;
      default:
        idx = 3;
        break;
    }

    setTabIndex(idx);
  }, [location.pathname]);

  const handleTabChange = (e, index) => {
    let path = "";
    switch (index) {
      case 0:
        path = "/home";
        break;
      case 1:
        path = "/dashboard";
        break;
      case 2:
        path = "/rewards";
        break;
      default:
        path = "/select-quest";
        break;
    }
    history.push(path);
  };

  return (
    <div className="navigation-tab">
      <Tabs
        value={tabIndex}
        onChange={(e, index) => handleTabChange(e, index)}
        indicatorColor="secondary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab className="tab-header" label={"Home"}></Tab>
        <Tab className="tab-header" label={"Dashboard"}></Tab>
        <Tab className="tab-header" label={"Rewards"}></Tab>
        <Tab className="tab-header" label={"Quests"}></Tab>
      </Tabs>
    </div>
  );
};

export default FooterTabs;
