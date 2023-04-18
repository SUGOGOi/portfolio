import React from 'react'
import "./footer.scss"
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return (
        <div className='footer-container' >
            <div className="footer-top">
                <h2>Sumsum Gogoi</h2>
                <p className='top-p' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nemo.</p>
                <div className="footer-icons">

                    <a href="https://www.facebook.com/sumsum.gogoi.127"><RiFacebookCircleLine /></a>
                    {/* <li><TiSocialTwitterCircular /></li> */}
                    <a href="https://www.instagram.com/sumsum5491/" >< RiInstagramLine /></a>
                    <a href="https://github.com/SUGOGOi" >< AiFillGithub /></a>
                    <a href="" >< TiSocialLinkedinCircular /></a>

                </div>
            </div>
            <div className="footer-bottom">
                <p className='bottom-p' >Design by- <span className='bottom-span' >Sumsum Gogoi</span> </p>
            </div>
        </div>
    )
}

export default Footer