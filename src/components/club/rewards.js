import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import { Box, Typography } from "@material-ui/core";
import AdvancedImageList from "./Offers";
import "./rewards.css";

function RewardComponent() {
  return <AdvancedImageList />;
}

function SavingsComponent() {
  return <div>Savings ( work in Progress ) </div>;
}

function InvestmentsComponent() {
  return <div>Investments ( work in Progress ) </div>;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children()}
    </div>
  );
}

const RewardsTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <div>
      <Tabs
        variant={"fullWidth"}
        value={tabIndex}
        indicatorColor="secondary"
        onChange={(e, index) => setTabIndex(index)}
      >
        <Tab className="tab-header" label={"Rewards"}>
          First Tab
        </Tab>
        <Tab className="tab-header" label={"Savings"}>
          Second Tab
        </Tab>
        <Tab className="tab-header" label={"Investments"}>
          Content for third Tab
        </Tab>
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        {RewardComponent}
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        {SavingsComponent}
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        {InvestmentsComponent}
      </TabPanel>
    </div>
  );
};

export default RewardsTabs;
