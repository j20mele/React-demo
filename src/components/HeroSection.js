import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/*  This is where you place the video */}
        <video src='/../../videos/video-2.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        {/* Create a hero button*/}
        <div className="hero-btns">
            {/* Pass in button component */}
            <Button className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
            GET STARTED
            </Button>
            {/* Change button style into primary */}
            <Button className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
            WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection