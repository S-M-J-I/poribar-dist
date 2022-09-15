import React from 'react'

function AppointmentComponent(props) {
    return (
        <div className='container component'>
            <div className='app-row'>
                <div className='row'>
                    <div className='col-sm-3' style={{ textAlign: 'left', color: 'var(--darkgreen)' }}>
                        <h4>{props.name}</h4>
                    </div>
                    <div className='col-sm-9' style={{ textAlign: 'left' }}>
                        <p>{props.date}</p>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-sm' style={{ textAlign: 'left' }}>
                        <h6>{props.address}</h6>
                    </div>
                    <div className='col-sm-9' style={{ textAlign: 'right' }}>
                        <h6 style={{ color: 'var(--darkgreen)' }}>{props.review} stars</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentComponent