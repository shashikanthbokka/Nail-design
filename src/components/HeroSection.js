import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='content'>
      <p className='slide1'>slide number 1</p>
      <h1 className='slide1name'>FIRST SLIDE LABEL</h1>
      <p className='slide1'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          BOOK APPOINTMENT
        </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
