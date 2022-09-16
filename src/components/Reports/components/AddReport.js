import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function open_file_dialogue(e) {
    e.preventDefault();
    document.getElementById('file').click();
}

function AddReport(props) {
    const [loading, setLoading] = useState(false)
    const [editor, setEditor] = useState(null)
    const [data, setData] = useState('')
    const { id } = useParams()

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
        formData.append("patient", "6314d4480df029ec1e5d1cf2")
        formData.append("nurse", "631b3d7587ff3f708b146792")
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