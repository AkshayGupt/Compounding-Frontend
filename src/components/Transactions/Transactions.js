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
        <div className="my-1" md="12  mb-2"  key={id}>
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
        <div className="container mt-5">
            <div className="row">
                <h2 className="text-center jumbotron">All transactions</h2>
               {showTransactions}
            </div>
        </div>
    )
}

export default Transactions
