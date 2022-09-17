import React, { Component } from 'react'
import map from '../../resources/images/map.png'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

export default class BottomRow extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center w-100'>
                <br />
                <div className='row w-100'>
                    <div className='col-sm'>
                        <form style={{ textAlign: 'left' }}>
                            <div className='form-group'>
                                <label for='newsletter'><strong>Sign up for our Newsletters:</strong></label>
                                <input type='text' className='form-control' name='newsletter'></input>
                            </div>
                            <br />
                            <div className='form-group'>
                                <button className='btn btn-success'>Sign Up</button>
                            </div>
                        </form>
                        <br />
                        <br />
                        <div style={{ textAlign: 'left' }}>
                            <strong>Social Media</strong>
                            <div className='row'>
                                <div className='col-sm'>
                                    <BsFacebook className='icons' style={{marginRight: '10px'}}/>

                                    <BsLinkedin className='icons' />
                                </div>
                                <div className='col-sm'>
                                    
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div style={{ textAlign: 'left' }}>
                            <strong>Phone: </strong>01289172873
                        </div>
                        <br />
                        <div style={{ textAlign: 'left' }}>
                            <strong>Email: </strong>help@poribar.com
                        </div>

                    </div>
                    {/* REPLACE THIS IMAGE WITH GOOGLE MAPS COMPONENT */}
                    <div className='col-sm'>
                        <img style={{ width: '600px', textAlign: 'right' }} src={map} alt='map'></img>
                    </div>
                </div>
            </div>
        )
    }
}
