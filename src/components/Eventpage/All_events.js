import React, { useEffect, useState } from "react";
// import event from '../../resources/images/eventimg.png'
import '../../styles/Event_styles.css';
import Event from './Event'
import 'font-awesome/css/font-awesome.css'
// import { post } from "jquery";
export default function All_events() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [tempPosts, setTempPosts] = useState([])
    const [timer, setTimer] = useState(false)
    const [isUpcoming, setIsUpcoming] = useState(false)
    const [isPopular, setIsPopular] = useState(false)
    useEffect(() => {
        if (search.length === 0 || loading === true || isUpcoming === false || isPopular === false) {
            fetch("http://localhost:3030/api/events/all", {
                method: "POST",
                mode: "cors"
            }).then(res => res.json()).then((data) => { setTempPosts(data); setPosts(data) }).catch(err => console.log(err))
        } else {
            fetch("http://localhost:3030/api/events/all", {
                method: "POST",
                mode: "cors"
            }).then(res => res.json()).then(data => setTempPosts(data)).catch(err => console.log(err))
        }
        setLoading(false)
        console.log(tempPosts)
    }, [])
    useEffect(() => {
        if (search.length > 0) {
            setPosts(tempPosts.filter(post => post.name.toLowerCase().includes(search.toLowerCase())))
        }
        if (isUpcoming) {
            setPosts(posts.filter(post => {
                console.log(post.date_time)
                const date = new Date(post.date)
                // console.log('->',post.date)
                return date > Date.now()
            }
            ))
        }
        console.log('here')
        if (isPopular) {
            console.log("popular")
            const temp=[...posts];
        
            setPosts(temp.sort((a, b) => b.going.length - a.going.length))
        }

        if (search.length === 0 && isUpcoming === false && isPopular === false) {
            console.log("here")
            setPosts(tempPosts)
        }

    }, [search, isUpcoming,isPopular])
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className="events_page">
            <h1 className="m-auto text-center maincolorbg text-white eventheader py-4">
                Events
            </h1>
            <div className="event_bggrayishlight">
                <div className="d-flex m-auto px-4 py-4 justify-content-between">
                    <div class="input-group mb-3 w-25">
                        <input type="text" class="form-control" placeholder="Search an event" aria-describedby="basic-addon2" onChange={(e) => setSearch(e.target.value)} />
                        <div class="input-group-append">
                            <button className="btn btn-success" type="button">
                                <i className="eventsearchicon fa fa-search" style={{ color: 'white' }}></i>
                            </button>
                        </div>
                    </div>
                    <div >
                        {isUpcoming ? <button className="btn btn-danger" type="button" onClick={() => setIsUpcoming(!isUpcoming)}>

                            <i className="fa fa-calendar"></i>

                            <b className="mx-2">Upcoming</b>
                        </button>
                            : <button className="btn btn-success" type="button" onClick={() => setIsUpcoming(!isUpcoming)}>

                                <i className="fa fa-calendar"></i>

                                <b className="mx-2">Upcoming</b>
                            </button>}
                        &nbsp;
                        {isPopular ? <button className="btn btn-danger" type="button" onClick={() => setIsPopular(!isPopular)}>

                            <i className="fa fa-bars"></i>

                            <b className="mx-2">Popular</b>
                        </button>
                            : <button className="btn btn-success" type="button" onClick={() => setIsPopular(!isPopular)}>

                                <i className="fa fa-bars"></i>

                                <b className="mx-2">Popular</b>
                            </button>}
                    </div>
                </div>


                <div>
                    <div className="box-container-event px-3 m-auto">
                        {posts.length == 0 ? <h3>No Events Found</h3> : posts.map(post => <Event post={post} />)}

                    </div>
                </div>

            </div>

        </div>
    );
}