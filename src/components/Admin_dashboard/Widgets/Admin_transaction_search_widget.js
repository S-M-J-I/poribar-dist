import React from 'react'
import * as Fa from 'react-icons/fa'
function Admin_transaction_search_widget(props) {
    const [showOptions, setShowOptions] = React.useState(false)
    const [edit, setEdit] = React.useState(false)
    return (
        <tr className='table-light table_rows'>
            {showOptions?
            <><td><input placeholder="Name"  ></input></td>
            <td><input placeholder="Name"   /></td>
            <td><input placeholder="Name"   /></td>
            <td><input placeholder="Name"   /></td>
            <td><input placeholder="Name"   /></td></>
            :<>
            <td><input placeholder="Name" value={props.user.id} readOnly /></td>
            <td><input placeholder="Name" value={props.user.from} readOnly /></td>
            <td><input placeholder="Name" value={props.user.to} readOnly /></td>
            <td><input placeholder="Name" value={props.user.date} readOnly /></td>
            <td><input placeholder="Name" value={props.user.amount} readOnly /></td>
            </>}
            {/* <td><button className='admin_user_search__body__table__profile_btn btn btn-primary'>Profile</button></td> */}
            <td><div className='d-flex align-items-center justify-content-center'><div className='d-flex align-items-center justify-content-center' onClick={() => setShowOptions(!showOptions)}><Fa.FaCheckSquare /> &nbsp;Edit </div>{showOptions ? <>&nbsp;&nbsp;<Fa.FaTrash color='red' />&nbsp;&nbsp;<Fa.FaCheck color='green' /></> : null}</div></td>
        </tr>
    )
}

export default Admin_transaction_search_widget