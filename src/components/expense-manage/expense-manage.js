import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllAccountBalance, blockIntervalExpense } from "../../utils/api";
import VirtualCard from "../virtual-card/Virtual-card";
import {
  AccountBalance,
  AccountBalanceAmount,
  AccountBalanceTitle,
  ButtonLink,
  ExpenseManagementHeader,
} from "./expense-manage-style";
import TransactionPolicies from "./Transaction-policies";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { Carousel } from "react-bootstrap";

const splitter = (str) => str.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");

var pre = 0;
var post = 0;
var maxSlot = false;

if (localStorage.getItem("maxSlot")) {
  maxSlot = true;
  var time = localStorage.getItem("maxSlot").split(" ");
  pre = time[0];
  post = time[1];
}

const ExpenseManage = () => {
  const [balance, setBalance] = useState(-5);
  const [open, setOpen] = useState(false);
  const vertical =  'top';
  const horizontal =  'center';

  //  FIXME: Fetch account holder id from localstorage
  // localStorage.getItem('data');
  const accountHolderId = "73ff54fb-bb78-42c0-a735-7e46a993139a";
  const today = new Date();
  const requestData = {
    accountHolderId,
    expiresAt: new Date(today.setMonth(today.getMonth() + 1)).toISOString(),
    effectiveFrom: new Date().toISOString(),
  };

  useEffect(() => {
    getAllAccountBalance(accountHolderId).then((data) => {
      setBalance(data.balance);
    });
  }, []);

  const blockThisInternalExpenses = () => {
    blockIntervalExpense({
      ...requestData,
      period: `${pre}-${post}`,
    }).then(() => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    });
  };

  return (
    <div>
      <ExpenseManagementHeader className="ExpenseManagementHeader">
        Expense Management
      </ExpenseManagementHeader>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        vertical="top"
        horizontal="center"
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <MuiAlert elevation={6} variant="filled" severity="success">
          This is a success message!
        </MuiAlert>
      </Snackbar>

      <VirtualCard />

      <AccountBalance className="AccountBalance">
        <AccountBalanceTitle className="AccountBalanceTitle">
          Account Balance
        </AccountBalanceTitle>
        <AccountBalanceAmount className="AccountBalanceAmount">
          ₹ {balance >= 0 ? splitter(String(balance)) : "--"}
        </AccountBalanceAmount>
      </AccountBalance>

      {(maxSlot) && (
        <Carousel
          interval="2000"
          indicators={false}
          controls={false}
          style={{ width: "85%", margin: "auto" }}
        >
          <Carousel.Item>
            <div className="carousel_container advisory-two">
              <div style={{ width: "100%" }}>
                <p>We noticed that </p>
                <strong>
                  <h6>Most of your expenses are made between</h6>
                </strong>
                <h4>
                  <i class="far fa-clock"></i> {pre}
                  :00 - {post}:00
                </h4>
                <p
                  className="btn  text-white mt-3"
                  style={{ background: "#6e48aa" }}
                  onClick={(event) => blockThisInternalExpenses(event)}
                >
                  Block your expense <i className="pl-1 fas fa-lock"></i>
                </p>
                <br />
                <small style={{ fontSize: "10px" }}>
                  *Click this to block your card for the above time slot.
                </small>
              </div>
              <br />
            </div>
          </Carousel.Item>
        </Carousel>
      )}

      <TransactionPolicies />

      <ButtonLink className="ButtonLink">
        <Link
          style={{
            color: "white",
            fontSize: "18px",
          }}
          to="/transactions"
        >
          Expense Tracker <i className="fas fa-coins"></i>
        </Link>
      </ButtonLink>
    </div>
  );
};

export default ExpenseManage;
