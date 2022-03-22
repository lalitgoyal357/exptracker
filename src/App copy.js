import React,{useState} from 'react'
import "./App.css"
import { makeStyles, Typography, Box} from '@material-ui/core'
import Balance from './component/Balance';
import ExpenseCard from './component/ExpensesCard';
import NewTranComp from './component/NewTranComp';
import Transactions from './component/Transactions';
import Header from './Project/Header';







const useStyle=makeStyles({
  header:{
    color: "white",
    margin:"15px 0",
   
    textTransform:"uppercase"
    },
    component:{
      margin: "10px",
      background: "white",
      padding: 10,
      width:800,
      borderRadius:20,
      display:"flex",
      
     
      "& > * ":{
        width:"50%",
        padding: 10,
        height:"80vh"

        
       
      }
    }
});

const App = () => {
const classes=useStyle();
const [transactions, setTransactions] = useState([

  { id: 1, Text: "salary", amount :90000},


]);

const deleteIcon=(id)=>{
setTransactions(transactions.filter(transaction=> transaction.id !== id));

}
const addTransaction=(transaction)=>{
  console.log(transaction)
  setTransactions(transactions=>[transaction, ...transactions]);
}



  return (  
    <div className="App">
    <Typography variant="h4" className={classes.header}> Expense Tracker </Typography>
    <Box  className={classes.component}>
      <Box>
          <Balance transactions={transactions}/>        
         <ExpenseCard transactions={transactions}/>
         <NewTranComp addTransaction={addTransaction}/>
         </Box>
         <Box>
      
         <Transactions transactions={transactions} deleteIcon={deleteIcon}/>
         </Box>
       </Box>
    </div>
  )
}

export default App