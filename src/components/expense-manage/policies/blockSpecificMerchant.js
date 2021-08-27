import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select } from "@material-ui/core";
import { blockSpecificMcc } from "../../../utils/api";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    width: "240px",
    display: "flex",
    margin: "auto",
  }
});

export default function BlockSpecificMerchant() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const today = new Date();
  const requestData = {
    accountHolderId: "73ff54fb-bb78-42c0-a735-7e46a993139a",
    expiresAt: new Date(today.setMonth(today.getMonth() + 1)).toISOString(),
    effectiveFrom: new Date().toISOString(),
  };

  const handleChange = (event, newValue) => {
    console.log(newValue);
    blockSpecificMcc({ ...requestData, mcc: newValue }).then(() => {
      setValue(newValue);
    });
  };

  return (
    <div className={classes.root}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={5921}>Alcohol Shops</MenuItem>
        <MenuItem value={5812}>Restaurants</MenuItem>
        <MenuItem value={5813}>Bars / Pubs</MenuItem>
        <MenuItem value={7801}>Online Gambling</MenuItem>
        <MenuItem value={7832}>Theatres</MenuItem>
      </Select>
    </div>
  );
}
