import React from "react";
import './styles.css';
const TransactionView = ({
  id = "",
  name = "Shopping",
  description = "This is a payment done on amazon.com",
  cost = "123",
  date = "07/12/21",
  payment="Amazon",
  isMonster=false
}) => {

  const showForm = () =>{
    return(
      <form>
      <div className="row">
        <div class="form-group col-md-12 col-lg-4">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            value={name}
            placeholder="name@example.com"
          />
        </div>
        
        <div class="form-group col-md-12 col-lg-4">
          <label for="exampleFormControlInput1">Cost $</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value={cost}
          />
        </div>
        <div class="form-group col-md-12 col-lg-4">
          <label for="exampleFormControlInput1">Date</label>
          <input
            disabled
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value={date}
          />
        </div>
      </div>
      <div class="form-group">
          <label for="exampleFormControlInput1">Payment Gateway</label>
          <input
            disabled
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value={payment}
          />
        </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        >
          {description}
        </textarea>
      </div>
      <div className="text-center">
          <p className="btn btn-sm btn-primary mx-1"> <span class="btn-text">monster</span> <i class="fab fa-optin-monster"></i></p>
          <p className="btn btn-sm btn-success mx-1"> <span class="btn-text">Update</span> <i class="fas fa-pencil-alt"></i></p>
          <p className="btn btn-sm btn-danger mx-1"> <span class="btn-text">Delete</span> <i class="fas fa-trash"></i></p>
      </div>
    </form>
    )
  }
  return (
    <div className="container">
        <div className="row">
              <div className="col-3">
                <Monsters/>
              </div>
              <div className="col-9">
              <div className="card mx-auto mt-5 shadow-lg p-3 mb-5 bg-white rounded" style={{maxWidth:"90%",width:"800px"}}>
                <div className="card-body">
                    <h3 className="text-center">Transaction Details</h3>
                    <div style={{ width: "70%" }} className="mx-auto mt-5">
                      {showForm()}
                    
                    </div>
                </div>
              </div>
        </div>
    </div>
      </div>
  );
};

export default TransactionView;
