import React from 'react'
import '../../styles/Reviews_styles.css'
import Review from './Blocks/Review'
export default function Reviews(){
    const exp = [{
        reviewername:'Tamanna Shermin',
        date:'21-02-2021',
        comment:"I am satisfied with the service."
    },
    {
        reviewername:'Tamanna Shermin',
        date:'21-02-2021',
        comment:"I am satisfied with the service."
    },
    {
        reviewername:'Tamanna Shermin',
        date:'21-02-2021',
        comment:"I am satisfied with the service."
    },
    {
        reviewername:'Tamanna Shermin',
        date:'21-02-2021',
        comment:"I am satisfied with the service."
    }
    ]
    return(
        
        <div className='d-flex justify-content-center align-items-center nurse_reviews '>
        <div className='reviews shadow'>
            <div className='nurse_reviews_count'>
                <h3>10 reviews</h3>
            </div>
            <div className='nurse_reviews_review'>
            {exp.map((rev)=><Review rev={rev}/>)}
            </div>
        </div>
        </div>
    )
}