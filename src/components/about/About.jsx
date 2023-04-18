import React from 'react'
import "./about.scss"
import cv from "../../assets/cv.pdf"
import me3 from "../../assets/me3.jpg"

const About = () => {
    return (
        <div className='about' id='about' >
            <div className="about-right">

                <img className='about-me3-img' src={me3} alt="" />
            </div>
            <div className="about-left">

                <h2 className='about-h2' >Sumsum Gogoi</h2>
                <p className='about-p' >Lorem ipsum dolor sit amet  elit., magni  Iusto fugit vero quae odio non soluta quam repellat.</p>
                <div className="about-btn">
                    <a className='about-download-btn' href={cv} download >Download CV</a>
                    <a className='about-contact-btn' href='#contact' >Contact Me</a>

                </div>
            </div>
        </div>
    )
}

export default About