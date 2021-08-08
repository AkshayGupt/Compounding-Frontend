import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  const user = {
    username: "Clark Walters",
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard__header">
        <div className="dropdown">
          <button
            class="btn btn-secondary"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="dropdown-button-span">{user.username[0]}</span>
            {user.username}
          </button>
          {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/">
              Action
            </a>
            <a className="dropdown-item" href="/">
              Another action
            </a>
            <a className="dropdown-item" href="/">
              Something else here
            </a>
          </div> */}
        </div>
        <div className="search-icon">
          <i class="fa fa-search"></i>
        </div>
        <div className="net-worth">
          <div class="net-worth-head">
            <h5>My Net Worth</h5>
          </div>
          <div className="net-worth-amount">$50,000</div>
          <div className="net-worth-date">
            <h6>Last Updated : Aug 6, 2021</h6>
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
            <a href="/" class="btn btn-primary">
              Refer your friends
            </a>
          </div>
        </div>
        <div className="card dashboard__card card2">
          <div>
            My Total Investments &nbsp;&nbsp;
            <i class="fa fa-angle-right menu-icon"></i>
          </div>
          <div className="card2-options">
            <div className="option">
              <div className="option">
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              FD
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
              </div>
              Mutual Funds
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
              </div>
              Stocks
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-suitcase" aria-hidden="true"></i>
              </div>
              EPF
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-money" aria-hidden="true"></i>
              </div>
              Saving A/C
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div className="option">
              <div>
                <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
              </div>
              More
            </div>
          </div>
        </div>
        <div className="card dashboard__card card3">
          <div>
            My Insurances &nbsp;&nbsp;
            <i class="fa fa-angle-right menu-icon"></i>
          </div>
          <div className="card3-options">
            <div className="card3option">
              <div>
                <i class="fa fa-shield" aria-hidden="true"></i>
              </div>
              Life
            </div>
            <div className="card3option">
              <div>
                <i class="fa fa-heartbeat" aria-hidden="true"></i>
              </div>
              Health
            </div>
          </div>
        </div>

        <div className="card dashboard__card card2">
          <div>
            Fetch my credit score &nbsp;&nbsp;
            <i class="fa fa-angle-right menu-icon"></i>
          </div>
          <div className="card2-options">
            <div className="option">
              <div className="option">
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              Expenses
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div className="option">
              <div className="option">
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              Loans
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
            <div className="option">
              <div className="option">
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              Credit Cards
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="card dashboard__card">
          <h3 className="card-sub-heading">
            Plan your financial goals and see how soon you can retire
          </h3>
          <img className="image" src="images/images.svg" alt="test" />
        </div>
        <div className="card dashboard__card">
          <img
            className="recommented-offer"
            src="images/dashboard/1.png"
            alt="test"
          />
        </div>
        <div className="card dashboard__card">
          <img
            className="recommented-offer"
            src="images/dashboard/2.png"
            alt="test"
          />
        </div>
        <div className="card dashboard__card">
          <img
            className="recommented-offer"
            src="images/dashboard/3.png"
            alt="test"
          />
        </div>
        <div className="card dashboard__card">
          <img
            className="recommented-offer"
            src="images/dashboard/4.png"
            alt="test"
          />
        </div>
        <div className="card dashboard__card">
          <img
            className="recommented-offer"
            src="images/dashboard/5.png"
            alt="test"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
