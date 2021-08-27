import React, { useState } from "react";
import "./dashboard.css";
import SimpleDialog from "./dialog";
import DistributedTreeMap from "../asset-allocation/distributed-tree-map";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const splitter = (str) => str.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");

const Dashboard = () => {
  const username = JSON.parse(localStorage.getItem("name"))?.value || "";
  const [currentBalance, setCurrentBalance] = useState({
    fd: 0,
    mutualFund: 0,
    stocks: 0,
    epf: 0,
    savingAccount: 0,
    life: 0,
    health: 0,
    loans: 0,
    creditCards: 0,
    expenses: 0,
  });

  const calculateNetWorth = (obj) => Object.values(obj).reduce((a, b) => a + b);

  const [open, setOpen] = React.useState(false);
  const [total, setTotal] = React.useState(calculateNetWorth(currentBalance));
  const [date, setDate] = React.useState(new Date().toString().slice(4, 15));
  const [propertyName, setPropertyName] = React.useState("");

  const handleClickOpen = (name) => {
    setOpen(true);
    setPropertyName(name);
  };

  const handleClose = (value) => {
    setOpen(false);
    const updatedValue = {
      ...currentBalance,
      [propertyName]: currentBalance[propertyName] + value,
    };
    setCurrentBalance(updatedValue);
    setTotal(calculateNetWorth(updatedValue));
    setDate(new Date().toString().slice(4, 15));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard__header ">
 
        <div className="net-worth mt-2">
          <div class="net-worth-head">
            <h5>My Net Worth</h5>
          </div>
          <div className="net-worth-amount">₹ {splitter(String(total))}</div>
          <div className="net-worth-date">
            <h6>Last Updated : {date}</h6>
          </div>
        </div>
      </div>
      <div className="dashboard__content">
        <div className="card dashboard__card card1">
          <div className="card-body">
            <h6 className="card-title">Buy Bitcoin with your freedom coins</h6>
            <div>
              <img
                className="card-img-top"
                src="/images/bitcoin-logo.png"
                alt="card dashboard__card cap"
              />
            </div>
            <div className="mt-2">
            <a href="/" className="btn btn-sm p-2  btn-primary">
              Refer your friends
            </a>
            </div>
          </div>
        </div>
        <div className="card dashboard__card card2">
          <div>
            My Total Investments &nbsp;&nbsp;
            <i class="fa fa-angle-right menu-icon"></i>
          </div>
          <div className="card2-options">
            <div className="option">
              <div>
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              <span>FD</span>
              <strong> ₹ {currentBalance.fd}</strong>
              <i
                onClick={() => handleClickOpen("fd")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
              </div>
              <span>Mutual Funds</span>
              <strong> ₹ {currentBalance.mutualFund}</strong>
              <i
                onClick={() => handleClickOpen("mutualFund")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
              </div>
              <span>Stocks</span>
              <strong> ₹ {currentBalance.stocks}</strong>
              <i
                onClick={() => handleClickOpen("stocks")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-suitcase" aria-hidden="true"></i>
              </div>
              <span>EPF</span>
              <strong> ₹ {currentBalance.epf}</strong>
              <i
                onClick={() => handleClickOpen("epf")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-money" aria-hidden="true"></i>
              </div>
              <span>Saving A/C</span>
              <strong> ₹ {currentBalance.savingAccount}</strong>
              <i
                onClick={() => handleClickOpen("savingAccount")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
              </div>
              More
            </div>
          </div>
        </div>
        <div
          className="card dashboard__card card3"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <div>
            My Insurances &nbsp;&nbsp;
            <i class="fa fa-angle-right menu-icon"></i>
          </div>
          <div className="card3-options">
            <div className="card3option">
              <div>
                <i class="fa fa-shield" aria-hidden="true"></i>
              </div>
              <span>Life</span>
              <strong> ₹ {currentBalance.life}</strong>
              <i
                onClick={() => handleClickOpen("life")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
            <div className="card3option">
              <div>
                <i class="fa fa-heartbeat" aria-hidden="true"></i>
              </div>
              <span>Health</span>
              <strong> ₹ {currentBalance.health}</strong>
              <i
                onClick={() => handleClickOpen("health")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>

        <div
          className="card dashboard__card card2"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <div>
            Fetch my credit score &nbsp;&nbsp;
            <i class="fa fa-angle-right menu-icon"></i>
          </div>
          <div className="card2-options">
            <div className="option">
              <div className="option">
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              <span>Expenses</span>
              <strong> ₹ {currentBalance.expenses}</strong>
              <i
                onClick={() => handleClickOpen("expenses")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
            <div className="option">
              <div className="option">
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              <span>Loans</span>
              <strong> ₹ {currentBalance.loans}</strong>
              <i
                onClick={() => handleClickOpen("loans")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
            <div className="option">
              <div className="option">
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              <span>Credit Cards</span>
              <strong> ₹ {currentBalance.creditCards}</strong>
              <i
                onClick={() => handleClickOpen("creditCards")}
                class="fa fa-plus-circle"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div
          className="card dashboard__card"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <h3 className="card-sub-heading">
            Plan your financial goals and see how soon you can retire
          </h3>
          <img className="image" src="images/images.svg" alt="test" />
        </div>

        <div
          className="card dashboard__card"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <DistributedTreeMap />
        </div>

        <div
          className="card dashboard__card"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <img
            className="recommented-offer"
            src="images/dashboard/1.png"
            alt="test"
          />
        </div>
        <div
          className="card dashboard__card"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <img
            className="recommented-offer"
            src="images/dashboard/2.png"
            alt="test"
          />
        </div>
        <div
          className="card dashboard__card"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <img
            className="recommented-offer"
            src="images/dashboard/3.png"
            alt="test"
          />
        </div>
        <div
          className="card dashboard__card"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <img
            className="recommented-offer"
            src="images/dashboard/4.png"
            alt="test"
          />
        </div>
        <div
          className="card dashboard__card"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <img
            className="recommented-offer"
            src="images/dashboard/5.png"
            alt="test"
          />
        </div>
      </div>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default Dashboard;
