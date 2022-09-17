import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Spinner } from 'react-bootstrap'
import parse from 'html-react-parser'
import '../../../styles/Reports.css'
function SingleReport() {
    const { id } = useParams()
    const [report, setReport] = useState()

    const formatDate = (date) => {
        const dateTime = date

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit" };
        const datetimestring = dateTime.toLocaleDateString('en-US', options)
        const timestring = datetimestring.split(',')

        const formatString = `${timestring[0]}, ${timestring[1]}, ${timestring[2]}`
        return formatString
    }

    const loadImages = (images) => {
        const imgs = []
        images.forEach(img => {
            imgs.push(<img style={{ width: '20%' }} src={`data:image/jpg;base64,${img}`} alt='report-img' />)
        })
        return imgs
    }

    useEffect(() => {

        fetch(`http://localhost:3030/api/reports/report/${id}`, {
            method: 'post',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data,'here')
                setReport(data)
            })
            .catch(err => {
                console.log(err)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    if (!report) {
        return (
            <div style={{ minHeight: '100vh' }}>
                <Spinner animation="border" variant="success" />
            </div>
        )
    }
    return (
        <div>
            
            <div style={{ backgroundColor: 'var(--green)', padding: '1%' }}>
                <div>
                    <h1>{report.report.title}</h1>
                </div>
            </div>
            <div className='report__container d-flex justify-content-center'>
            <div className='container'>
            <div style={{ backgroundColor: 'white', padding: '1%' }}>
                <div className='row' style={{ padding: '3%', fontSize: '1.2rem' }}>
                    <div className='col-sm' style={{ textAlign: 'left' }}>
                        <strong>Name: </strong> {report.patient.name} <br /> <br />
                        <strong>Sex: </strong> {report.patient.gender} <br /> <br />
                        <strong>Nurse: </strong> {report.nurse.name}
                    </div>
                    <div className='col-sm' style={{ textAlign: 'left' }}>
                        <strong>Nurse Contact: </strong> {report.nurse.phone} <br /> <br />
                        <strong>Date of Test: </strong> {formatDate(new Date(report.report.createdAt))} <br /> <br />
                        <strong>Report ID: </strong> {report.report._id}
                    </div>
                </div>
                <hr />
                <br />
                <div className='row'>
                    <h3><strong>{report.report.description}</strong></h3>
                </div>
                <br />
                <div className='row'>
                    <p style={{ textAlign: 'center' }}>
                        {<div style={{textAlign:"center"}} className='parsed_data '>{parse(report.report.content)}</div>}
                    </p>
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <div className='row d-flex justify-content-center'>
                    <h3><strong>Attachments</strong></h3><br />
                    {loadImages(report.images)}
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default SingleReport