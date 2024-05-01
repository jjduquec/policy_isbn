const axios = require('axios'); 


function getAll(){


    axios.get('http://localhost:3001/policies/api/v1/policies')
    .then(function(response){
        var formated_data=[];
        const data = response.data.policies  
        /* {customerId:'510-558-2282',Status:'Cancelled',StartDate:'25/01/24',EndDate:'25/01/25'}*/
        data.map((element)=>{
            formated_data.push(
                {customerId:element.customerId,
                    Status:element.status,
                    StartDate:element.product.periodCoverage.startDate
                    ,EndDate:element.product.periodCoverage.endDate}

            );
       
        })

        return formated_data;
    
    
    
    
    
    
    })
    .catch(function(error){

        console.log(error)
        return [];

    })











}