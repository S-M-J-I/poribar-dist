import React from 'react'
import { useEffect } from 'react'
import firebase from '../../firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
function AccountsRow(props) {
    const [balance, setBalance] = React.useState(0)
    console.log(props.user)
    React.useEffect(() => {
        const auth = getAuth(firebase)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                fetch(`http://localhost:3030/api/auth/nurse/profile/${user.uid}`, {
                    method: 'post',
                    mode: 'cors'
                }).then(res => res.json())
                    .then(data => {
                        setBalance(data.balance)
                        console.log(data.balance)
                    })
                    .catch(err => {
                        alert(err)
                    })
            }
        })
    }, [])
    useEffect(() => {
        if (props.user) {

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