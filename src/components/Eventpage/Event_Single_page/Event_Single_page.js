import React, { useEffect } from 'react'
import '../../../styles/Event_single_page.css'
import Map from '../../../resources/images/map.png'
import { useParams } from 'react-router-dom'
import firebase from '../../../firebase/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
function Event_Single_page() {
    const { id } = useParams();
    const [event, setEvent] = React.useState(null)
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [isGoing, setIsGoing] = React.useState(false)
    const [isInterested, setIsInterested] = React.useState(false)
    const [user, setUser] = React.useState(null)
    const [onQuery, setOnQuery] = React.useState(true)
    useEffect(() => {
        let auth = getAuth(firebase)
        onAuthStateChanged(auth, (usr) => {
            if (usr) {
                setUser(usr)
                fetch(`http://localhost:3030/api/events/${id}`, { method: 'POST', mode: 'cors' }).then(data => data.json()).then(data => {
                    setEvent(data)
                    // console.log('->',data.going,usr.uid)
                    setIsLoaded(true)
                    if (data.going.includes(usr.uid)) {
                        setIsGoing(true)
                    }else{
                        setIsGoing(false)
                    }
                    if (data.interested.includes(usr.uid)) {
                        setIsInterested(true)
                    }else{
                        setIsInterested(false)
                    }
                    setOnQuery(false)
                })
            }
        }
        )
    }, [onQuery])
    const setGoing = () => {
        setOnQuery(true)
        const form = new FormData()
        form.append('uid',user.uid)
        fetch(`http://localhost:3030/api/events/going/${id}`, { method: 'POST', mode: 'cors' ,body:form}).then(data => data.json()).then(data => {
            setEvent(data)
            console.log(data)
            if (data.going.includes(user.uid)) {
                setIsGoing(true)
            }else{
                setIsGoing(false)
            }
            if (data.interested.includes(user.uid)) {
                setIsInterested(true)
            }else{
                setIsInterested(false)
            }
        })
    }
    const setInterested = () => {
        setOnQuery(true)
        const form = new FormData()
        form.append('uid',user.uid)
        fetch(`http://localhost:3030/api/events/interested/${id}`, { method: 'POST', mode: 'cors' ,body: form}).then(data => data.json()).then(data => {
            setEvent(data)
            console.log(data)
            if (data.going.includes(user.uid)) {
                setIsGoing(true)
            }else{
                setIsGoing(false)
            }
            if (data.interested.includes(user.uid)) {
                setIsInterested(true)
            }else{
                setIsInterested(false)
            }
        })
    }

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='event_single_page '>
            <div className='event_single_page__banner'>
                <img className='event_single_page_cover' src={`data:image/jpg;base64,${event.photo}`} alt='event_banner' />
            </div>
            <div className='d-flex justify-content-center'>
                <div style={{ width: "75vw" }}>
                    <div className='event_single_page__header '>
                        <h1 className='event_single_page__header__date'>{event.date_time}</h1>
                        <h3 className='event_single_page__header__title'>{event.name}</h3>
                        <div className='event_single_page_header_stats d-flex justify-content-between'>
                            <div className='event_single_page_header_left d-flex'>
                                <p className='event_single_page__header__status_count'>{event.interested.length} Interested</p>
                                &nbsp;
                                <p className='event_single_page__header__status_count'>{event.going.length} Attending</p>
                            </div>

                            <div className='event_single_page__header__status d-flex'>
                                {isInterested ? <button className='btn btn-danger' onClick={()=>setInterested()}>Interested</button> : <button className='btn btn-success' onClick={()=>setInterested()}>Interested</button>}
                                {isGoing ? <button className='btn btn-danger' onClick={()=>setGoing()}>Going</button> : <button className='btn btn-success' onClick={()=>setGoing()}>Going</button>}
                            </div>
                        </div>
                    </div>
                    <div className='event_single_page__body d-flex justify-content-between'>
                        <div className='event_single_page__body__description'>
                            <h3 className='event_single_page__body__description__h3'>Description</h3>
                            <p className='event_single_page__body__description__p'>{event.description}</p>
                        </div>
                        <div className='event_single_page__body__location'>
                            <h3 className='event_single_page__body__location__h3'>Location</h3>
                            <p>{event.location}</p>
                            <img src={Map} alt='map' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event_Single_page