import React from 'react'
import '../../../styles/Reviews_styles.css'
export default function review(props){
    console.log(props.rev)
return(
    <>
    <div className='nurse_review_header'>
        <div>
            <h4>{props.rev.reviewer}</h4>
        </div>
        <div>
            {new Date(props.rev.date).toLocaleDateString()}
        </div>
        <div>
            {props.rev.comment}
        </div>
        <div>
            Rating:&nbsp;
            {parseFloat(props.rev.rating.$numberDecimal)}
        </div>
    </div>
    </>
)
}