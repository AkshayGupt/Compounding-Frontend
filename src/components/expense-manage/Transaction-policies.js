import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { TransactionPoliciesContainer } from './expense-manage-style';
import { ToggleSwitch } from './policies/ToggleSwitch';
import { MaxWithdrawal } from './policies/maxWithdrawal';
import TimeOfTransaction from './policies/TimeOfTransaction';

export default function TransactionPolicies() {
    const [state, setState] = React.useState({
        maxWithdrawal: 10000,
        ECOM: true,
        noOfTransactions: 1,
        blockMerchant: '',
        maxSpentOnMerchant: 5000
    });

    const handleECOMChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <TransactionPoliciesContainer className="TransactionPoliciesContainer">

            <h5 style={{ fontSize: 25, fontWeight: "bold", fontFamily: "serif" }}>
                Transaction Policies
            </h5>

            <FormGroup>
                Enable ECOM
                    <ToggleSwitch checked={state.ECOM} onChange={handleECOMChange} name="ECOM" />
                
                <MaxWithdrawal />
                <TimeOfTransaction></TimeOfTransaction>
            </FormGroup>
           
        </TransactionPoliciesContainer>
    );
}

