import React, { useState } from 'react'
import "./works.scss"
import arrow from "../../assets/arrow.png"
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);


const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "https://res.cloudinary.com/dikx4aj2f/image/upload/v1681320426/Portfolio%20Projects/portfolio%20projects%20icon/globe_rbpygp.png",
            title: "Mern Stack Video Straming Platform",
            desc: "dsfgdfg bdfghdfghsdfgs sfsdgffg",
            img: "https://res.cloudinary.com/dikx4aj2f/image/upload/v1681320259/Portfolio%20Projects/Screenshot_20230412_214553_qpgjtx.png"

        },
        {

            id: "2",
            icon: "https://res.cloudinary.com/dikx4aj2f/image/upload/v1681320426/Portfolio%20Projects/portfolio%20projects%20icon/globe_rbpygp.png",
            title: "HTML, CSS Portfolio Website Project",
            desc: "dsfgdfg bdfghdfghsdfgs sfsdgffg",
            img: "https://res.cloudinary.com/dikx4aj2f/image/upload/v1681320260/Portfolio%20Projects/Screenshot_20230412_215228_edfrk6.png"

        },
        {

            id: "3",
            icon: "https://res.cloudinary.com/dikx4aj2f/image/upload/v1681320426/Portfolio%20Projects/portfolio%20projects%20icon/globe_rbpygp.png",
            title: "NodeJs, Express API project",
            desc: "dsfgdfg bdfghdfghsdfgs sfsdgffg",
            img: "https://res.cloudinary.com/dikx4aj2f/image/upload/v1681320258/Portfolio%20Projects/Screenshot_20230412_223646_ziv5ps.png",

        }
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className='works' id="works"  >
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
                {data.map((d, id) => (
                    <div className="container" key={id} >
                        <div className="item">
                            <div className="left">
                                <div className="left-container">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2 className='works-h2' >{d.title}</h2>
                                    <p className='works-p' >{d.desc}</p>
                                    <span className="works-span" >Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img className='works-right-img' src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <img src={arrow} className='works-arrow left-arrow ' alt="" onClick={() => handleClick("left")} />
            <img src={arrow} className='works-arrow right-arrow ' alt="" onClick={() => handleClick("right")} />
        </div>
    )
}

export default Works