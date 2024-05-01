import './index.css'
function Policy ({data_policy}){


    

    return(

        <div class="card " style={{width: "18rem"}}>
            <div class="card-body">
            <h5 class="card-title">Customer ID: {data_policy.customerId} </h5>
            <p class="card-text" >Status: {data_policy.Status}</p>
            <p class="card-text">Start Date : {data_policy.StartDate}</p>
            <p class="card-text">End Date : {data_policy.EndDate}</p>
            
            </div>
        </div>

    );


    


}

export default Policy;