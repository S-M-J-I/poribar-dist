import React from 'react'
import Education from './Blocks/Education'
import Add_education from './Add_info_windows/Add_education'
import { useState } from 'react'
import { useEffect } from 'react'
import firebase from '../../firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
function Nurse_Profile_education(props) {
    const [isShown, setIsShown] = React.useState(false)
    const exp = props.nurse.educations

    const [add_education, setAdd_education] = useState(false);
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
                setAdd_education(false)
            }

        }

        {
            document.addEventListener("click", closeWindow);

        }
        return () => {
            document.removeEventListener("click", closeWindow)
        }
    },
        [add_education]
    )
    return (
        <div className='nurse_profile_education  '>
            {add_education ? <Add_education user={props.nurse} /> : <></>}
            <div className='nurse_container nurse_container_bottom'>
                <div className='nurse_profile_education__header d-flex'>
                    <h3 className='nurse_profile_education__header__h3'>Education</h3>
                    <div className='d-flex jutify-content-end align-items-center nurse_profile_add_icon'>
                        {isOwn &&
                            <button type='button' onClick={() => { setAdd_education(true) }}><i class="fa fa-plus nurse_profile_add_icon" aria-hidden="true"></i></button>
                        }
                    </div>
                    {/* <h3 className='nurse_profile_education__header__h3'>Education</h3> */}
                </div>
                <div className='nurse_profile_education_body'>
                    {exp.map((education) => <Education education={education.education} />)}
                </div>

            </div>
            <div className='nurse_profile_education_collapse d-flex justify-content-center align-items-center' onClick={() => {
                const element = document.getElementsByClassName("nurse_profile_education_body")
                if (isShown) {
                    element[0].style.maxHeight = '500px'
                } else {
                    element[0].style.maxHeight = "none"
                }
                setIsShown(!isShown)
            }}>{!isShown && "Show All Education"}
            </div>
        </div>
    )
}

export default Nurse_Profile_education