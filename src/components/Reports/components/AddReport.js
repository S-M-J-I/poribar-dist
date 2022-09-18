import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getAuth } from "firebase/auth"
import firebase from '../../../firebase/firebase'
import { Spinner } from 'react-bootstrap';

function open_file_dialogue(e) {
    e.preventDefault();
    document.getElementById('file').click();
}

function AddReport(props) {
    const [loading, setLoading] = useState(false)
    const [Editor, setEditor] = useState(props.editor)
    const [data, setData] = useState('')
    const [nurse, setNurse] = useState(null)
    const { id } = useParams()
    const [state, setState] = useState({
        data: (""),
        editor: null
    })

    useEffect(() => {
        const auth = getAuth(firebase);
        auth.onAuthStateChanged(user => {
            if (user) {
                fetch(`http://localhost:3030/api/auth/nurse/profile/${user.uid}`, {
                    method: 'post',
                    mode: 'cors'
                }).then(res => res.json())
                    .then((data) => {
                        setNurse(data)
                        // console.log(data._id)
                        setLoading(false)
                    })
                    .catch(err => console.log(err))
                    .catch((err) => {
                        console.log(err)
                    })
                setTimeout(() => {
                    console.log(state.data);
                    const editor = (
                        <CKEditor
                            id={"ck-editor-text"}
                            editor={ClassicEditor}
                            onReady={editor => { console.log('Editor is ready to use!', editor) }}
                            onChange={(e, editor) => setData(editor.getData())}
                        />
                    )
                    setState({ ...state, editor: editor });
                }, 2000);
            } else {
                console.log('no nurse')
            }
        })

    }, [])

    const createReport = (e, setLoading, editor) => {
        e.preventDefault();

        let form = document.getElementById('report-form');
        form["content"] = data
        console.log(form["description"])

        const formData = new FormData(form)
        setLoading(true)
        formData.append("content", data)
        console.log(data)
        formData.append("patient", id)
        formData.append("nurse", nurse._id)
        console.log(formData.get("content"))

        fetch(`http://localhost:3030/api/reports/add/${id}`, {
            method: 'POST',
            mode: 'cors',
            body: formData
        }).then(res => res.json())
            .then(data => {
                alert('Report Created')
                setLoading(false)
                console.log(data)
            }).catch(err => {
                console.log(err)
                alert('Error creating event')
            }
            )
            .catch(err => {
                console.log(err)
            })
    }


    if (!nurse) {
        return (
            <div style={{ minHeight: '100vh' }} className='d-flex align-items-center justify-content-center'>
                <Spinner animation="border" variant="success" size='100px' />
            </div>
        )
    }

    return (
        <div style={{ margin: '5%' }} className='d-flex align-items-center justify-content-center' >
            <form id='report-form' onSubmit={(e) => createReport(e, setLoading, Editor)} style={{ backgroundColor: 'white' }}>
                <div style={{ textAlign: 'left' }} class="mb-6">
                    <label for="formGroupExampleInput" class="form-label">&nbsp;Report Title</label>
                    <input size='50' type="text" class="form-control" id="formGroupExampleInput" name='title' placeholder="Enter report title here" required />
                </div>
                <br></br>
                <div style={{ textAlign: 'left' }} class="mb-6">
                    <label for="formGroupExampleInput" class="form-label">&nbsp;Report Description</label>
                    <input size='50' type="text" class="form-control" id="formGroupExampleInput" name='description' placeholder="Enter report description" required />
                </div>
                <br></br>
                <div style={{ textAlign: 'left' }} class="mb-6">
                    <label for="formGroupExampleInput" class="form-label">&nbsp;Report Content</label>
                    <div id='content'>
                        {state.editor}
                    </div>
                </div>
                <br></br>
                <div style={{ textAlign: 'left' }} class="mb-6">
                    <label for="formGroupExampleInput" class="form-label">&nbsp;Report Attachments</label>&nbsp;
                    <input type="file" id="file" name='reportImages' multiple style={{ display: 'none' }} />
                    <button type="submit" class="btn btn-light" onClick={(e) => open_file_dialogue(e)}>Upload Images Photo</button>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <button type="submit" class="btn btn-success"  >Create Report</button>
                </div>
            </form>
        </div>
    )
}

export default AddReport