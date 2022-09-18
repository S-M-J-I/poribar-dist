import React from 'react'

import { Rating } from 'react-simple-star-rating'
export default function Nurse_profile(props) {
    return (
        <>
            <div className='container-nurse-profile mt-3 mx-1 bg-white' style={{borderRadius: '20px'}}>
                <div className='px-3 py-4 d-flex justify-content-center'>
                    <img className="nurseprofile-img" src={`data:image/jpg;base64, ${props.imgurl}`} />
                </div>
                <div className=' px-3 d-flex justify-content-center'>
                    <h3>{props.post.name}</h3>
                </div>
                <div className='nurseprofile_rating textgrayish px-3 d-flex justify-content-center'>
                    <Rating ratingValue={props.post.rating/5*100} size={20} readonly={true}/* Available Props */ />
                    <p className='py-1 px-2'>{props.post.rating.toPrecision(2)}</p>
                </div>
                <div className='px-3 py-2 d-flex justify-content-center'>
                    <i className="fa fa-map-marker fa-2x nurse_location_icon" aria-hidden="true" style={{color:'red'}}/>
                    <h5>{props.post.address} </h5>
                </div>
                <div className='d-flex justify-content-center px-3 py-2'>
                    <a href={`/nurse_profile/${props.post.uid}`} style={{ textDecoration: 'none', color: 'white' ,borderRadius:'20px'}} className=' maincolorbg px-3 py-2'>View Profile</a>
                </div>
            </div>
        </>
    )
}
