import React from 'react'
import '../../styles/Nurse_Profile_Review_Form_styles.css'
import nursedp from '../../resources/images/nursedp.jpg'
import ReactStars from "react-rating-stars-component";
import Nurse_Profile_Review_Form_ratings from './Block/Nurse_Profile_Review_Form_ratings';
export default function Nurse_Profile_Review_Form(){
    const exp=[{
        q:"how was the rating",
        id:"1",
        name:"1",
        value:"1"
    },
    {
        q:"how was the rating",
        id:"2",
        name:"2",
        value:"2"
    },
    {
        q:"how was the rating",
        id:"3",
        name:"3",
        value:"3"
    }
    ]
    // var Rating = require('react-rating');
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      
    return(
        <div className='nurse_profile_review_form'>
            <div className = "d-flex justify-content-center ">
                <div className='nurse_profile_review_form_container'>
                <div className = "d-flex justify-content-center">
                <p>Review </p>
                </div>
                
                <div className='d-flex nurse_profile_review_form_header px-4'>
                    <div className='nurse_profile_review_form_header_container d-flex justify-content-center align-items-center '>
                        <div className='nurse_profile_review_form_img'>
                            <img src={nursedp}/>
                        </div>
                        <div className='px-4 nurse_profile_review_form_nurse_name'>
                            <div>
                                <h3>Tamanna Shermin</h3>
                                <h4>Lab Aid Hospital</h4>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex justify-content-center align-items-center nurse_profile_review_form_overall_rating'>
                        <div className='nurse_profile_review_form_overall_rating_container'>
                            <h5>Overall how much will you rate this person?</h5>
                            <div className='d-flex jusity-content-end nurse_profile_review_form_overall_rating_starts'>
                                <ReactStars count={5} onChange={ratingChanged} size={36} activeColor="#ffd700"/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-5 py-5'>
                    <div className='Nurse_Profile_Review_Form_body'>
                        <div>
                            <div className='d-flex px-5 Nurse_Profile_Review_Form_ratings_and_header'>
                                <div className='Nurse_Profile_Review_Form_ratings_container_header py-3'>

                                </div>
                                <div className='Nurse_Profile_Review_Form_ratings_container_header d-flex py-3'>
                                    <div className='d-flex justify-content-center Nurse_Profile_Review_Form_ratings_container_header_rating_title'>
                                        <b>Poor</b>
                                    </div>
                                    <div className='d-flex justify-content-center Nurse_Profile_Review_Form_ratings_container_header_rating_title'>
                                        <b>Fair</b>
                                    </div>
                                    <div className='d-flex justify-content-center Nurse_Profile_Review_Form_ratings_container_header_rating_title'>
                                        <b>Satisfactory</b>
                                    </div>
                                    <div className='d-flex justify-content-center Nurse_Profile_Review_Form_ratings_container_header_rating_title'>
                                        <b>Good</b>
                                    </div>
                                    <div className='d-flex justify-content-center Nurse_Profile_Review_Form_ratings_container_header_rating_title'>
                                        <b>Excellent</b>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                            {exp.map((rating)=><Nurse_Profile_Review_Form_ratings rating={rating}/>)}
                            </div>
                        </div>
                        <div className='Nurse_Profile_Review_Form_ratings_add_comment py-2'>
                            <div class="form-group">
                                <div className='py-2'>
                                    <label for="exampleFormControlTextarea1"><b>Add Comment</b></label>
                                </div>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center Nurse_Profile_Review_Form_ratings_button py-3 pb-5'>
                            <button type="button" class="btn btn-success">Sumit</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}