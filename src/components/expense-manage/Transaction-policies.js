import React from "react";
import {
  TransactionPoliciesContainer,
  TransactionPolicy,
  TransactionPolicyTitle,
} from "./expense-manage-style";
import { ToggleSwitch } from "./policies/ToggleSwitch";
import { MaxWithdrawal } from "./policies/maxWithdrawal";
import TimeOfTransaction from "./policies/TimeOfTransaction";
import { blockECOM, maxWithdrawalAmount, unblockECOM } from "../../utils/api";
import BlockSpecificMerchant from "./policies/blockSpecificMerchant";
import Loader from "react-loader-spinner";
import { TextField } from "@material-ui/core";

export default function TransactionPolicies() {
  const [state, setState] = React.useState({
    maxWithdrawal: 0,
    ECOM: true,
    // noOfTransactions: 1,
    // blockMerchant: '',
    blockSpecificMerchant: null,
    loading: false,
  });

  const accountHolderId = "73ff54fb-bb78-42c0-a735-7e46a993139a";
  const today = new Date();
  const requestData = {
    accountHolderId,
    expiresAt: new Date(today.setMonth(today.getMonth() + 1)).toISOString(),
    effectiveFrom: new Date().toISOString(),
  };

  const handleECOMChange = (event) => {
    setState({ ...state, loading: true });
    if (event.target.checked) {
      unblockECOM(accountHolderId).then((data) => {
        setState({ ...state, ECOM: !state.ECOM, loading: false });
      });
    } else {
      blockECOM(requestData).then(() => {
        setState({ ...state, ECOM: !state.ECOM, loading: false });
      });
    }
  };

  const handleMaxWithdrawalChange = (event) => {
    setState({ ...state, maxWithdrawal: parseInt(event.target.value) || 0 });

    if (event.target && event.target.value) {
      maxWithdrawalAmount({
        ...requestData,
        dailyLimit: parseInt(event.target.value) || 0,
      }).then((data) => {
        // Success
      });
    }
  };

  return (
    <TransactionPoliciesContainer className="TransactionPoliciesContainer">
      <h5 style={{ fontSize: 25, fontWeight: "bold", fontFamily: "serif" }}>
        Control Expenses
      </h5>

      <TransactionPolicy>
        <TransactionPolicyTitle>Enable ECOM</TransactionPolicyTitle>

        {state.loading ? (
          <div
            style={{
              display: "inline",
              width: "10%",
              position: "absolute",
              marginLeft: "20px",
            }}
          >
            <Loader type="TailSpin" color="#6e48aa" height="25" width="25" />{" "}
          </div>
        ) : (
          <ToggleSwitch
            checked={state.ECOM}
            onChange={(event) => handleECOMChange(event)}
            name="ECOM"
          />
        )}
      </TransactionPolicy>

      <TransactionPolicy>
        <TransactionPolicyTitle>Max Withdrawal</TransactionPolicyTitle>
        <div
          style={{
            width: "25%",
            display: "inline-block",
          }}
        >
          <TextField
            id="standard-basic"
            type="number"
            max={50000}
            onBlur={(event) => handleMaxWithdrawalChange(event)}
          />
        </div>
      </TransactionPolicy>

      <TransactionPolicy>
        <TransactionPolicyTitle style={{ width: "100%" }}>
          Block a specific merchant
        </TransactionPolicyTitle>

        <BlockSpecificMerchant />
      </TransactionPolicy>

      {/* <TransactionPolicy>
        <TransactionPolicyTitle>Time of transactions</TransactionPolicyTitle>
        <TimeOfTransaction />
      </TransactionPolicy>

    
      <TransactionPolicy>
        <TransactionPolicyTitle>Max spend at merchant</TransactionPolicyTitle>
        <TimeOfTransaction />
      </TransactionPolicy> */}
    </TransactionPoliciesContainer>
  );
}
