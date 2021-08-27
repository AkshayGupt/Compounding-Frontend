import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select } from "@material-ui/core";
import { blockSpecificMcc } from "../../../utils/api";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    width: "240px",
    display: "flex",
    margin: "auto"
  },
});

const dummyAccountHolder = "dd95bd39-775e-48de-b352-36cd9b024c74";
var accountHolderId = "" || dummyAccountHolder;

export default function TimeOfTransaction() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const options = Array(24)
    .fill()
    .map((_, i) => i);

console.log(options);

  const today = new Date();
  const requestData = {
    accountHolderId,
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
        {options.map( i => (
            <MenuItem value={i}>{i}</MenuItem>
        ))
        }
      </Select>
    </div>
  );
}
