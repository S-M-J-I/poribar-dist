import React from 'react'
import * as Fa from 'react-icons/fa'
function Admin_user_search_widget(props) {
    const [showOptions, setShowOptions] = React.useState(false)
    const [edit, setEdit] = React.useState(false)
    const [name, setName] = React.useState(props.user.name)
    const [email, setEmail] = React.useState(props.user.email)
    const [phone, setPhone] = React.useState(props.user.phone)
    const [type, setType] = React.useState(props.user.type)
    const [deleted, setDeleted] = React.useState(false)
    const tryUpdate = () => {
        const data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('phone', phone)
        data.append('type', type)
        data.append('uid', props.user.uid)
        fetch('http://localhost:3030/api/auth/user/profile/update', {
            method: 'post',
            mode: 'cors',
            body: data
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('User updated successfully')
                    setEdit(false)
                    setShowOptions(false)
                }
            })
            .catch(err => {
                alert(err)
            })
    }
    const deleteUser = () => {
        const data = new FormData()
        data.append('uid', props.user.uid)
        fetch('http://localhost:3030/api/auth/user/profile/remove', {
            method: 'post',
            mode: 'cors',
            body: data
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('User deleted successfully')
                    setEdit(false)
                    setShowOptions(false)
                    setDeleted(true)

                }
            })
            .catch(err => {
                alert(err)
            })
    }

    if (deleted) {
        return null
    }

    return (
        <tr className='table-light table_rows'>
            {showOptions ?
                <>
                    <td><input placeholder="UID" name='uid' ></input></td>
                    <td><input placeholder="Name" name='name' onChange={(e) => setName(e.target.value)} value={name}></input></td>
                    <td><input placeholder="Email" name='email' onChange={(e) => setEmail(e.target.value)} value={email}></input></td>
                    <td><input placeholder="Phone" name='phone' onChange={(e) => setPhone(e.target.value)} value={phone}></input></td>
                    {/* <td><input placeholder="Date"  name='date' /></td> */}
                    <td><input placeholder="Type" name='type' onChange={(e) => setType(e.target.value)} value={type}></input></td>
                </>
                : <>
                    <td><input placeholder="UID" value={props.user.uid} readOnly></input></td>
                    <td><input placeholder="Name" value={name} readOnly /></td>
                    <td><input placeholder="Email" value={email} readOnly /></td>
                    <td><input placeholder="Phone" value={phone} readOnly /></td>
                    {/* <td><input placeholder="Date" value={props.user.date} readOnly /></td> */}
                    <td><input placeholder="Type" value={type} readOnly /></td>
                </>}
            <td><button className='admin_user_search__body__table__profile_btn btn btn-primary'>Profile</button></td>
            <td><div className='d-flex align-items-center justify-content-center'><div className='d-flex align-items-center justify-content-center' onClick={() => setShowOptions(!showOptions)}><Fa.FaCheckSquare /> &nbsp;Edit </div>{showOptions ? <>&nbsp;&nbsp;<Fa.FaTrash color='red' onClick={() => deleteUser()} />&nbsp;&nbsp;<Fa.FaCheck color='green' onClick={() => tryUpdate()} /></> : null}</div></td>
        </tr>
    )
}

export default Admin_user_search_widget