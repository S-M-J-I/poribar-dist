import React, { useEffect, useState } from "react";
import healthChecker from '../images/Health Check .png'
import game from '../images/Game.png'
import nurses from '../images/Review.png'
import review from '../images/Nurse.png'
import '../styles/Facilities_styles.css';
import Service from './Service'
import { post } from "jquery";
export default function Facilities(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services",{method:"POST",
        mode:"cors"
    }).then(res => res.json()).then(data => setPosts(data)).catch(err => console.log(err))
    },[])
    return(
        <div >
            <h1 className="m-auto text-center maincolortext facilitiesheader py-4">
                Our Services
            </h1>
            <div className="d-flex w-75 m-auto ">
                <div className="container-Facilities">
                   {posts.map(post => <Service imgurl = {nurses} post = {post}/>)}
                </div>
                {/* <div className="container">
                {posts.map(post => <Service imgurl = {nurses} post = {post}/>)}
                </div> */}
            </div>
        </div>
    );
}