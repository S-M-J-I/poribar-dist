import React, { useEffect } from 'react'
import '../../../styles/Event_single_page.css'
import Map from '../../../resources/images/map.png'
import { useParams } from 'react-router-dom'
function Event_Single_page() {
    const {id} = useParams();
    const [event, setEvent] = React.useState(null)
    const [isLoaded, setIsLoaded] = React.useState(false)
    useEffect(() => {
        fetch(`http://localhost:3030/api/events/${id}`,{method: 'POST',mode: 'cors'}).then(data => data.json()).then(data => {
            setEvent(data)
            setIsLoaded(true)
        })
    }, [])
    if(!isLoaded){
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
                            <p className='event_single_page__header__status_count'>{event.interested} Interested</p>
                            &nbsp;
                            <p className='event_single_page__header__status_count'>{event.going} Attending</p>
                        </div>
    
                            <div className='event_single_page__header__status d-flex'>
                                <p className='event_single_page__header__status__interested'>Interested</p>
                                <p className='event_single_page__header__status__going'> Going</ p>
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
                            {/* <p className='event_single_page__body__location__p'>{props.event.location}</p> */}
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