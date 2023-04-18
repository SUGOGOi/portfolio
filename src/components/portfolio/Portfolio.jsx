import React, { useState } from 'react'
import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList'

const Portfolio = () => {

    const [selected, setSelected] = useState("featured");

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "Mobile",
            title: "Mobile App",
        }, {
            id: "Design",
            title: "Design",
        },
        {
            id: "Content",
            title: "Content",
        }
    ]
    return (
        <div className='portfolio' id="portfolio" >

            <h1>PortFolio</h1>
            <ul>
                {
                    list.map((item, id) => (
                        <PortfolioList key={id} title={item.title} active={selected === item.id} setSelected={setSelected}
                            id={item.id}
                        />
                    ))
                }
            </ul>
            <div className="portfolio-container">
                <div className="port-item">
                    <img src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h3 className="port-h3" >Banking App</h3>

                </div>
                <div className="port-item">
                    <img src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h3 className="port-h3" >Banking App</h3>

                </div>
                <div className="port-item">
                    <img src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h3 className="port-h3" >Banking App</h3>

                </div>
                <div className="port-item">
                    <img src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h3 className="port-h3" >Banking App</h3>

                </div>
                <div className="port-item">
                    <img src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h3 className="port-h3" >Banking App</h3>

                </div>
                <div className="port-item">
                    <img src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h3 className="port-h3" >Banking App</h3>

                </div>
            </div>
        </div>
    )
}

export default Portfolio