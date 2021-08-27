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

export default function TransactionPolicies() {
  const [state, setState] = React.useState({
    maxWithdrawal: 0,
    ECOM: true,
    // noOfTransactions: 1,
    // blockMerchant: '',
    blockSpecificMerchant: null,
  });

  const accountHolderId = "73ff54fb-bb78-42c0-a735-7e46a993139a";
  const today = new Date();
  const requestData = {
    accountHolderId,
    expiresAt: new Date(today.setMonth(today.getMonth() + 1)).toISOString(),
    effectiveFrom: new Date().toISOString(),
  };

  const handleECOMChange = (event) => {
    setState({ ...state, ECOM: event.target.checked });

    if (event.target.checked) {
      unblockECOM(accountHolderId).then((data) => {
        setState({ ...state, ECOM: event.target.checked });
      });
    } else {
      blockECOM(requestData).then(() => {
        setState({ ...state, ECOM: event.target.checked });
      });
    }
  };

  const handleMaxWithdrawalChange = (event) => {
    console.log(event.target.ariaValueNow);

    maxWithdrawalAmount({
      ...requestData,
      dailyLimit: event.target.ariaValueNow,
    }).then((data) => {
      setState({ ...state, maxWithdrawal: event.target.checked });
    });
  };

  return (
    <TransactionPoliciesContainer className="TransactionPoliciesContainer">
      <h5 style={{ fontSize: 25, fontWeight: "bold", fontFamily: "serif" }}>
        Transaction Policies
      </h5>

      <TransactionPolicy>
        <TransactionPolicyTitle>Enable ECOM</TransactionPolicyTitle>

        <ToggleSwitch
          checked={state.ECOM}
          onChange={(event) => handleECOMChange(event)}
          name="ECOM"
        />
      </TransactionPolicy>

      <TransactionPolicy>
        <TransactionPolicyTitle>Max Withdrawal</TransactionPolicyTitle>

        <MaxWithdrawal
          aria-label="ios slider"
          defaultValue={state.maxWithdrawal}
          valueLabelDisplay="on"
          step={1000}
          max={50000}
          onChange={(event) => handleMaxWithdrawalChange(event)}
        />
      </TransactionPolicy>

      {/* <TransactionPolicy>
        <TransactionPolicyTitle>Time of transactions</TransactionPolicyTitle>
        <TimeOfTransaction />
      </TransactionPolicy>

      <TransactionPolicy>
        <TransactionPolicyTitle>
          Block a specific merchant
        </TransactionPolicyTitle>
        <BlockSpecificMerchant />
      </TransactionPolicy>

      <TransactionPolicy>
        <TransactionPolicyTitle>Max spend at merchant</TransactionPolicyTitle>
        <TimeOfTransaction />
      </TransactionPolicy> */}

    </TransactionPoliciesContainer>
  );
}
