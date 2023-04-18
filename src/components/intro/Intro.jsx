import React from 'react'
import "./intro.scss"
import me1 from "../../assets/me1.jpg"
import down from "../../assets/down.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Intro = () => {

    const [text] = useTypewriter({
        words: ["Web Develpoer", "MERN Stack"],
        loop: 0,
    })

    return (
        <div className="intro" id="intro" >
            <div className="intro-left">
                <div className="imgContainer">
                    <img src={me1} alt="" />
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Sumsum Gogoi</h1>
                    <h3> <span >{text}</span> <span style={{ color: "rgb(61, 186, 235)" }} ><Cursor cursorStyle="|" /></span> </h3>
                </div>
                <a href="#about">
                    <img src={down} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro