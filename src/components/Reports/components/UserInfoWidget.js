import React from 'react'

function UserInfoWidget(props) {
    return (
        <div className='row'>
            <div className='col-sm'>
                <img style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '300px' }} src={`data:image/jpg;base64,${props.user.avatar}`} alt='userimage' />
                <br />
                <br />
                <h6 style={{ color: 'var(--darkgreen)' }}><strong>Patient</strong></h6>

            </div>
            <div className='col-sm'>
                <div style={{ textAlign: 'left' }} className='container'>
                    <div>
                        <strong style={{ color: 'var(--darkgreen)' }}>Name</strong><br />{props.user.name}
                    </div>
                    <br />
                    <div>
                        <strong style={{ color: 'var(--darkgreen)' }}>Sex</strong><br />
                        {props.user.gender}
                    </div>
                    <br />
                    <div>
                        <strong style={{ color: 'var(--darkgreen)' }}>Blood Group</strong><br />
                        {props.user.blood_group}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfoWidget