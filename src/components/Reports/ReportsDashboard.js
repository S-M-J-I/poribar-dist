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
        let auth = getAuth(firebase)
        auth.onAuthStateChanged((usr) => {
            if (usr) {
                setUser(usr)
                fetch(`http://localhost:3030/api/auth/user/profile/${usr.uid}`, {
                    method: 'post',
                    mode: 'cors'
                }).then(res => res.json())
                    .then((data) => {
                        setUser(data)
                        // console.log(data._id)
                        setLoading(false)
                        fetch(`http://localhost:3030/api/reports/all/${data.uid}`, {
                            method: 'post',
                            mode: 'cors'
                        })
                            .then(res => res.json())
                            .then((dd) => {
                                setReports(dd)
                                console.log(dd)
                            })
                            .catch(err => console.log(err))
                            .catch((err) => {
                                // console.log(err)
                            })
                    })
                    .catch(err => console.log(err))
            } else {
                console.log('no user')
            }
        })
    }, [])

    const loadAddReport = (user) => {
        // console.log(user.type)
        
        if (user.type === 'nurse') {
            return (
                <div style={{ textAlign: 'right' }}>
                    <a href={`/reports/add/${user.uid}`} className='btn btn-primary'>+</a>
                </div>
            )
        }
    }

    const load = (user) => {
        // console.log(user.type)
        console.log(user)
        if (!loading) {
            return (
                <div className='container'>
                    <UserInfoWidget user={user} />
                    <br />
                    {/* {loadAddReport(user)} */}
                    <hr style={{ color: 'var(--darkgreen)' }} />
                    <h2>Medical Reports</h2>
                    <ReportsRollWidget reports={reports} user={user}/>
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
        <div style={{ textAlign: 'center' }} className='d-flex align-items-center justify-content-center'>
            {
                load(user)
            }
        </div>
    )
}

export default ReportsDashboard