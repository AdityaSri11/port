import React from 'react';
import './timeline.css';

import pd from '../../assets/purdue.jpeg';
import pf from '../../assets/PFPT.png';
import f from '../../assets/f.jpg';
import pe from '../../assets/penn.png';


const Timeline = () => {

    return (
        
        <section className="timelineSection" id="c">

                <h1 className='header'>Professional Timeline</h1>

                <div className="timeline">

                    <div className="container left-container">
                        <img src={pd} alt="" />
                        <div className="text-box">
                            <h2>Purdue University</h2>
                            <small>08/2020 - 12/2023 - Student</small>
                            <p>Graduated from Purdue University with a Bachelors of Science in Computer Engineering, complemented by a minor in Mathematics, to give me a robust foundation in analytical problem-solving and quantitative reasoning.</p>
                            <span className="lc-arrow"></span>
                        </div>
                    </div>

                    <div className="container right-container">
                        <img src={pd} alt="" />
                        <div className="text-box">
                            <h2>Purdue University</h2>
                            <small>08/2020 - 12/2023 - Teacher's Assistant</small>
                            <p>Elevated the learning experiences of honors engineering students by spearheading key responsibilities, including grading assignments, facilitating office hours, and conducting comprehensive code reviews.</p>
                            <span className="rc-arrow"></span>
                        </div>
                    </div>

                    <div className="container left-container">
                        <img src={f} alt="" />
                        <div className="text-box">
                            <h2>Fidelity Investments</h2>
                            <small>06/2022 - 08/2022 - Software Engineering Intern</small>
                            <p>Modernized legacy software by demonstrating a deep understanding of existing systems and implementing documentation and logging software that detailed system performance data.</p>
                            <span className="lc-arrow"></span>
                        </div>
                    </div>

                    <div className="container right-container">
                        <img src={pf} alt="" />
                        <div className="text-box">
                            <h2>Proofpoint Inc.</h2>
                            <small>06/2023 - 08/2023 - Software Development Intern</small>
                            <p>Designed and implemented a website allowing a diverse set of users to retrieve needed information from a database using the Amazon Web Services (AWS Lambda and AWS Athena) development suite.</p>
                            <span className="rc-arrow"></span>
                        </div>
                    </div>

                    <div className="container left-container">
                        <img src={pe} alt="" />
                        <div className="text-box">
                            <h2>University of Pennsylvania</h2>
                            <small>08/2024 - 04/2027 - Student</small>
                            <p>Current J.D. Candidate at the University of Pennsylvania (Penn Carey Law) gaining a comprehensive understanding of legal principles and developing critical analytical skills essential for navigating complex legal issues.</p>
                            <span className="lc-arrow"></span>
                        </div>
                    </div>


                </div>
                
        </section>

        
    )
}

export default Timeline