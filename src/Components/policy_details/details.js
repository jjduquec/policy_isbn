import './style.css'; 
import axios from 'axios';
import React, {useState,useEffect} from "react"; 
function Details(){
    const[details,setDetails]=useState({});
    let id="8f2e05ef-0e61-4f47-8b0b-157fea83e7d8"
    



    //requesting details information

    useEffect(()=>{

        axios.get('http://localhost:3001/policies/api/v1/'+id+'/transactions')
        .then(function(response){
            
            const data = response.data
            let temp_date=data.processDate;
            let details={
                transactionId:data.transactionId,
                operationType:data.operationType, 
                processDate:temp_date.slice(0,temp_date.indexOf('T')), 
                status:data.status
    
    
    
            }
            
            setDetails(details);
            
            
    
           
        
        
        
        
        
        })
        .catch(function(error){
    
            console.log(error)
            
    
        })
    
    
    
    
    
    
    
    });








    //return details 
    return(
        <tbody>
              <tr>
                  <td>{details.transactionId}</td>
                  <td>{details.operationType}</td>
                  <td>{details.processDate}</td>
                  <td>{details.status}</td>
              </tr>
            </tbody>

    );







}
    

     
    



    








export default Details;