import React from 'react'
import Admin_transaction_search_widget from './Widgets/Admin_transaction_search_widget'
import * as Fa from 'react-icons/fa'
import Admin_user_sort_by from './Widgets/Admin_user_sort_by'
function Admin_transaction_search() {
    const users = [
        {
            id: '1',
            from: 'Rahim',
            to: 'Karim',
            date: '12/12/2020',
            amount: '1000'
        },
        {
            id: '1',
            from: 'Rahim',
            to: 'Karim',
            date: '12/12/2020',
            amount: '1000'
        },
        {
            id: '1',
            from: 'Rahim',
            to: 'Karim',
            date: '12/12/2020',
            amount: '1000'
        },
        {
            id: '1',
            from: 'Rahim',
            to: 'Karim',
            date: '12/12/2020',
            amount: '1000'
        },
        {
            id: '1',
            from: 'Rahim',
            to: 'Karim',
            date: '12/12/2020',
            amount: '1000'
        },

    ]
    const showSortBy = () => {
        document.querySelector('.sort_by_popup').classList.toggle('show')
    }
    return (
        <div className='admin_user_search d-flex'>
            <div className='admin_user_search__center'>
                <div className='admin_user_search__header d-flex align-items-center'>
                    <input className='form-control mr-sm-2' type='search' placeholder='Search for users' />
                    <div className='admin_user_search__header__btns d-flex align-items-center'>
                        <Fa.FaBars color='black' onClick={()=>showSortBy()}/>
                    </div>
                </div>
                <div className='admin_user_search__body'>
                    <table className='admin_user_search__body__table w-100 table table-hover table-dark'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>From</th>
                                <th scope='col'>To</th>
                                <th scope='col'>Date</th>
                                <th scope='col'>Amount</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return <Admin_transaction_search_widget user={user} key={index} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='admin_user_search__right'>
                <Admin_user_sort_by />
            </div>


        </div>
    )
}

export default Admin_transaction_search