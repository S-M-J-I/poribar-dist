import React from 'react'

export default function Service(props) {
    console.log(props)
  return (
    <>
    <div className='container-service mt-5'>
        <div>
            <img classNmae ="service-img" src={props.imgurl}/>
        </div>
        <div className='pl-3 pt-2'>
            <p>{props.post.subtitle}</p>
        </div>
        <div className='maincolortext pl-3'>
            <h2>{props.post.title}</h2>
        </div>
        <div className='pl-3 servicedescription'>
            <p>{`${props.post.description.substring(0, 200)}...`}<a href="#">Read more</a></p>
        </div>
        <div className='pl-3 '>
            <button className='maincolorbg px-3 py-2'>{props.post.btntext}</button>
        </div>
    </div>
    </>
  )
}
