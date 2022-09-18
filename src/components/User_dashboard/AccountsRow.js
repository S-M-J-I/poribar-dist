import React from 'react'
import { useEffect } from 'react'

function AccountsRow(props) {
    const [balance, setBalance] = React.useState(0)
    console.log(props.user)
    useEffect(() => {
        if(props.user){
            fetch(`http://localhost:3030/api/auth/nurse/profile/${props.user.uid}`, {
                method: 'post',
                mode: 'cors'
            }).then(res => res.json())
            .then(data => {
                setBalance(data.balance)
            })
            .catch(err => {
                alert(err)
            })
        }
    }, [])

    return (
        <div className='container' style={{ textAlign: 'left', marginTop: '5%', marginBottom: '5%' }}>
            <h2 style={{ color: 'var(--darkgreen)' }}>My Balance</h2>
            <br />
            <div className='row'>
                <div className='col-sm-4'>
                    <h5>Earnings: <strong style={{ color: 'var(--darkgreen)' }}>{balance} BDT</strong></h5>
                </div>
            </div>
        </div>
    )
}

export default AccountsRow