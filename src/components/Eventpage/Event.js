import React from 'react'
import Event_Single_page from './Event_Single_page/Event_Single_page'
export default function Event(props) {
    const [image, setImage] = React.useState(null)
    // const [showEvent, setShowEvent] = React.useState(false)
    const [showEventSinglePage, setShowEventSinglePage] = React.useState(false)
    if(showEventSinglePage){
        window.location = `/event/${props.post._id}`
    }
    console.log(props.post)
    return (
        <>
            <div className='container-event mt-3 mx-1 bg-white'>
                <div className='px-3 py-3'>
                    <img className="event-img" src={`data:image/jpg;base64,${props.post.fileBuffer}`} />
                </div>
                <div className='maincolortext px-3'>
                    <h3>{props.post.name}</h3>
                </div>
                <div className='textgrayish px-3'>
                    <h6>{props.post.date_time}</h6>
                </div>
                <div className='px-3'>
                    <p>{props.post.location}</p>
                </div>
                <div className='px-3'>
                    <p>{1000}</p>
                </div>
                <div className='d-flex justify-content-end px-3'>
                    <button className='btn btn-success px-3 py-2' onClick={()=>{setShowEventSinglePage(true)}}>{"Learn More"}</button>
                </div>
            </div>
        </>
    )
}
