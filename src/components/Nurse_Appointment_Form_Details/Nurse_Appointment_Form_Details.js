import React from 'react'
import '../../styles/Nurse_Appointment_Form_details_styles.css'
import { getAuth } from 'firebase/auth'
import firebase from '../../firebase/firebase';
import { useState } from 'react';
export default function Nurse_Appointment_form_Details(props) {
    const [loading, setLoading] = useState(false)

    const createAppointment = (e, setLoading) => {
        e.preventDefault()

        const user = getAuth(firebase).currentUser.uid

        let form = document.getElementById('appointment-booking')
        const formData = new FormData(form)
        formData.append("customer", user)
        formData.append("nurse", props.nurse.uid)
        setLoading(true)

        fetch(`http://localhost:3030/api/appointments/create`, {

        })
    }

    return (
        <div className='nurse_appointment_form_details d-flex justify-content-center align-items-center'>
            <div className='nurse_appointment_form_details_main_container '>
                <form id='appointment-booking' onSubmit={(e) => createAppointment(e, setLoading)}>
                    <div className='d-flex'>
                        <div class="form-group px-1 nurse_appointment_form_details_input_box">
                            <label for="exampleInputEmail1">Name</label>
                            <input size='100' type="text" class="form-control" id="exampleInputEmail1" name='name' aria-describedby="emailHelp" value={props.nurse.name} />

                        </div>
                    </div>

                    <div className='d-flex'>
                        <div class="form-group px-1 nurse_appointment_form_details_input_box">
                            <></>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" value={props.nurse.email} />

                        </div>
                        <div class="form-group px-1 nurse_appointment_form_details_input_box">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={props.nurse.phone} />

                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Location</label>
                        <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your location here" />

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
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the coupon" />
                    </div>
                    <div className='mt-4 mb-4'>
                        <div className='d-flex nurse_appointment_form_details_total_price'>
                            <div className='container d-flex justify-content-start nurse_appointment_form_details_text_weight'>
                                Total Price
                            </div>
                            <div className='container d-flex justify-content-end'>
                                1000
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
                                    <h6>1000</h6>
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
