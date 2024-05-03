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


/*
  useEffect(()=>{
    axios({
      url: "http://localhost:3001/policies/api/v1/policies",
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
      },[setList]);

  });
  */

  /*delete this before update main */  

 

  let policies=[
    {customerId:'510-558-2282',policyId:'da330621-7678-4cae-bc07-f3fc7128d380',Status:'Cancelled',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2283',policyId:'da330621-7678-4cae-bc07-f3fc7128d381',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2284',policyId:'da330621-7678-4cae-bc07-f3fc7128d382',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2285',policyId:'da330621-7678-4cae-bc07-f3fc7128d383',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'}
  ]


 
  return ( 
    
    <div class="row justify-content-start"> 
    
      <div class="col col-6 col-md-4" >
          
                
                {policies.map((temp_policy)=>(
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
                <th scope="col">Status</th>
              </tr>
            </thead>
            
            <Transactions selectedPolicy={selectedPolicy} />
          </table>
        </div>
      
    </div>

    
    
      
        
       
      
  
  
  
  );
}

export default App;
