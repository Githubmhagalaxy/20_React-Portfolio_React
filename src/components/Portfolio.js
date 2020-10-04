import React from 'react';
import image from '../assets/img/download.jpg';

const Portfolio = () => {
    return (
        <>
            <section className="portfolio-sec container">
                <div className="title">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolios">
                    <ul>
                        <li>
                        <div className="column">
                            <a href="#">
                                <figure>
                                    <img src={image} alt=""/>
                                </figure>
                                <div className="text">
                                    <h5 className="heading">heading</h5>
                                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsum maxime neque optio tempore vel!</p>
                                </div>
                            </a>
                        </div>
                    </li>
                        <li>
                            <div className="column">
                                <a href="#">
                                    <figure>
                                        <img src={image} alt=""/>
                                    </figure>
                                    <div className="text">
                                        <h5 className="heading">heading</h5>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsum maxime neque optio tempore vel!</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="column">
                                <a href="#">
                                    <figure>
                                        <img src={image} alt=""/>
                                    </figure>
                                    <div className="text">
                                        <h5 className="heading">heading</h5>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsum maxime neque optio tempore vel!</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="column">
                                <a href="#">
                                    <figure>
                                        <img src={image} alt=""/>
                                    </figure>
                                    <div className="text">
                                        <h5 className="heading">heading</h5>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsum maxime neque optio tempore vel!</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="column">
                                <a href="#">
                                    <figure>
                                        <img src={image} alt=""/>
                                    </figure>
                                    <div className="text">
                                        <h5 className="heading">heading</h5>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsum maxime neque optio tempore vel!</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="column">
                                <a href="#">
                                    <figure>
                                        <img src={image} alt=""/>
                                    </figure>
                                    <div className="text">
                                        <h5 className="heading">heading</h5>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsum maxime neque optio tempore vel!</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="column">
                                <a href="#">
                                    <figure>
                                        <img src={image} alt=""/>
                                    </figure>
                                    <div className="text">
                                        <h5 className="heading">heading</h5>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsum maxime neque optio tempore vel!</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Portfolio;