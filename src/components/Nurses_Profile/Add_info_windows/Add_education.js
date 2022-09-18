import React from 'react';
import { Form } from 'react-bootstrap';
import '../../../styles/Add_info_window_styles.css';
export default function Add_education(props){
    const onSubmit = (e) =>{
        e.preventDefault();
        const element = document.getElementById("add_educations")
        const form = new Form(element)
        fetch("http://localhost:3030/api/auth/nurse/add/educations/"+ props.user.uid,{
            method:'post',
            mode:"cors",
            body:form

        }

        ).then(res => res.json()).then(res => {
            if(res.status === "success"){
                window.location.reload()
            }
        }).catch(err => console.log(err))
    }
    return(
        <div className='add_info_window'>
        <div className='d-flex justify-content-center align-items-center add_info_window_header'>
            <div className='add_info_window_container px-5 py-4'>
            <form id="add_educations" onSubmit={(e) => {onSubmit(e)}}>
                <div class="form-group">
                    <label for="coursename">Institute Name</label>
                    <input type="text" class="form-control" id="coursename" name="institute_name" aria-describedby="emailHelp"/>
                        
                </div>
                <div class="form-group">
                    <label for="type">Program Name</label>
                    <input type="text" class="form-control" name="program" id="type" />
                </div>
                <div className='d-flex'>
                    <div class="form-group px-1 add_certificates_start_end_year">
                        <label for="startyear">Start year</label>
                        <input type="date" name="start_date" class="form-control" id="startyear" />
                    </div>
                    <div class="form-group px-1 add_certificates_start_end_year">
                        <label for="endyear">End year</label>
                        <input type="date" name="end_date" class="form-control" id="endyear" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="location">Description of the program</label>
                    <textarea type="text" name="description" class="form-control" id="location" />
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