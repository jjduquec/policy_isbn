import React, { useState, useEffect } from "react";
import './App.css';
import './bootstrap/css/bootstrap.css';
import Policy from './Components/policy/policy.js';
//import Details from './Components/policy_details/policy_details.js'
import Transactions from './Components/transaction_list/transactions.js';
import axios from 'axios';




function App() {

  const[policies_list,setList]=useState([])
  const[selectedPolicy,setSelected]=useState('')
  

  function PolicyClicked(policyId){
    setSelected(policyId)
  }



  useEffect(()=>{
    axios({
      url: "http://34.28.203.114/policies/api/v1/policies",
    })
      .then((response) => {
        var formated_data=[];
        const data = response.data.policies 

        data.map((element)=>{
          formated_data.push(
              {customerId:element.customerId,
                policyId:element.policyId,
                  Status:element.status,
                  StartDate:element.product.periodCoverage.startDate
                  ,EndDate:element.product.periodCoverage.endDate}

          );
     
        })
        setList(formated_data);
      })
      .catch((error) => {
        
        console.log(error);
      },[]);

  });


  /*delete this before update main */  

 



 
  return ( 
    
    <div class="row justify-content-start"> 
    
      <div class="col col-6 col-md-4" >
          
                
                {policies_list.map((temp_policy)=>(
                    <Policy key={temp_policy.customerId} data_policy={temp_policy} PolicyClicked={PolicyClicked} />

                    ))  
          
          
                }
            
        </div>
        <div class="col col-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Transaction Id</th>
                <th scope="col">Operation Type</th>
                <th scope="col">Process Date</th>
                <th scope="col">Transaction Status</th>
              </tr>
            </thead>
            
            <Transactions selectedPolicy={selectedPolicy} />
          </table>
        </div>
      
    </div>

    
    
      
        
       
      
  
  
  
  );
}

export default App;
