import React, { useEffect, useState } from 'react'
import Nurse_Profile_header from './Nurse_Profile_header'
import Nurse_Profile_about from './Nurse_Profile_about'
import Nurse_Profile_experience from './Nurse_Profile_experience'
import Nurse_Profile_education from './Nurse_Profile_education'
import Nurse_Profile_certificates from './Nurse_Profile_certificates'
import { useParams } from 'react-router'
import { Spinner } from 'react-bootstrap'

function Nurse_Profile() {
    const { id } = useParams()
    const [nurse, setNurse] = useState()

    useEffect(() => {
        fetch(`http://localhost:3030/api/auth/nurse/profile/${id}`, {
            method: 'post',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => {
                setNurse(data)
            })
            .catch(err => {

            })
            .catch(err => {

            })
    }, [])

    if (!nurse) {
        return (
            <div style={{ minHeight: '100vh' }}>
                <Spinner animation="border" variant="success" />
            </div>
        )
    }
    return (
        <div className='nurses_profile d-flex justify-content-center w-100'>
            <div className='nurses_profile__container'>
                <div className='nurses_profile__header'>
                    <Nurse_Profile_header nurse={nurse} />
                </div>
                <div className='nurses_profile__about'>
                    <Nurse_Profile_about nurse={nurse} />
                </div>
                <div className='nurses_profile__experience'>
                    <Nurse_Profile_experience />
                </div>
                <div className='nurses_profile__education'>
                    <Nurse_Profile_education />
                </div>
                <div className='nurses_profile__certification'>
                    <Nurse_Profile_certificates />
                </div>
            </div>
        </div>
    )
}

export default Nurse_Profile