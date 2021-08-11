import React, { useState, useEffect } from "react";
import TransactionCard from "./TransactionCard";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [check,setCheck] = useState(false);
  const [open, setOpen] = useState();

  const loadTransactions = async () => {
    if(localStorage.getItem("dataSMS")){
      let data = JSON.parse(localStorage.getItem("dataSMS"));
      let id=0;
      let temp = [];
      {
        data.map((transaction) => {
          console.log(transaction);
          temp.push(transaction);
        });
      }
      setTransactions(temp);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  const openTransaction = (obj) =>{
    // console.log(obj)
    setOpen(open=>{
      return obj;
    })
    setCheck(true);
  }

  const showTransactions = () => {
    console.log("Inside t", transactions);
    {
      return (
        transactions &&
        transactions.length > 0 &&
        transactions.map((transaction) => {
          let {
            id,
            senderType,
            fullBody,
            amount,
            date,
            transactionType,
            typeCard,
          } = transaction;
          return (
            <>
              <div key={senderType}>
                <TransactionCard
                  name={transactionType}
                  description={fullBody}
                  id={id}
                  cost={amount}
                  date={date}
                  isMonster={transaction?.isMonster}
                  payment={typeCard}
                  monsterId={transaction?.monsterId}
                  openTransaction={openTransaction}
                />
              </div>
            </>
          );
        })
      );
    }
  };
  if (transactions.length === 0) {
    return (
      <div style={{ height: "100%", overflowY: "scroll", overflowX: "hidden" }}>
      <div className="row">
        <div className="transaction_header">
          <h4 className="text-center mt-5 text-white">
            Transaction Receipts
          </h4>
        </div>
       <h6 className="text-center mt-5">No Transactions found.</h6>
      </div>
    </div>
    )
  }
  else
    return (
      <div style={{ height: "100%", overflowY: "scroll", overflowX: "hidden" }}>
        <div className="row">
          <div className="transaction_header">
            <h4 className="text-center mt-5 text-white">
              Transaction Receipts
            </h4>
          </div>
          <div className="my-4" style={{ paddingBottom: "100px" }}>
            {showTransactions()}
          </div>
        </div>
      </div>
    );
};

export default Transactions;
