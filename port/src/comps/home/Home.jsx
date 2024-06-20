import React from 'react';
import './home.css';

import bg from '../../assets/circle_aditya.png';
import ln from '../../assets/about.png';
import sg from '../../assets/sg.jpg';

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
                        
                        <a href="#about">
                            <button className="btn">
                                {/* <img className="ln" src= {ln} alt="Button Icon"/> About Me */}
                                🔎 About Me
                            </button>
                        </a>

                    </div>
                    
                </div>
                
                <img src={bg} alt="Profile" className="bg" />   
            </div>

            <section className="about" id="about">

                <h1 className='heading'>About Me</h1>
                <br />  
                <hr></hr>
                <br />
                
                <div className="container_text">
                    <p className='text'>Hello! I'm Aditya Srikanth, native of Edison, NJ, and I'm thrilled to be embarking on the journey to law school. My journey to this point has been guided by a profound interest in applying my technical skills within the realm of law, navigating complex systems to advocate for meaningful change.</p>
                    <br />
                    <p className='text'>This passion has led me to pursue a Bachelor of Science in Computer Engineering at Purdue Engineering with a minor in mathematics. During my undergraduate years, I immersed myself in projects that challenged me to think critically and innovate solutions. I learned to navigate intricate databases and cloud technologies.  </p>
                    <br />
                    <p className="text">Beyond technical proficiency, my experiences have taught me invaluable lessons in leadership and collaboration. Whether leading the development of my university's student government website or partnering with industry professionals to prototype applications, I've honed my ability to communicate effectively, manage projects, and navigate diverse perspectives—all skills I'm eager to apply in the legal field.</p>
                    <br />
                    <p className="text">Outside of academic pursuits, my interests in music, sports, and cultural exploration play a significant role in shaping who I am. I find inspiration in music artists like ASAP Rocky, Jaden Smith, and Brent Faiyaz, exploring their creativity and perspectives. Attending concerts and engaging in discussions on legal philosophy and current affairs not only enrich my perspective but also fuel my drive to seek knowledge and make a positive impact wherever I go.</p>
                    <br />
                    <p className="text">As I embark on this new chapter, I am eager to immerse myself in the rigorous study of law, embrace new challenges, and cultivate a career grounded in integrity and advocacy. I look forward to integrating my diverse interests with legal education and contributing my unique perspective to the legal profession.</p>
                    <br />
                    <p className="sig">- Aditya Srikanth</p>

                    <img src={ sg } alt="" className="sigpic" />
                </div>
                
            </section>
            
        </section>
        
    )
}

export default Home