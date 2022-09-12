import React, { Component } from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { MdFamilyRestroom } from 'react-icons/md'

export default class AboutRow extends Component {
    render() {
        return (
            <div className='container'>
                <br />
                <br />
                <br />
                <div className='row'>
                    <h1 className='title-text'>Care curated just for you</h1>
                    <br />
                    <p className='title-p'>The services of <strong style={{ color: 'var(--green)' }}>Poribar</strong> are built around the responsibility where you come first.
                        Nothing is more important to us than the wellbeing of you and your family.</p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='row'>
                    <h1 className='title-text'>Why are we different</h1>
                    <div className='col-sm'>
                        <br />
                        <br />
                        <div className='icon-row'>
                            <FaHandHoldingHeart className='icons' /> <br />
                            Health and Safety <br />
                            are our top priorities
                        </div>
                    </div>
                    <div className='col-sm'>
                        <br />
                        <br />
                        <div className='icon-row'>
                            <BiTimeFive className='icons' /> <br />
                            24/7/365 available <br /> services, anywhere
                        </div>
                    </div>
                    <div className='col-sm'>
                        <br />
                        <br />
                        <div className='icon-row'>
                            <MdFamilyRestroom className='icons' /> <br />
                            Helping you bring balance <br /> to life and family
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
