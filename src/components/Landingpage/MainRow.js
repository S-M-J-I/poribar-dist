import React, { Component } from 'react'

export default class Row extends Component {

    render() {
        return (
            <div className='imgrow'>
                <div className='text-on-image'>
                    <h1 className='poribar-font'>PORIBAR</h1>
                    <p className='poribar-text'>Find the best care for the elderly in <br />your family</p>
                    <div style={{ textAlign: 'left' }}>
                        <button className='btn btn-success' onClick={()=> window.location='/user_signup'}>Join Now</button>
                    </div>
                </div>
            </div>

        )
    }
}
