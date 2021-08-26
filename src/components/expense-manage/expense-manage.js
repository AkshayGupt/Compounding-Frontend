import React from "react";
import { Link } from "react-router-dom";
import VirtualCard from "../virtual-card/Virtual-card";
import {
    AccountBalance,
    AccountBalanceAmount,
    AccountBalanceTitle,
    ButtonLink,
    ExpenseManagementHeader,
    Insights,
} from "./expense-manage-style";
import TransactionPolicies from "./Transaction-policies";

const splitter = (str) => str.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");

const ExpenseManage = () => {
    return (
        <div>
            <ExpenseManagementHeader className="ExpenseManagementHeader">
                Expense Management
            </ExpenseManagementHeader>

            <VirtualCard />

            <AccountBalance className="AccountBalance">
                <AccountBalanceTitle className="AccountBalanceTitle">
                    Account Balance
                </AccountBalanceTitle>
                <AccountBalanceAmount className="AccountBalanceAmount">
                    ₹ {splitter("50000")}
                </AccountBalanceAmount>
            </AccountBalance>

            <ButtonLink className="ButtonLink">
                <Link style={{ color: "white", fontSize: "18px" }} to="/transactions">
                    Expense Tracker <i className="fas fa-coins"></i>
                </Link>
            </ButtonLink>

            <Insights>Insights</Insights>

            <TransactionPolicies />
        </div>
    );
};

export default ExpenseManage;
