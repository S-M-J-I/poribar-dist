import React from 'react'
import * as Fa from 'react-icons/fa'
function Transaction(props) {
  return (
    <div className='admin-transaction d-flex justify-content-between' >
        <div className='admin-transaction_from d-flex'>
            <Fa.FaCheck color='green' size='20px'/>
            <h3>Transaction from&nbsp;</h3>
            <h3 className='data_field'>{props.transaction.from}</h3>
            <h3>&nbsp; to &nbsp;</h3>
            <h3 className='data_field'>{props.transaction.to}</h3>
        </div>

        <div className='admin-transaction_amount d-flex'>
            <h3>Amount: &nbsp;</h3>
            <h3 className='data_field'>{props.transaction.amount}</h3>
        </div>
        <div className='admin-transaction_date d-flex'>
            <h3>Date: &nbsp;</h3>
            <h3 className='data_field'>{props.transaction.date}</h3>
        </div>
    </div>
  )
}

export default Transaction