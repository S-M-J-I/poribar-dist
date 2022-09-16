import React from 'react'

function AccountsRow(props) {
    return (
        <div className='container' style={{ textAlign: 'left', marginTop: '5%', marginBottom: '5%' }}>
            <h2 style={{ color: 'var(--darkgreen)' }}>My Balance</h2>
            <br />
            <div className='row'>
                <div className='col-sm-4'>
                    <h5>Earnings: <strong style={{ color: 'var(--darkgreen)' }}>{props.balance} BDT</strong></h5>
                </div>
                <div className='col-sm-4'>
                    Paypal, Apple Pay
                </div>
            </div>
        </div>
    )
}

export default AccountsRow