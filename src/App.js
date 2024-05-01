import logo from './logo.svg';
import './App.css';

import Policy from './Components/policy/index.js';
import './bootstrap/css/bootstrap.css';



function App() {
  let policies_list=[
    {customerId:'510-558-2282',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2283',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2284',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2285',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2286',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'},
    {customerId:'510-558-2287',Status:'Active',StartDate:'25/01/24',EndDate:'25/01/25'}
    
]
  return ( 
    <div class="row"> 
     <div class="col col-6 col-md-4" > 
            {policies_list.map((temp_policy)=>(
                <Policy data_policy={temp_policy}/>

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
