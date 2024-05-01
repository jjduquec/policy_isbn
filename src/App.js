import React, { useState, useEffect } from "react";
import './App.css';
import './bootstrap/css/bootstrap.css';
import Policy from './Components/policy/index.js';
import axios from 'axios';




function App() {

  const[policies_list,setList]=useState([])
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
    {customerId:'510-558-2282',Status:'Cancelled',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2283',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2284',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2285',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'}
  ]


 
  return ( 
    
    <div class="row justify-content-start"> 
      <div class="col col-6 col-md-4" >
          
                
                {policies.map((temp_policy)=>(
                    <Policy key={temp_policy.customerId} data_policy={temp_policy}/>

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
            <tbody>
              <tr>
                  <td>8f2e05ef-0e61-4f47-8b0b-157fea83e7d8</td>
                  <td>ISS</td>
                  <td>2024-04-26</td>
                  <td>ACTIVE</td>
              </tr>

            </tbody>
          </table>
        </div>
      
    </div>

    
    
      
        
       
      
  
  
  
  );
}

export default App;
