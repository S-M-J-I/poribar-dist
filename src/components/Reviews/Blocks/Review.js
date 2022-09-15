import React from 'react'
import '../../../styles/Reviews_styles.css'
export default function review(props){
return(
    <>
    <div className='nurse_review_header'>
        <div>
            <h4>{props.rev.reviewername}</h4>
        </div>
        <div>
            {props.rev.date}
        </div>
        <div>
            {props.rev.comment}
        </div>
    </div>
    </>
)
}