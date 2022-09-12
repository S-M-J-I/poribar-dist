import React from 'react'

export default function Event(props) {
    const [image, setImage] = React.useState(null)
    // React.useEffect(() => {
    //     if(props.post.fileBuffer){
    //         // console.log(props.post.fileBuffer)
    //         setImage(base64)
    //     }else{
    //         setImage(null)
    //     }
    // }, [])
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
                    <h6>{props.post.date}</h6>
                </div>
                <div className='px-3'>
                    <p>{props.post.location}</p>
                </div>
                <div className='px-3'>
                    <p>{1000}</p>
                </div>
                <div className='d-flex justify-content-end px-3'>
                    <button className='maincolorbg px-3 py-2'>{"Learn More"}</button>
                </div>
            </div>
        </>
    )
}
