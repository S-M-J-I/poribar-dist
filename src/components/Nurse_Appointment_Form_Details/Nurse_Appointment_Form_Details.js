import React from 'react'
import '../../styles/Nurse_Appointment_Form_details_styles.css'
import { getAuth } from 'firebase/auth'
import firebase from '../../firebase/firebase';
import { useState } from 'react';
export default function Nurse_Appointment_form_Details(props) {
    const [loading, setLoading] = useState(false)
    const [address,setAddress] = useState(props.user.address)
    const [phone,setPhone] = useState(props.user.phone)
    const [name,setName] = useState(props.user.name)
    const [email,setEmail] = useState(props.user.email)
    const createAppointment = (e, setLoading) => {
        e.preventDefault()

        const user = getAuth(firebase).currentUser.uid

        let form = document.getElementById('appointment-booking')
        const formData = new FormData(form)
        formData.append("customer", user)
        formData.append("nurse", props.nurse.uid)
        formData.append("duration", props.data.duration)
        formData.append("start_date", props.data.date)
        setLoading(true)

        fetch(`http://localhost:3030/api/appointments/create`, {
            method: 'post',
            mode: 'cors',
            body: formData
        }).then(res => res.json())
            .then(data => {
                setLoading(false)
                console.log(data)
                if(data.status === 'success'){
                    alert("Appointment created successfully")
                    window.location='/dashboard'
                }
            }
            )
            .catch(err => {
                console.log(err)
                alert(err)
            }
            )
    }

    return (
        <div className='nurse_appointment_form_details d-flex justify-content-center align-items-center'>
            <div className='nurse_appointment_form_details_main_container '>
                <form id='appointment-booking' onSubmit={(e) => createAppointment(e, setLoading)}>
                    <div className='d-flex'>
                        <div class="form-group px-1 nurse_appointment_form_details_input_box">
                            <label for="exampleInputEmail1">Name</label>
                            <input size='100' name='name' type="text" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />

                        </div>
                    </div>

                    <div className='d-flex'>
                        <div class="form-group px-1 nurse_appointment_form_details_input_box">
                            <></>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name='email' class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div class="form-group px-1 nurse_appointment_form_details_input_box">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input type="number" name='phone' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(e) => setPhone(e.target.value)} />

                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Location</label>
                        <textarea type="email" name='location' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your location here"  value={address} onChange={(e)=>setAddress(e.target.value)}/>

                    </div>
                    <div className='d-flex py-2'>
                        <div className='nurse_appointment_form_details_width d-flex justify-content-start nurse_appointment_form_details_text_weight'>
                            Basic Price
                        </div>
                        <div className='nurse_appointment_form_details_width d-flex justify-content-end'>
                            1000
                        </div>
                    </div>
                    <div className='d-flex py-2'>
                        <div className='nurse_appointment_form_details_width d-flex justify-content-start nurse_appointment_form_details_text_weight'>
                            Discount
                        </div>
                        <div className='nurse_appointment_form_details_width d-flex justify-content-end'>

                        </div>
                    </div>
                    <div className=' d-flex nurse_appointment_form_details_discount pt-2'>

                        <label className='d-flex align-items-center nurse_appointment_form_details_text_weight ' for="exampleInputEmail1">Add Coupon</label>
                        <input type="text" name='coupon' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the coupon" />
                    </div>
                    <div className='mt-4 mb-4'>
                        <div className='d-flex nurse_appointment_form_details_total_price'>
                            <div className='container d-flex justify-content-start nurse_appointment_form_details_text_weight'>
                                Total Price
                            </div>
                            <div className='container d-flex justify-content-end'>
                                {1000*props.data.duration}
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-4'>
                        <div className='d-flex'>
                            <div className='nurse_appointment_form_details_width d-flex nurse_appointment_form_details_text_weight'>
                                <div>
                                    <h5>Payment Method</h5>
                                    <div className='d-flex justify-content-start nurse_appointment_form_details_text_weight'><b>Cash</b></div>
                                </div>

                            </div>
                            <div className='nurse_appointment_form_details_width d-flex justify-content-end'>
                                <div>
                                    <i class="nurse_appointment_form_details_edit_icon fa fa-pencil-square-o" aria-hidden="true"></i>
                                    <h6>{1000*props.data.duration}</h6>
                                </div>
                            </div>
                        </div>
                        {/* <div className='d-flex'>
                        <div className='container d-flex justify-content-start'>
                            Total Price
                        </div>
                        <div className='container d-flex justify-content-end'>
                            $1000
                        </div>
                    </div> */}
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
