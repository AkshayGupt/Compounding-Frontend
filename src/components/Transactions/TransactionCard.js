import React,{useState} from "react";
import {Redirect} from 'react-router-dom';
import icon1 from '../../monster_icons/1.png';
import icon2 from '../../monster_icons/2.png';
import icon3 from '../../monster_icons/3.png';
import TransactionView from "./TransactionView";
const TransactionCard = ({
    id,
    name,
    description,
    cost,
    payment="Cash",
    date,
    isMonster=false,
    monsterId=-1,
    openTransaction
}) => {

const [location,setLocation] = useState("");
const [transaction, setTransaction] = useState(false);


  const getLocation = () =>{
      //  localStorage.setItem("currentTransaction",JSON.stringify(obj));
      setTransaction(true);
      setLocation(location=>{
          return '/transaction/'+id;
      })
  }

  const handleClose = ()=>{
    window.location.reload();
  }
  
  const monsters = [
    {
      icon:icon1,
      id:0,
      subtext:"Ignorance"
    },
    {
      icon:icon2,
      id:1,
      subtext:"Liability"
    },
    {
      icon:icon3,
      id:2,
      subtext:"Risk"
    },
  ];

  if(transaction)
  {
    // openTransaction({id, name, description, cost, date, isMonster, monsterId, payment})
    return <div className="card shadow-lg" style={{width:"95%",margin:"auto"}}>
      <h6 style={{width:"fit-content"}} className="p-3" onClick={()=>handleClose()}>Close <i class="far fa-times-circle"></i></h6>
      <TransactionView
      id={id}
      name={name}
      description={description}
      cost={cost}
      date={date}
      isMonster={isMonster}
      payment={payment}
      monsterId={monsterId}
      setTransaction={setTransaction}
      handleClose={handleClose}
    />
      </div>
  }
 else
  return (
    <>
    <div className="text-left">
      <div class="card mx-auto" style={{"width": "90%"}} onClick={()=>getLocation()}>
        <div class="card-body">
          <h6 class="card-title">{name} 
            {isMonster && <span className="badge badge-light"> <img src={monsters[monsterId].icon} alt="monster" height="30px" width="auto"/></span> }
            {isMonster && <span style={{float:"right"}} className=" mt-2 badge badge-info">{monsters[monsterId].subtext}</span>}
          </h6>  
          <div className="d-flex justify-content-between">
                <small className="card-subtitle  text-muted" style={{marginTop:"-15px"}}>{payment}</small>
                <h5 className="text-success" style={{marginTop:"-20px"}}> {cost}</h5>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};



export default TransactionCard;
