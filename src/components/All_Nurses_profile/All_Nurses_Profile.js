import React, { useEffect, useState } from "react";
import nursedp from '../../resources/images/nursedp.jpg'
import '../../styles/All_Nurses_profile_styles.css';
import Nurse_profile from './Nurse_profile';
// import { post } from "jquery";
export default function All_Nurses_Profile() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3030/api/auth/nurse/getall", {
            method: "POST",
            mode: "cors"
        }).then(res => res.json()).then(data => setPosts(data)).catch(err => console.log(err))
    }, [])

    return (
        <div >
            <h1 className="m-auto text-center maincolorbg text-white allnursesprofileheader py-4">
                Find Your Favourite Nurse
            </h1>
            <div >
                <div className="d-flex m-auto px-4 py-4 justify-content-center">
                    <div class="input-group mb-3 w-50">
                        <input type="text" class="form-control" placeholder="search your favourite nurses" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i className="allnursesprofilesearchicon fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="box-container-allnursesprofile px-3 m-auto">
                        {posts.map(post => <Nurse_profile imgurl={post.avatar} post={post} />)}
                    </div>
                </div>

            </div>

        </div>
    );
}