import React, { useState, useEffect } from "react";
import Monsters from "./Monsters";
import "./styles.css";
import icon1 from "../../monster_icons/1.png";
import icon2 from "../../monster_icons/2.png";
import icon3 from "../../monster_icons/3.png";
// import icon4 from '../../monster_icons/4.png';

const TransactionView = ({
  id = "",
  name = "Shopping",
  description = "This is a payment done on amazon.com",
  cost = "0",
  date = "07/12/21",
  payment = "Amazon",
  isMonster = false,
  monsterId = -1,
  setTransaction,
  handleClose,
}) => {
  if(localStorage.getItem("lia") == null){
    localStorage.setItem("lia",0);
    console.log("__",localStorage.getItem("lia"));
  }
  console.log("Lia",localStorage.getItem("lia"));
  console.log("Risk",localStorage.getItem("risk"));
  console.log("Ignorance",localStorage.getItem("ignorance"));
  const monsters = [
    {
      icon: icon1,
      id: 0,
      subtext: "Ignorance",
    },
    {
      icon: icon2,
      id: 1,
      subtext: "Liability",
    },
    {
      icon: icon3,
      id: 2,
      subtext: "Risk",
    },
  ];

  useEffect(() => {
    setForm({ name, cost, date, payment, description, isMonster, monsterId });
  }, []);

  const [monster, setMonster] = useState(monsterId);
  const [form, setForm] = useState({
    name: "",
    cost: "",
    date: "",
    payment: "",
    description: "",
    isMonster: "",
    monsterId: "",
  });

  const selectMonster = (id) => {
    setMonster(id);
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  }

  const updateTransaction = (
    newName,
    newCost,
    newDate,
    newPayment,
    newDescription,
    newIsMonster,
    newMonster
  ) => {
    let newtransaction = {
      id,
      newName,
      newCost,
      newDate,
      newPayment,
      newDescription,
      newIsMonster,
      newMonster,
    };
    const allTransactions = JSON.parse(localStorage.getItem("dataSMS"));
    console.log(newMonster+" "+monsterId);
    if (newMonster != monsterId) {
      console.log(parseFloat(localStorage.getItem("risk"))+ parseFloat(cost.match(/\d+(?:\.\d+)?/g)[0]))
      if (monsterId == 1) {
        //update liability
        localStorage.setItem("lia",parseFloat(localStorage.getItem("lia"))- parseFloat(cost.match(/\d+(?:\.\d+)?/g)[0]));
      }
      if (monsterId == 2) {
        //update risk
        localStorage.setItem("risk",parseFloat(localStorage.getItem("risk"))- parseFloat(cost.match(/\d+(?:\.\d+)?/g)[0]));

      }
      if (monsterId == 0) {
        //update ignorance
        localStorage.setItem("ignorance",parseFloat(localStorage.getItem("ignorance"))- parseFloat(cost.match(/\d+(?:\.\d+)?/g)[0]));

      }
      if (newMonster == 1) {
        // lia
        //update lia
        // lia 
        console.log( parseFloat(newCost.match(/\d+(?:\.\d+)?/g)[0])+" "+typeof( parseFloat(newCost.match(/\d+(?:\.\d+)?/g)[0])))
        console.log("lia++", parseFloat(localStorage.getItem("lia")));
        localStorage.setItem("lia",parseFloat(localStorage.getItem("lia"))+ parseFloat(newCost.match(/\d+(?:\.\d+)?/g)[0]));

      }
      if (newMonster == 2) {
        //update risk
        
        localStorage.setItem("risk",parseFloat(localStorage.getItem("risk"))+ parseFloat(newCost.match(/\d+(?:\.\d+)?/g)[0]));

      }
      if (newMonster == 0) {
        //update ignorance
        localStorage.setItem("ignorance",parseFloat(localStorage.getItem("ignorance"))+ parseFloat(newCost.match(/\d+(?:\.\d+)?/g)[0]));
      }
    }

    let newTransactions = [];
    {
      allTransactions.map((transaction) => {
        if (transaction.id == id) {
          transaction.transactionType = newName;
          transaction.fullBody = newDescription;
          transaction.amount = newCost;
          transaction.date = newDate;
          transaction.isMonster = newIsMonster;
          transaction.monsterId = newMonster;
          transaction.typeCard = newPayment;
          newTransactions.push(transaction);
          if (monster > -1) {
            transaction.isMonster = true;
            transaction.monsterId = monster;
          }
          console.log("Found..");
        } else {
          newTransactions.push(transaction);
        }
      });
    }
    localStorage.setItem("dataSMS", JSON.stringify(newTransactions));
    alert("Updated Successfully");
    handleClose();
  };

  const showForm = () => {
    return (
      <form>
        <div className="row">
          <div className="form-group col-md-12 col-lg-4">
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group col-md-12 col-lg-4">
            <label for="exampleFormControlInput1">Cost</label>
            <input
              type="text"
              className="form-control"
              name="cost"
              value={form.cost}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-12 col-lg-4">
            <label for="exampleFormControlInput1">Date</label>
            <input
              disabled
              type="text"
              className="form-control"
              value={form.date}
            />
          </div>
        </div>
        {/* <div className="form-group">
          <label for="exampleFormControlInput1">Payment Gateway</label>
          <input
            type="text"
            className="form-control"
            name="payment"
            value={form.payment}
            onChange={handleChange}
          />
        </div> */}
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            onChange={handleChange}
          >
            {description}
          </textarea>
        </div>
        <div className="text-center" onChange={handleChange}>
          <p
            className="btn btn-sm btn-success mx-1"
            onClick={() =>
              updateTransaction(
                form.name,
                form.cost,
                form.date,
                form.payment,
                form.description,
                (monster>-1),
                monster
              )
            }
          >
            {" "}
            <span class="">Update</span> <i class="fas fa-pencil-alt"></i>
          </p>
          {/* <p className="btn btn-sm btn-danger mx-1"> <span class="btn-text">Delete</span> <i class="fas fa-trash"></i></p> */}
        </div>
      </form>
    );
  };

  const showMonster = () => {
    if (monster >= 0) {
      return (
        <img
          src={monsters[monster].icon}
          alt="monster"
          height="50px"
          width="auto"
        />
      );
    }
  };
  const showMonsterIfPresent = () => {
    console.log(monsterId);
    if (monsterId >= 0 && monster < 0) {
      return (
        <img
          src={monsters[monsterId].icon}
          alt="monster"
          height="50px"
          width="auto"
        />
      );
    }
  };

  return (
    <div className="container p-3">
      <div className="row">
        <div
          className="col-12 my-auto monster-section mb-5"
          style={{ height: "100%" }}
        >
          <h4 className="text-center">Select a monster</h4>
          <div style={{ width: "400px", maxWidth: "70vw", margin: "auto" }}>
            <Monsters monsters={monsters} selectMonster={selectMonster} />
          </div>
          <br />
        </div>
        <div className="col-12">
          <div
            className="card mx-auto shadow-sm p-1 mb-5 bg-white rounded"
            style={{ maxWidth: "90%", width: "800px" }}
          >
            <div className="card-body">
              {/* <small onClick={()=>setTransaction(false)}> close </small> */}
              <h3 className="text-center"> {showMonsterIfPresent()}</h3>
              <h3 className="text-center"> {showMonster()}</h3>
              <div style={{ width: "70%" }} className="mx-auto mt-2">
                {showForm()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TransactionView;
