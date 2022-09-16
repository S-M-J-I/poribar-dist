import React, { useEffect, useState } from 'react'
import { getAuth } from "firebase/auth"
import firebase from '../../firebase/firebase'
import UserInfoWidget from './components/UserInfoWidget'
import ReportsRollWidget from './components/ReportsRollWidget'
import { Spinner } from 'react-bootstrap'

function ReportsDashboard() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [reports, setReports] = useState()

    useEffect(() => {
        let currUser = ''
        try {
            currUser = getAuth(firebase).currentUser.uid
        } catch (err) {
            // console.log(err)
            // window.location = '/'
        }

        if (currUser) {
            fetch(`http://localhost:3030/api/auth/user/profile/${currUser}`, {
                method: 'post',
                mode: 'cors'
            }).then(res => res.json())
                .then((data) => {
                    setUser(data)
                    // console.log(data._id)
                    setLoading(false)
                    fetch(`http://localhost:3030/api/reports/all/${data._id}`, {
                        method: 'post',
                        mode: 'cors'
                    })
                        .then(res => res.json())
                        .then((data) => {
                            setReports(data)
                            // console.log(data)
                        })
                        .catch(err => console.log(err))
                        .catch((err) => {
                            // console.log(err)
                        })
                })
                .catch(err => console.log(err))
                .catch((err) => {
                    // console.log(err)
                })
        } else {
            console.log('no user')
        }
    })

    const loadAddReport = (user) => {
        console.log(user.type)
        if (user.type === 'nurse') {
            return (
                <div style={{ textAlign: 'right' }}>
                    <a href={`/reports/add/${user._id}`} className='btn btn-primary'>+</a>
                </div>
            )
        }
    }

    const load = (user) => {
        // console.log(user.type)
        if (!loading) {
            return (
                <div className='container'>
                    <UserInfoWidget user={user} />
                    <br />
                    {loadAddReport(user)}
                    <hr style={{ color: 'var(--darkgreen)' }} />
                    <ReportsRollWidget reports={reports} />
                </div>
            )
        }
    }

    if (!user || !reports) {
        return (
            <div style={{ minHeight: '100vh' }}>
                <Spinner animation="border" variant="success" />
            </div>
        )
    }
    return (
        <div style={{ textAlign: 'center', margin: '3%' }} className='d-flex align-items-center justify-content-center'>
            {
                load(user)
            }
        </div>
    )
}

export default ReportsDashboard