import React from 'react';
import './timeline.css';

import pd from '../../assets/purdue.jpeg';

const Timeline = () => {

    return (
        
        <section className="timelineSection" id="c">

                <h1 className='header'>Professional Timeline</h1>

                <div className="timeline">

                    <div className="container left-container">
                        <img src={pd} alt="" />
                        <div className="text-box">
                            <h2>Purdue University</h2>
                            <small>2020 - 2023</small>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            <span className="lc-arrow"></span>
                        </div>
                    </div>

                    <div className="container right-container">
                        <img src={pd} alt="" />
                        <div className="text-box">
                            <h2>University of Pennsylvania</h2>
                            <small>2024 - 2027</small>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            <span className="rc-arrow"></span>
                        </div>
                    </div>

                    <div className="container left-container">
                        <img src={pd} alt="" />
                        <div className="text-box">
                            <h2>Purdue University</h2>
                            <small>2020 - 2023</small>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            <span className="lc-arrow"></span>
                        </div>
                    </div>

                    <div className="container right-container">
                        <img src={pd} alt="" />
                        <div className="text-box">
                            <h2>University of Pennsylvania</h2>
                            <small>2024 - 2027</small>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            <span className="rc-arrow"></span>
                        </div>
                    </div>

                    <div className="container left-container">
                        <img src={pd} alt="" />
                        <div className="text-box">
                            <h2>Purdue University</h2>
                            <small>2020 - 2023</small>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            <span className="lc-arrow"></span>
                        </div>
                    </div>


                </div>
                
        </section>

        
    )
}

export default Timeline