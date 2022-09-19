import React from 'react'
import '../../styles/Reviews_styles.css'
import Review from './Blocks/Review'
import AddReview from './Blocks/AddReview'
import firebase from '../../firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function Reviews(props) {
    const [reviews, setReviews] = React.useState([])
    const [showAddReview, setShowAddReview] = React.useState(false)

    const [isOwn, setIsOwn] = React.useState(false)

    React.useEffect(() => {
        const auth = getAuth(firebase)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.uid === props.user.uid) {
                    setIsOwn(true)
                }
            }
        })
    }, [])

    React.useEffect(() => {
        fetch('http://localhost:3030/api/review/get-reviews-nurse/' + props.user.uid, {
            method: 'post',
            mode: 'cors'
        }).then(res => res.json()).then(data => {
            setReviews(data)
        }).catch(err => {
            alert(err)
        })
    }, [showAddReview])
    return (
        <>{showAddReview ? <AddReview user={props.user} setShowAddReview={setShowAddReview} /> : <></>}
            <div className='d-flex justify-content-center align-items-center nurse_reviews '>
                <div className='reviews shadow'>
                    <div className='nurse_reviews_count d-flex justify-content-between align-items-center'>
                        <h3>{reviews.length}&nbsp;reviews</h3>
                        {!isOwn && <button className='btn btn-success' onClick={() => setShowAddReview(true)}>Write a review</button>}
                    </div>
                    <div className='nurse_reviews_review'>
                        {reviews.map((rev) => <Review rev={rev} />)}
                    </div>
                </div>
            </div>
        </>
    )
}