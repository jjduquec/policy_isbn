const axios = require('axios'); 




/*
    axios.get('http://localhost:3001/policies/api/v1/policies')
    .then(function(response){
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

        console.log(formated_data);
    
    
    
    
    
    
    })
    .catch(function(error){

        console.log(error)
        

    })




*/ 


axios.get('http://localhost:3001/policies/api/v1/da330621-7678-4cae-bc07-f3fc7128d380/transactions')
    .then(function(response){
        var formated_data=[]
        const data=response.data; 
        /* Require: 
        Transaction ID
        Operation Type 
        Process Date (Modify the string)
        Status         
        */
       
       formated_data.push(data.transactionId)
       formated_data.push(data.operationType)
       let temp_date=data.processDate  
       formated_data.push(temp_date.slice(0,temp_date.indexOf('T')))
       formated_data.push(data.status) 

       console.log(formated_data)
        


    }
    )
    .catch(function(error){


        console.log(error)
    })






