import React from "react";
import '../../../styles/Nurse_Profile_Review_Form_styles.css'
export default function Nurse_Profile_Review_Form_ratings(props){
    console.log(props.rating.q1)
    return(
        <div className="d-flex px-5 py-2">
            <div className="Nurse_Profile_Review_Form_ratings_container">
                    {props.rating.q}
            </div>
            <div className="d-flex Nurse_Profile_Review_Form_ratings_container">
                <div className="Nurse_Profile_Review_Form_ratings_container_radio_button_spacing d-flex justify-content-center">
                <input className = "Nurse_Profile_Review_Form_ratings_container_radio_button" type="radio" id={props.rating.id} name={props.rating.name} value={props.rating.value}/>
                </div>
                <div className="Nurse_Profile_Review_Form_ratings_container_radio_button_spacing d-flex justify-content-center">
                <input className = "Nurse_Profile_Review_Form_ratings_container_radio_button" type="radio" id={props.rating.id} name={props.rating.name} value={props.rating.value}/>
                </div>
                <div className="Nurse_Profile_Review_Form_ratings_container_radio_button_spacing d-flex justify-content-center">
                <input className = "Nurse_Profile_Review_Form_ratings_container_radio_button" type="radio" id={props.rating.id} name={props.rating.name} value={props.rating.value}/>
                </div>
                <div className="Nurse_Profile_Review_Form_ratings_container_radio_button_spacing  d-flex justify-content-center">
                <input className = "Nurse_Profile_Review_Form_ratings_container_radio_button" type="radio" id={props.rating.id} name={props.rating.name} value={props.rating.value}/>
                </div>
                <div className="Nurse_Profile_Review_Form_ratings_container_radio_button_spacing d-flex justify-content-center ">
                <input className = "Nurse_Profile_Review_Form_ratings_container_radio_button" type="radio" id={props.rating.id} name={props.rating.name} value={props.rating.value}/>
                </div>
                
            </div>
        </div>
    )
}