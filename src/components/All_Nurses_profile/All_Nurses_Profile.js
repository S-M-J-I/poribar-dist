import React, { useEffect, useState } from "react";
import nursedp from '../../resources/images/nursedp.jpg'
import '../../styles/All_Nurses_profile_styles.css';
import Nurse_profile from './Nurse_profile';
// import { post } from "jquery";
export default function All_Nurses_Profile() {
    const [nurses, setNurses] = useState([]);
    const [posts, setPosts] = useState([]);
    const [keyWords, setKeyWords] = useState("");
    useEffect(() => {
        fetch("http://localhost:3030/api/auth/nurse/getall", {
            method: "POST",
            mode: "cors"
        }).then(res => res.json()).then(data => {
            setPosts(data)
            setNurses(data)
        }).catch(err => console.log(err))
    }, [])
    useEffect(() => {
        if(keyWords.length > 0){
            const filtered = nurses.filter(post => {
                return post.name.toLowerCase().includes(keyWords.toLowerCase())
            })
            setPosts(filtered)
        }else{
            setPosts(nurses)
        }
    }, [keyWords])

    return (
        <div >
            <h1 className="m-auto text-center maincolorbg text-white allnursesprofileheader py-4">
                Find Your Favourite Nurse
            </h1>
            <div >
                <div className="d-flex m-auto px-4 py-4 justify-content-center">
                    <div class="input-group mb-3 w-50">
                        <input type="text" class="form-control" placeholder="Search your favourite nurses" aria-describedby="basic-addon2" onChange={(e)=> setKeyWords(e.target.value)} />
                        <div class="input-group-append">
                            <button className="btn btn-success" type="button">
                                <i className="allnursesprofilesearchicon fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-center w-100'>
                    <div className="box-container-allnursesprofile px-3 m-auto w-100">
                        {posts.length==0 ? <h1 className='text-center'>No Nurses Found</h1> : null}
                        {posts.map(post => <Nurse_profile imgurl={post.avatar} post={post} />)}
                    </div>
                </div>

            </div>

        </div>
    );
}