import React from 'react'
import ReportWidget from './ReportWidget'

function ReportsRollWidget(props) {
    return (
        <div>
            {props.reports.length === 0 ? <h3>No Reports Found</h3> : props.reports.map(report => <ReportWidget report={report} />)}
        </div>
    )
}

export default ReportsRollWidget