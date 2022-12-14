import React from "react";
import { Carousel } from "react-responsive-carousel";
import Background1 from "./Background1.png";
import Background2 from "./Background2.png";
import { Button } from "react-bootstrap";

import {useNavigate} from 'react-router-dom'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const cardStyle ={
    position: 'relative',
    bottom: '20%',
    fontSize: '40px',
    transform: 'translateX(400px)',
    background: '#78BC61',
    border: '1px solid #E8EBF7'
}
const cardContainer = {
    position: 'relative',
    height:'100%',
}

function ToAboutUs() {
    
}
export default () => (
    <div>
        <Carousel autoPlay showThumbs={false}
        infiniteLoop={true} dynamicHeight={true} interval={10000}>
            <div style={cardContainer}>
                <img alt="About Us" src={Background1} /> 
                <Button style={cardStyle} href="/About">About Us</Button> 
            </div>
            <div style={cardContainer}>
                <img alt="Create an account" src={Background2} />
                <Button style={cardStyle} href="/register">Register</Button>
            </div>
        </Carousel>
    </div>
);
