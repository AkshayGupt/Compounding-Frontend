import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import "./dialog.css";

export default function SimpleDialog(props) {
  const { onClose, open } = props;
  const [value, setValue] = useState(0);

  const handleClose = () => {
    onClose(0);
  };

  const handleListItemClick = () => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div className="dialog_container">
        <h5 style={{ fontWeight: 600 }} id="simple-dialog-title">
          Add amount
        </h5>
        <input
          autoFocus
          min="1"
          onChange={(event) => {
            setValue(parseInt(event.target.value || 0));
          }}
          type="number"
        />
        <Button
          className="add-balance-button"
          variant="outlined"
          color="primary"
          onClick={handleListItemClick}
        >
          Add
        </Button>
      </div>
    </Dialog>
  );
}
