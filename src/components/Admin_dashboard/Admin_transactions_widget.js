import React from 'react'
import Transaction from './Admin_transaction_components/Transaction'
import * as Fa from 'react-icons/fa'
function Admin_transactions_widget() {
    return (
        <div className='admin-user-widget' >
            <div className='admin-user-widget__header'>
                <h3>Transactions</h3>
                <Fa.FaEllipsisH />
            </div>
            <div className='admin-user-widget__body' >
                <div className='admin-user-widget__body__item'>
                    <Transaction transaction={{from:'latin',to:'jishan',amount:500,date:'20/03/2022'}}/>
                    <Transaction transaction={{from:'latin',to:'jishan',amount:500,date:'20/03/2022'}}/>
                    <Transaction transaction={{from:'latin',to:'jishan',amount:500,date:'20/03/2022'}}/>
                    <Transaction transaction={{from:'latin',to:'jishan',amount:500,date:'20/03/2022'}}/>
                    <Transaction transaction={{from:'latin',to:'jishan',amount:500,date:'20/03/2022'}}/>
                    <Transaction transaction={{from:'latin',to:'jishan',amount:500,date:'20/03/2022'}}/>
                </div>
                
            </div>
            <div className='admin-user-widget__body__heading d-flex justify-content-between'>
                    <div className='admin-user-widget__body__heading__item'>
                        <h4>User Activity</h4>
                        <h5>Total Users</h5>
                    </div>
                    <div className='admin-user-widget__body__heading__item'>
                        <br></br>
                        <h4>10000</h4>
                    </div>
                </div>
        </div>
    )
}

export default Admin_transactions_widget