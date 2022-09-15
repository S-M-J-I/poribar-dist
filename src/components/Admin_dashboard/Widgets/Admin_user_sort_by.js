import React from 'react'

function Admin_user_sort_by() {
    return (
        <div className='sort_by_popup'>
            <div>
                <h5>Sort By</h5>
            </div>
            <div className='sort_item'>
                <input type='radio' name='sort_by' id='sort_by_name' />
                <label htmlFor='sort_by_name'>Name</label>
            </div>
            <div className='sort_item'>
                <input type='radio' name='sort_by' id='sort_by_email' />
                <label htmlFor='sort_by_email'>Email</label>
            </div>
            <div className='sort_item'>
                <input type='radio' name='sort_by' id='sort_by_phone' />
                <label htmlFor='sort_by_phone'>Phone</label>
            </div>
            <div className='sort_item'>
                <input type='radio' name='sort_by' id='sort_by_date' />
                <label htmlFor='sort_by_date'>Date</label>
            </div>

        </div>
    )
}

export default Admin_user_sort_by