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
    useEffect(() => {
        if (search.length === 0 || loading === true) {
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
        // console.log('hehe')
        console.log(tempPosts)
    }, [timer])
    useEffect(() => {
        if (search.length > 0) {
            setPosts(tempPosts.filter(post => post.name.toLowerCase().includes(search.toLowerCase())))
        } else {
            setPosts(tempPosts)
        }
    }, [search])
    useEffect(() => {
        setTimeout(() => {
            // console.log('haha')
            setTimer(!timer)
        }, 2000)
        // console.log('hoho')
    }, [timer])
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
                            <button className="btn btn-secondary" type="button">
                                <i className="eventsearchicon fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div >
                        <button className="btn btn-secondary-event" type="button">
                            <i className="fa fa-calendar"></i>

                            <b className="mx-2">Upcoming</b>
                        </button>
                        <button className="btn btn-secondary-event mx-2" type="button">
                            <i class="fa fa-bars"></i>
                            <b className="mx-2">Popular</b>
                        </button>
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