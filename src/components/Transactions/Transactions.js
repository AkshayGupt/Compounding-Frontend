import React,{useState} from 'react'
import TransactionCard from './TransactionCard'
const Transactions = ()  => {

    const [transactions, setTransactions] = useState([
        {
            id:"asd213133wqdasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133wqdasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133wqdasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133wqdasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133wqdasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133wqdasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133wqdasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133wqdasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133wqdasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133aasdsawqdasdasdad",
            name:"Study",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21",
            isMonster:true  
        },
        {
            id:"asd213133qwewqewqdasdasdad",
            name:"School",
            payment:"Amazon",
            cost:"733",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21"   
        },
        {
            id:"asd213133wqzxc3131dasdasdad",
            name:"Shopping",
            payment:"Amazon",
            cost:"712333",
            description:"This is a payment done in amazon.com ",
            date:"14/07/21" ,
            isMonster:true  
        }
    ])

    const showTransactions =
    transactions &&
    transactions.length > 0 &&
    transactions.map((transaction) => {
      let { id, description, cost, date, name } = transaction;
      return (
        <div  key={id}>
          <TransactionCard
            name={name}
            description={description}
            id={id}
            cost={cost}
            date={date}
            isMonster={transaction?.isMonster}
          />
        </div>
      );
    });

    return (
            <div style={{height:"100%",overflowY:"scroll",overflowX:"hidden"}}>
                <div className="row">
                <div className="transaction_header">
                    <h4 className="text-center mt-5 text-white">Transaction Receipts</h4>
                </div>
                <div className="my-4" style={{paddingBottom:"100px"}}>
                {showTransactions}

                </div>
                </div>
            </div>
    )
}

export default Transactions
