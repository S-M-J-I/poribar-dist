import React, { createElement, useEffect, useState } from 'react';
import './Add_event.css';

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
// import firebase from '../firebase/firebase'

function open_file_dialogue(e) {
    e.preventDefault();
    document.getElementById('file').click();
}
function createEvent(e,setLoading,setCreateEvent) {
    e.preventDefault();
    let form = document.getElementById('create-event-form');
    const formData = new FormData(form);
    setLoading(true);
    fetch('http://localhost:3030/api/events/create', {
        method: 'POST',
        mode: 'cors',
        body: formData
    }).then(res => res.json())
        .then(data => {
            if(data.msg=='confirmed'){
                alert('Event Created');
                setLoading(false)
                setCreateEvent(false)
            }
        }).catch(err => {
            console.log(err)
            alert('Error creating event')
        }
    )
}
function Addevent(props) {
    const [loading, setLoading] = useState(false)
    if(loading){
        return (
            <div className='addeventcontainer'>
                <div className='addeventcontainer__loading'>
                    <div className='addeventcontainer__loading__spinner'>
                        <div className='addeventcontainer__loading__spinner__circle'>Loading</div>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div class="addeventcontainer d-flex align-items-center justify-content-center">
            <div class="eventform shadow p-3 mb-5 bg-white rounded">
                <form id='create-event-form' onSubmit={(e) => createEvent(e,setLoading,props.setCreateEvent)}>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Event Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" name='name' placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3 d-flex">
                        <input class="form-control" type="datetime-local" name="date" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Description</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" name='description' />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Location</label>
                        <input type="text" class="form-control" name='location' aria-describedby="emailHelp" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" class="btn btn-light" onClick={(e) => open_file_dialogue(e)}>Update Cover Photo</button>
                    </div>
                    <input type="file" id="file" name='photo' style={{ display: 'none' }} />
                    <div className='d-flex justify-content-center mt-3'>
                        <button type="submit" class="btn btn-primary" >Create Event</button>
                    </div>

                </form>
            </div>
        </div>

    );
}
export default Addevent;