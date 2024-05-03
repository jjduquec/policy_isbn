const axios = require('axios')
function collect_data(){

    var collect =[]
    var connection='http://localhost:3001/policies/api/v1/da330621-7678-4cae-bc07-f3fc7128d380/transactions'
    
    axios.get(connection)
        .then((response)=>{
            return response.data
            /*
            let temp_date=data.processDate
            let transaction = {
                transactionId:data.transactionId,
                date:temp_date.slice(0,temp_date.indexOf('T')),
                status:data.status

            }

            collect.push(transaction)
            */






        })
        .catch((error)=>{
            console.log("something went wrong")
            return {}
            



        })

}

console.log(collect_data())

