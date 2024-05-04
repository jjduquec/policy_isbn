import { useState,useEffect } from "react";
import Transaction from './transaction.js';
import axios from 'axios';
function Transactions({selectedPolicy}){
    const[transactions,setTransactions]=useState([]);
    const[show_retrieved,setRetrieved]=useState(false)


    useEffect(()=>{

        if(selectedPolicy!=''){
            //retrieve API information
            var connection='http://34.28.203.114/policies/api/v1/'+selectedPolicy+'/transactions'; 
            
            axios.get(connection)
                .then((response)=>{
                        setTransactions([]);
                        const transactions=response.data.transactions;
                        var formated_data=[];
                        transactions.map((transaction)=>{
                            //creating transaction objects
                            let temp_date=transaction.processDate
                            formated_data.push( {
                            id:transaction.transactionId,
                            type:transaction.operationType,
                            date:temp_date.slice(0,temp_date.indexOf('T')),
                            status:transaction.status}
                            );
                             


                        });
                        //data formatted and ready to display 
                        setTransactions(formated_data); 
                        setRetrieved(true);



                })
            
        }




    },[selectedPolicy]);
        
    
    if(show_retrieved){
        //call transaction component
        return(
            <tbody>
                {
                    transactions.map(
                        (transaction)=>(
                            <Transaction key={transaction.id} transaction={transaction} />
                        )




                    )






                }
            </tbody>
        );
    }
    else{
        //return empty
        return(
            <tbody>
                <tr>
                </tr>
            </tbody>
    
    
    
        );
    }

    


    

}



export default Transactions; 