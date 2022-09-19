import React, { Component, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Row() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='imgrow'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item style={{ marginTop: '700px' }}>
                    <div className='text-on-image'>
                        <h1 className='poribar-font'>PORIBAR</h1>
                        <p className='poribar-text'>Find the best care for the elderly in <br />your family</p>
                        <div style={{ textAlign: 'left' }}>
                            <button className='btn btn-success' onClick={() => window.location = '/user_signup'}>Join Now</button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item style={{ marginTop: '700px' }}>
                    <div className='text-on-image'>
                        <h1 className='poribar-font'>PORIBAR</h1>
                        <p className='poribar-text'>Do you think you can help <br />those who need you?</p>
                        <div style={{ textAlign: 'left' }}>
                            <button className='btn btn-success' onClick={() => window.location = '/nurse_signup'}>Join Now</button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
