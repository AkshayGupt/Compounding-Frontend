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
  const mccArr = [5921, 5812, 5813, 7801, 7832];

  const today = new Date();
  const requestData = {
    accountHolderId: "73ff54fb-bb78-42c0-a735-7e46a993139a",
    expiresAt: new Date(today.setMonth(today.getMonth() + 1)).toISOString(),
    effectiveFrom: new Date().toISOString(),
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target && event.target.value) {
      blockSpecificMcc({
        ...requestData,
        mcc: parseInt(event.target.value),
      }).then(() => {
        setValue(parseInt(event.target.value));
      });
    }
  };

  return (
    <div className={classes.root} >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={mccArr[0]}>Alcohol Shops</MenuItem>
        <MenuItem value={mccArr[1]}>Restaurants</MenuItem>
        <MenuItem value={mccArr[2]}>Bars / Pubs</MenuItem>
        <MenuItem value={mccArr[3]}>Online Gambling</MenuItem>
        <MenuItem value={mccArr[4]}>Theatres</MenuItem>
      </Select>
    </div>
  );
}
