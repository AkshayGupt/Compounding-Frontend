import React , { useState } from "react";
import "./SelectQuest.css"
import { useHistory } from 'react-router-dom';


const SelectQuest = () => {


    const history = useHistory();

    

    return (

        <div className="main-screen">
            <div className="select-quest-header">
                <h5 style={{fontSize:"25px",fontFamily:"fantasy"}}>Select Quest</h5>
            </div>
            <div className="select-quest-body">
                <div className="card">
                    <img src="images/questimages/mutualfund.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:"#F5F8FB"}}>Mutual Fund</h5>
                            <p className="card-text">A mutual fund is an investment vehicle where many investors pool their money to earn returns on their capital over a period.</p>
                            <a href="#" className="btn btn-primary" onClick={()=>{history.push('/detail-quest')}}>Move To Chat</a>
                        </div>
            </div>
                    <div className="card">
                    <img src="images/questimages/fixeddeposit.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"style={{color:"#F5F8FB"}}>Fixed Deposit</h5>
                            <p className="card-text">Fixed deposit allows you to invest your funds for a fixed term and earn returns at a fixed interest rate.</p>
                            <a href="#" className="btn btn-primary" onClick={()=>{history.push('/detail-quest')}}>Move To Chat</a>
                        </div>
                    </div>
                    <div className="card">
                    <img src="images/questimages/invest.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"style={{color:"#F5F8FB"}}>Stock</h5>
                            <p className="card-text">Investing in stocks just means buying tiny shares of ownership in a public company.</p>
                            <a href="#" className="btn btn-primary" onClick={()=>{history.push('/detail-quest')}}>Move To Chat</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}





export default SelectQuest;










