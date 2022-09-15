import React from 'react'

import { Rating } from 'react-simple-star-rating'
export default function Nurse_profile(props) {
  return (
    <>
    <div className='container-nurse-profile mt-3 mx-1 bg-white'>
        <div className='px-3 py-4 d-flex justify-content-center'>
            <img className ="nurseprofile-img" src={props.imgurl}/>
        </div>
        <div className=' px-3 d-flex justify-content-center'>
            <h3>{props.post.name}</h3>
        </div>
        <div className='nurseprofile_rating textgrayish px-3 d-flex justify-content-center'>
            <Rating  ratingValue={props.post.rating} size={20} readonly={true}/* Available Props */ />
            <p className='py-1 px-2'>{props.post.rating/100*5}</p>
        </div>
        <div className='px-3 py-2 d-flex justify-content-center'>
        <i className="fa fa-map-marker fa-2x nurse_location_icon" aria-hidden="true"/>
            <h5>{props.post.hospitalname} </h5>
        </div>
        <div className='d-flex justify-content-center px-3 py-2'>
            <button type="button" className=' maincolorbg px-3 py-2'>view profile</button>
        </div>
    </div>
    </>
  )
}
