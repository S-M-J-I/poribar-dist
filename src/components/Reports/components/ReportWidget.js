import React from 'react'
import { Link } from 'react-router-dom'

function ReportWidget(props) {
    return (
        <>
            <Link to={`/reports/report/${props.report._id}`} style={{ textDecoration: 'none', color: 'black' }} >
                <div className='container' style={{ textAlign: 'left', margin: '5%' }}>
                    <div style={{ backgroundColor: 'var(--green)', padding: '1%' }}>
                        <h4>{props.report.title}</h4>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '1%' }}>
                        <p>{props.report.description}</p>
                    </div>
                </div >
            </Link>
        </>
    )
}

export default ReportWidget