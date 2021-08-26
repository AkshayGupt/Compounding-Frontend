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
import { Carousel } from "react-bootstrap";

const splitter = (str) => str.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");

var pre=0;
var post=0;
var maxSlot=false;

if(localStorage.getItem("maxSlot")){
    maxSlot=true;
    var time= localStorage.getItem("maxSlot").split(" ");
    pre=time[0];
    post=time[1];
}

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

      {/* <Insights> */}
      {
        maxSlot && (
            <Carousel interval="2000" indicators={false} controls={false} style={{width:"85%",margin:"auto"}}>
            <Carousel.Item>
              <div className="carousel_container advisory-two">
                <div style={{ width: "100%" }}>
                  <p>We noticed that  </p>
                  <strong>
                    <h6>Most of your expenses are made between</h6>
                  </strong>
                  <h4><i class="far fa-clock"></i> {pre}:00 - {post}:00</h4>
                  <p className="btn  text-white mt-3" style={{background:"#6e48aa"}}>Block your expense <i className="pl-1 fas fa-lock"></i></p>
                  <br/>
                  <small style={{fontSize:"10px"}}>*Click this to block your card for the above time slot.</small>
                </div>
                <br/>
               
                {/* {iconForCarousel} */}
              </div>   
            </Carousel.Item>
          </Carousel>
        )
      }
        
      {/* </Insights> */}

      <TransactionPolicies />
    </div>
  );
};

export default ExpenseManage;
