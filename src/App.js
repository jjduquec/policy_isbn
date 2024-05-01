import React, { useState, useEffect } from "react";
import './App.css';
import './bootstrap/css/bootstrap.css';
import Policy from './Components/policy/index.js';
import axios from 'axios';




function App() {

  const[policies_list,setList]=useState([])

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
  //let policies_list=[{customerId:'510-558-2282',Status:'Cancelled',StartDate:'25/01/24',EndDate:'25/01/25'}];

 
  return ( 
    
    <div class="row"> 
     <div class="col col-6 col-md-4" >
        
              {console.log(policies_list.length)}
              {policies_list.map((temp_policy)=>(
                  <Policy key={temp_policy.customerId} data_policy={temp_policy}/>

                  ))  
        
        
              }
          
      </div>
    <div class="col col-sm-6 col-md-8">
      Second Column
    </div>
  </div>

    
    
      
        
       
      
  
  
  
  );
}

export default App;
