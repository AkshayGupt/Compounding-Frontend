import React,{useState} from "react";
import {Redirect} from 'react-router-dom';
const TransactionCard = ({
    id,
    name,
    description,
    cost,
    payment="Cash",
    date,
    isMonster=false
}) => {

const [location,setLocation] = useState("");

 const getLocation = () =>{
     setLocation(location=>{
         return '/transaction/'+id;
     })
 }
 if(location){
     return <Redirect to={location} />
 }

  return (
    <div className="btn btn-block text-left">
      <div class="card mx-auto" style={{"width": "90%"}} onClick={()=>getLocation()}>
        <div class="card-body">
          <h5 class="card-title">{name} 
          {isMonster && <span className="badge badge-light"> <i className="fab fa-optin-monster" style={{color:"#993333"}}></i></span> }
          
          </h5>  
          <div className="d-flex justify-content-between">
                <div>
                    <h6 class="card-subtitle mb-2 text-muted">{payment}</h6>
                    <p class="card-text">
                        {description}
                    </p>
                </div>
                <div>
                    <h5 className="text-success" style={{marginTop:"-20px"}}> {cost}$</h5>
                </div>
          </div>

        
          {/* <a href={getLocation()} class="card-link">
            Show Details
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
