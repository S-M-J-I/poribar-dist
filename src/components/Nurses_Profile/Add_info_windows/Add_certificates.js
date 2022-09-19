import React from 'react';
import { Form } from 'react-bootstrap';
import '../../../styles/Add_info_window_styles.css';
export default function Add_certificates(props) {
    const onSubmit = (e) => {
        e.preventDefault();
        const element = document.getElementById("add_certificates")
        const form = new FormData(element)
        fetch("http://localhost:3030/api/auth/nurse/add/certificates/" + props.user.uid, {
            method: 'post',
            mode: "cors",
            body: form

        }

        ).then(res => res.json()).then(res => {
            if (res.status === "success") {
                window.location.reload()
            }
        }).catch(err => console.log(err))
    }
    return (
        <div className='add_info_window'>
            <div className='d-flex justify-content-center align-items-center add_info_window_header'>
                <div className='add_info_window_container px-5 py-4'>
                    <form id="add_certificates" onSubmit={(e) => { onSubmit(e) }}>
                        <div class="form-group">
                            <label for="coursename">Course Name</label>
                            <input type="text" class="form-control" id="coursename" name="course_name" aria-describedby="emailHelp" />

                        </div>
                        <div class="form-group">
                            <label for="type">Institute Name</label>
                            <input type="text" class="form-control" name="company_name" id="type" />
                        </div>

                        <div class="form-group px-1 add_certificates_issued_year">
                            <label for="startyear">Issued Year</label>
                            <input type="date" class="form-control" name="issue_year" id="startyear" />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" class="btn btn-primary" >Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}