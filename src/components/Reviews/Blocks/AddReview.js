import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import firebase from '../../../firebase/firebase'
import { Rating } from 'react-simple-star-rating'
function AddReview(props) {
    const [rating, setRating] = React.useState(0)
    const [reviewer, setReviewer] = React.useState('')
    useEffect(() => {
        const auth = getAuth(firebase)

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setReviewer(user.uid)
            }
        })
    }, [])
    const onSubmit = (e) => {
        e.preventDefault()
        const form = document.getElementById('review-form')
        const formData = new FormData(form)
        formData.append('rating', Math.floor(rating/100*5))
        formData.append('reviewed_to', props.user.uid)
        formData.append('reviewer', reviewer)
        fetch('http://localhost:3030/api/review/post', {
            method: 'post',
            mode: 'cors',
            body: formData
        }).then(res => res.json()).then(data => {
            // alert(data)
            if(data.status==='success'){
                props.setShowAddReview(false)
            }
        }).catch(err => {
            alert(err)
        })
    }
    const onSetRating = (rate) => {
        setRating(rate)
    }
    const closeWindow = (e) => {
        if(e.target.id==='add-review-form'){
            props.setShowAddReview(false)
        }
    }
    useEffect(() => {
        
        window.addEventListener('click', closeWindow)
        return () => {
            window.removeEventListener('click', closeWindow)
        }
    }, [])
  return (
    <div className='add-review ' id='add-review-form'>
        <div className='container review-container'>
            <div className='heading'>
                <h3>Add Review</h3>
            </div>
            <form className='form' id='review-form' onSubmit={(e)=>onSubmit(e)}>
                <Rating ratingValue={0} size={20} onClick={onSetRating}/>
                <div className='form-group'>
                    <label for='review'>Review</label>
                    <textarea className='form-control' id='review' rows='3' name='comment'></textarea>
                </div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddReview