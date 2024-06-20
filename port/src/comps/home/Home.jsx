import React from 'react';
import './home.css';

import bg from '../../assets/circle_aditya.png';
import ln from '../../assets/linkedinLogo.png';
import pd from '../../assets/purdue.jpeg';

const Home = () => {

    return (

        <section className="homeSections" id="home">
            <div className="homeSection">
                <div className="homeContent">
                    <div className="content">
                        <span  className="hello">Hello,</span>
                        <span className="introText"><span className="mobile">I'm <span className="introName">Aditya</span></span>,<br/>Penn Carey Law Student</span>
                        <p className="introP">J.D. Candidate leveraging my background in Computer Engineering to <br />enhance legal expertise</p>
                        {/* <div className="break"><br /></div> */}
                        
                        <a href="https://www.linkedin.com/in/aditya-srikanth-472540117/">
                            <button className="btn">
                                <img className="ln" src= {ln} alt="Button Icon"/> LinkedIn
                            </button>
                        </a>

                    </div>
                    
                </div>
                
                <img src={bg} alt="Profile" className="bg" />   
            </div>

            
        </section>
        
    )
}

export default Home