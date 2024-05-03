
function Transaction({transaction}){

    return(
        <tr>
            <td>{transaction.id}</td>
            <td>{transaction.type}</td>
            <td>{transaction.date}</td>
            <td>{transaction.status}</td>
        </tr>




    );  



}


export default Transaction;