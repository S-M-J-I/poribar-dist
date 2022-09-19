import React from 'react'
import Certificates from './Blocks/Certificates'
import { useState } from 'react'
import { useEffect } from 'react'
import Add_certificates from './Add_info_windows/Add_certificates'
import firebase from '../../firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
function Nurse_Profile_certificates(props) {
    const [isShown, setIsShown] = React.useState(false)
    const exp = props.nurse.certificates
    const [add_certificate, setAdd_certificate] = useState(false);
    const [isOwn, setIsOwn] = React.useState(false)
    useEffect(() => {
        const auth = getAuth(firebase)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.uid === props.nurse.uid) {
                    setIsOwn(true)
                }
            }
        })
    }, [])
    useEffect(() => {
        const closeWindow = (e) => {
            if (e.target.classList.contains("add_info_window_header")) {
                setAdd_certificate(false)
            }

        }

        {
            document.addEventListener("click", closeWindow);

        }
        return () => {
            document.removeEventListener("click", closeWindow)
        }
    },
        [add_certificate]
    )
    return (
        <div className='nurse_profile_certificates  '>
            {add_certificate ? <Add_certificates user={props.nurse} /> : <></>}
            <div className='nurse_container nurse_container_bottom'>
                <div className='nurse_profile_certificates__header d-flex'>
                    <h3 className='nurse_profile_certificates__header__h3'>Certificates</h3>
                    <div className='d-flex jutify-content-end align-items-center nurse_profile_add_icon'>
                        {isOwn &&
                            <button type='button' onClick={() => { setAdd_certificate(true) }}><i class="fa fa-plus nurse_profile_add_icon" aria-hidden="true"></i></button>}
                    </div>
                    {/* <h3 className='nurse_profile_certificates__header__h3'>Certificates</h3> */}
                </div>
                <div className='nurse_profile_certificates_body'>
                    {exp.map((certificates) => <Certificates certificates={certificates.certificate} />)}
                </div>

            </div>
            <div className='nurse_profile_certificates_collapse d-flex justify-content-center align-items-center' onClick={() => {
                const element = document.getElementsByClassName("nurse_profile_certificates_body")
                if (isShown) {
                    element[0].style.maxHeight = '500px'
                } else {
                    element[0].style.maxHeight = "none"
                }
                setIsShown(!isShown)
            }}>{!isShown && "Show All Certificates"}
            </div>
        </div>
    )
}

export default Nurse_Profile_certificates