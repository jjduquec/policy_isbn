if(selectedPolicy===''){
    content=''
}else{
    content=<td></td>
    //retrieving transactions from API         
    console.log("before to request content") 
    
        let connection='http://localhost:3001/policies/api/v1/'+selectedPolicy+'/transactions'
        axios.get(connection)
        .then(function(response){
            console.log("processing incoming data")
            const data = response.data
            
            let temp_date=data.processDate;
            let temporal_details={
                transactionId:data.transactionId,
                operationType:data.operationType, 
                processDate:temp_date.slice(0,temp_date.indexOf('T')), 
                status:data.status
    
    
    
            }
            
            setDetails(temporal_details)
            
        
        
        })
        .catch(function(error){
    
            console.log(error)
            return {};
            
    
        })

        console.log(details)
    

    
}