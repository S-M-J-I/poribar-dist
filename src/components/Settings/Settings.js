import React from 'react'
import '../../styles/Settings.css'
function Settings() {
    return (
        <div className='settings w-100 d-flex justify-content-center align-items-center'>
            <div className='settings-container'>
                <div className='d-flex justify-content-left align-items-center'>
                <h2>Settings</h2>
                </div>
                <div className='avatar d-flex justify-content-left align-items-center'>
                    <div className='avatar-image'>
                        <p>Avatar</p>
                        <img className='avatar-pic'src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />
                    </div>
                    <div className='avatar-buttons d-flex'>
                        <button className='btn btn-success'>Upload</button>
                        <button className='btn btn-danger'>Delete</button>
                    </div>
                </div>
                <div className='row d-flex align-items-center'>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Display Name</h6>
                            <p>Visible to other members</p>
                        </div>
                        <div className='row-input'>
                            <input type='text' placeholder='Enter your name' />
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Username</h6>
                            <p>What will be your unique name?</p>
                        </div>
                        <div className='row-input'>
                            <input className='row-input' type='text' placeholder='Enter your username' />
                        </div>
                    </div>
                </div>
                <div className='row d-flex align-items-center'>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Email Address</h6>
                            <p>For notification and logging in</p>
                        </div>
                        <div className='row-input'>
                            <input type='text' placeholder='james@poribar.com' />
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Phone number</h6>
                            <p>For receiving notification</p>
                        </div>
                        <div className='row-input'>
                            <input type='text' placeholder='+880' />
                        </div>
                    </div>
                </div>
                <div className='row d-flex align-items-center'>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Gender</h6>
                            <p>You know it</p>
                        </div>
                        <div className='row-input'>
                            <input type='text' placeholder='Eg.Male/Female/Other' />
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Blood Group</h6>
                            <p>For helping the nurses</p>
                        </div>
                        <div className='row-input'>
                            <input className='w-100' type='text' placeholder='Eg.O+' />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-success'>Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default Settings