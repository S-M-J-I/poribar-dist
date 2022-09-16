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
    const [editor, setEditor] = useState(null)
    const [data, setData] = useState('')
    const [nurse, setNurse] = useState(null)
    const { id } = useParams()


    useEffect(() => {
        let currUser = ''
        try {
            currUser = getAuth(firebase).currentUser.uid
        } catch (err) {
            // console.log(err)
            // window.location = '/'
        }

        if (currUser) {
            fetch(`http://localhost:3030/api/auth/nurse/profile/${currUser}`, {
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
        } else {
            console.log('no nurse')
        }
    }, [nurse])


    const inputHandler = (event, editor) => {
        console.log(editor.getData());
        setData(editor.getData())
    }

    const createReport = (e, setLoading, editor) => {
        e.preventDefault();

        let form = document.getElementById('report-form');
        form["content"] = data
        console.log(form["description"])

        const formData = new FormData(form)
        setLoading(true)
        formData.append("content", data)
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

    useEffect(() => {
        const ckeditor = <CKEditor
            editor={ClassicEditor}
            config={{
                name: 'content',
            }}
            id="content"
            data="Write content here</p>"
            onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
            }}
            onChange={inputHandler}
            onBlur={(event, editor) => {
                console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
                console.log('Focus.', editor);
            }}
        />

        setEditor(ckeditor)
    }, [])


    const declareTimeout = () => {
        setTimeout(() => {
            alert('Timeout')
            console.log('timed out')
            window.location = '/'
        }, 15000)
    }

    if (!nurse) {
        return (
            <div style={{ minHeight: '100vh' }}>
                <Spinner animation="border" variant="success" />
                {declareTimeout()}
            </div>
        )
    }

    return (
        <div style={{ margin: '5%' }} className='d-flex align-items-center justify-content-center'>
            <form id='report-form' onSubmit={(e) => createReport(e, setLoading, editor)}>
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
                    {editor}
                </div>
                <br></br>
                <div style={{ textAlign: 'left' }} class="mb-6">
                    <label for="formGroupExampleInput" class="form-label">&nbsp;Report Attachments</label>&nbsp;
                    <input type="file" id="file" name='reportImages' multiple style={{ display: 'none' }} />
                    <button type="submit" class="btn btn-light" onClick={(e) => open_file_dialogue(e)}>Upload Images Photo</button>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <button type="submit" class="btn" style={{ backgroundColor: 'var(--green)' }} >Create Report</button>
                </div>
            </form>
        </div>
    )
}

export default AddReport