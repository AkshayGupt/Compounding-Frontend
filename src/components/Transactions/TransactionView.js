import React,{useState} from "react";
import Monsters from "./Monsters";
import './styles.css';
import icon1 from '../../monster_icons/1.png';
import icon2 from '../../monster_icons/2.png';
import icon3 from '../../monster_icons/3.png';
import icon4 from '../../monster_icons/4.png';

const TransactionView = ({
  id = "",
  name = "Shopping",
  description = "This is a payment done on amazon.com",
  cost = "123",
  date = "07/12/21",
  payment="Amazon",
  isMonster=false
}) => {

  

  const monsters = [
    {
      icon:icon1,
      id:0
    },
    {
      icon:icon2,
      id:1
    },
    {
      icon:icon3,
      id:2
    },
    {
      icon:icon4,
      id:3
    },

  ]

  const [monster,setMonster] = useState();
  // const [viewMonsterInMobile,setViewMonsterInMobile] = useState(false);

  const selectMonster = (id) =>{
    setMonster(id);
  }

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
          {/* <p onClick={()=>setViewMonsterInMobile(viewMonsterInMobile=> {return !viewMonsterInMobile})} className="btn btn-mobile btn-sm btn-primary mx-1"> <span class="btn-text">select monster</span> <i class="fab fa-optin-monster"></i></p> */}
          <p className="btn btn-sm btn-success mx-1"> <span class="btn-text">Update</span> <i class="fas fa-pencil-alt"></i></p>
          <p className="btn btn-sm btn-danger mx-1"> <span class="btn-text">Delete</span> <i class="fas fa-trash"></i></p>
      </div>
    </form>
    )
  }

  const showMonster = () =>{
    if(monster>=0){
      return <img src={monsters[monster].icon} alt="monster" height="50px" width="auto"/>
    }
  }

  return (
    <div className="container">
        <div className="row">
              <div className="col-md-12 col-lg-7 col-lg-push-5" >
              <div className="card mx-auto mt-5 shadow-lg p-3 mb-5 bg-white rounded" style={{maxWidth:"90%",width:"800px"}}>
                <div className="card-body">
                    <h3 className="text-center">Transaction Details {showMonster()}</h3>
                    <div style={{ width: "70%" }} className="mx-auto mt-5">
                      {showForm()}
                    </div>
                </div>
              </div>
              </div>
              <div className="col-md-12 col-lg-5  col-lg-pull-7 my-auto monster-section " >
                <h4 className="text-center">Choose a monster</h4>
                <Monsters
                  monsters={monsters}
                  selectMonster={selectMonster}
                />
                <br/>
              </div>
        </div>
    </div>
      // </div>
  );
};

export default TransactionView;
