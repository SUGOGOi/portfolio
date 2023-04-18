import React from 'react'
import "./topbar.scss"

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={'topbar ' + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">Port<span className='logo' >Folio.</span> </a>
                </div>


                <div className="right">
                    <a href="#about">About Me</a>
                    <a href="#works">Works</a>
                    {/* <a href="#testimonials">Testimonials</a> */}
                    <a href="#contact">Contact</a>
                    <div className="menu" onClick={() => setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Topbar